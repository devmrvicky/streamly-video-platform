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

const RegisterForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [avatarPrev, setAvatarPrev] = useState("");

  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      fullName: "Vikash kumar",
      username: "@vickyK.",
      email: "vikash@gmail.com",
      password: "12345678",
    },
  });

  const handleChange = (e) => {
    const fileData = e.target.files[0];
    setFile(fileData);
    setAvatarPrev(URL.createObjectURL(fileData));
  };

  const handleLogin = async ({ fullName, username, email, password }) => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", file);
      // return;
      setLoading(true);
      setError(false);
      setErrorMessage("");
      const res = await api.post("/users/register", formData, {
        // timeout: 5000,
        // timeoutErrorMessage: "sorry time out",
        // validateStatus: (status) => status <= 500,
      });
      console.log(res);
      toast({
        title: res.successText,
        description: res.data.message,
      });
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      console.log(error.code);
      console.log(error.status);
      console.log(error.stack);
      console.log(error.config);
      setError(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(false);
    setErrorMessage("");
    // setTimeout(() => {
    // }, [1000]);
  }, []);

  return (
    <Form {...form}>
      {error && <AlertDestructive message={errorMessage} />}
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
      </form>
    </Form>
  );
};

export default RegisterForm;
