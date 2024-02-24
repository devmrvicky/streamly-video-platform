import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import CustomFormField from "../custom/CustomFormField";
import { Button } from "../ui/button";

const LoginForm = () => {
  const form = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleLogin)}>
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
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
