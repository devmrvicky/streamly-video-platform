import { uploadIcon } from "@/assets";
import SubmitButton from "@/components/buttons/SubmitButton";
import CustomAvatar from "@/components/custom/CustomAvatar";
import CustomFormField from "@/components/custom/CustomFormField";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const ProfileSetting = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((store) => store.user);
  const { fullName, userName, avatar, email } = currentUser.data.user;
  const form = useForm({ defaultValues: { fullName } });
  return (
    <div>
      <h1>Update your profile</h1>
      <Form {...form}>
        <form>
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
                    <CustomAvatar imgSrc={avatar} />
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
                      // onChange={handleChange}
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
          <SubmitButton btnText="save changes" loading={loading} />
        </form>
      </Form>
    </div>
  );
};

export default ProfileSetting;
