import React from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomFormField from "../custom/CustomFormField";

const SearchForm = () => {
  const form = useForm();
  const handleSearch = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(handleSearch)}
        className="w-full max-w-[500px] ml-auto"
      >
        <CustomFormField
          type="search"
          form={form}
          name="search"
          formInput="input"
          placeholder="search video and more"
        />
      </form>
    </Form>
  );
};

export default SearchForm;
