import { Form } from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomFormField from "../custom/CustomFormField";
import { Button } from "../ui/button";
import SubmitButton from "../buttons/SubmitButton";
import api from "@/axios/api";
import AlertDestructive from "../custom/AlertDestructive";
import { useToast } from "../ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginPending, loginSuccess } from "@/redux/features";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthBtn from "../OAuth/GoogleAuthBtn";

const LoginForm = () => {
  const { loading, error } = useSelector((store) => store.user);

  const form = useForm();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      dispatch(loginPending());
      const res = await api.post("/users/login", data, {
        timeout: 60000,
        timeoutErrorMessage: "Sorry time out!",
      });
      toast({
        description: res.data.message,
      });
      dispatch(loginSuccess(res.data));
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(
        loginFailure({
          title: error?.response?.statusText,
          message: error?.response ? error.response?.data : error.message,
        })
      );
    }
  };

  return (
    <Form {...form}>
      {error && <AlertDestructive {...error} />}
      <form
        action=""
        onSubmit={form.handleSubmit(handleLogin)}
        className="max-w-[600px] w-full mx-auto flex flex-col gap-3"
      >
        <CustomFormField
          type="text"
          name="username"
          label="username or email"
          description="Enter your username or email"
          form={form}
          formInput="input"
          placeholder="username or email"
        />
        <CustomFormField
          type="password"
          name="password"
          label="password"
          description="Enter your password"
          form={form}
          formInput="input"
          placeholder="********"
        />
        <SubmitButton btnText="Log in" loading={loading} />
      </form>
      <div className="w-full h-[1px] my-4 bg-zinc-500 flex items-center justify-center">
        <span className="bg-[#FCFCFD] p-1">or</span>
      </div>
      <div className="w-full flex flex-col">
        <GoogleAuthBtn btnText="login with google" />
        <p className="text-sm py-3 text-zinc-700 hover:text-zinc-800">
          I don't have account.{" "}
          <Link to="/user/register" className="hover:underline pb-1">
            Register in
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
