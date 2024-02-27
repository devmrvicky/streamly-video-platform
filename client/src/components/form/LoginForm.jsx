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

const LoginForm = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const { loading, error } = useSelector((store) => store.user);

  const form = useForm();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    try {
      dispatch(loginPending());
      const res = await api.post("/users/login", data, {
        timeout: 15000,
        timeoutErrorMessage: "Sorry time out!",
      });
      toast({
        // title: res.successText,
        variant: "success",
        description: res.data.message,
      });
      dispatch(loginSuccess(res.data));
      console.log(res);
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
    </Form>
  );
};

export default LoginForm;
