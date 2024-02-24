import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import CustomFormField from "../custom/CustomFormField";
import { Button } from "../ui/button";
import CustomAvatar from "../custom/CustomAvatar";

const LoginForm = () => {
  const form = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleLogin)}>
        <div className="profile relative">
          <div className="background-img w-full border h-[200px]"></div>
          <div className="avatar border rounded-full absolute">
            <CustomAvatar />
          </div>
        </div>
        <CustomFormField
          type="text"
          name="fullName"
          label="Full name"
          description="Enter your Full name"
          form={form}
          formInput="input"
          placeholder="Vikash kumar"
        />
        <CustomFormField
          type="text"
          name="username"
          label="username"
          description={`Enter your username. this username should be unique and start with "@".`}
          form={form}
          formInput="input"
          placeholder="@vickyk"
        />
        <CustomFormField
          type="email"
          name="email"
          label="Email"
          description="Enter your email"
          form={form}
          formInput="input"
          placeholder="********"
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
