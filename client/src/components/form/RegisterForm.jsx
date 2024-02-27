import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomFormField from "../custom/CustomFormField";
import { Button } from "../ui/button";
import CustomAvatar from "../custom/CustomAvatar";
import AlertDestructive from "../custom/AlertDestructive";
import api from "@/axios/api";
import SubmitButton from "../buttons/SubmitButton";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { MdOutlineFileUpload } from "react-icons/md";
import { uploadIcon } from "@/assets";
import { useToast } from "../ui/use-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [avatarPrev, setAvatarPrev] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm();

  const handleChange = (e) => {
    const fileData = e.target.files[0];
    setFile(fileData);
    setAvatarPrev(URL.createObjectURL(fileData));
  };

  const handleLogin = async ({ fullName, username, email, password }) => {
    try {
      console.log({ fullName, username, email, password });
      // return;
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", file);
      // return;
      setLoading(true);
      setError(false);
      setErrorMessage({ title: "", message: "" });
      const res = await api.post("/users/register", formData, {
        timeout: 15000,
        timeoutErrorMessage: "sorry time out",
      });
      console.log(res);
      toast({
        title: res.successText,
        description: res.data.message,
      });
      navigate("/users/login");
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMessage({
        title: error?.response?.statusText,
        message: error?.response ? error.response?.data : error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(false);
    setErrorMessage({ title: "", message: "" });
  }, []);

  return (
    <Form {...form}>
      {error && <AlertDestructive {...errorMessage} />}
      <form
        action=""
        onSubmit={form.handleSubmit(handleLogin)}
        className="max-w-[600px] w-full mx-auto flex flex-col gap-3"
      >
        <div className="profile relative flex flex-col gap-3 items-center justify-center py-3">
          <FormField
            className="form-field"
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem className="from-item">
                <FormLabel
                  htmlFor="avatar"
                  className={`block w-32 h-32 border rounded-full cursor-pointer relative before:content-[""] before:w-full before:h-full before:bg-black/10 before:absolute before:top-0 before:left-0 before:z-10 before:rounded-full before:hidden hover:before:block`}
                >
                  <CustomAvatar imgSrc={avatarPrev} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    {uploadIcon}
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="w-0 sr-only"
                    accept="image/png, image/jpeg"
                    required
                    {...field}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="text-xl">User profile</span>
        </div>
        <CustomFormField
          type="text"
          name="fullName"
          label="Full name"
          description="Enter your Full name"
          form={form}
          placeholder="Vikash kumar"
        />
        <CustomFormField
          type="text"
          name="username"
          label="username"
          description={`Enter your username. this username should be unique and start with "@".`}
          form={form}
          placeholder="@vickyk"
        />
        <CustomFormField
          type="email"
          name="email"
          label="Email"
          description="Enter your email"
          form={form}
          placeholder="example@gmail.com"
        />
        <CustomFormField
          type="password"
          name="password"
          label="Password"
          description="Enter your password"
          form={form}
          placeholder="********"
        />
        <SubmitButton loading={loading} btnText="Register" />
        <p className="text-sm py-3 text-zinc-700 hover:text-zinc-800">
          I have already registered.{" "}
          <Link to="/user/login" className="hover:underline pb-1">
            Login in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
