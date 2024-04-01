"use client";

import ReusableSelect from "@/components/reusable/ReusableSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RoleSelector from "./RoleSelector";
import { useState } from "react";
import ReusableAlertDialog from "@/components/reusable/ReusableAlertDialog";
import { Button } from "@/components/ui/button";
import { toastGenerator } from "@/lib/helpers";
import axios from "axios";
import { useAuthStore } from "@/lib/states/AuthStore";

const ApplicationForm = () => {
  const [formField, setFormField] = useState({
    title: "",
    role: "",
    experience: "",
    description: "",
  });
  const {userData} = useAuthStore();

  const submit = async () => {
    toastGenerator("loading");
    console.log(formField);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_PATH}/application`,
        {
          headers: {
            Authorization: `Bearer ${userData?.token}`,
          },
          body: {
            ...formField,
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastGenerator("error", error.response?.data.message);
      }
    }
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_SERVER_PATH}/auth/login`,
    //     {
    //       email: formData.get("email"),
    //       password: formData.get("password"),
    //     }
    //   );
    //   if (res.data.message == "verify your email!") {
    //     toast.remove();
    //     toast("Verify your email!", {
    //       icon: <Info className="text-primary" />,
    //     });
    //     return router.push(
    //       `/register/verify-email?email=${formData.get("email")}`
    //     );
    //   }
    //   toastGenerator("success", res.data.message);
    //   localStorage.setItem("auth-token", res.data.data.token);
    //   localStorage.setItem(
    //     "user-data",
    //     JSON.stringify(
    //       _.pick(res.data.data, [
    //         "email",
    //         "fristname",
    //         "lastname",
    //         "verificationStatus",
    //       ])
    //     )
    //   );
    //   return router.push("/dashboard");
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     toastGenerator("error", error.response?.data.message);
    //   }
    // }
  };

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-center">
        <Label htmlFor="title">
          <span className="mr-4">Title</span>
        </Label>
        <Input
          name="title"
          placeholder="Application for example role..."
          className="my-2"
        />
      </div>

      <div className="mb-4">
        <Label>
          <div className="flex items-center justify-between">
            <span className="mr-4">Slect your Role</span>
            <RoleSelector />
          </div>
        </Label>
      </div>

      <div className="mb-4">
        <Label>
          <div className="flex items-center justify-between">
            <span className="mr-4">Experience in the field</span>
            <ReusableSelect
              data={[
                { label: "Less than 1 year", value: "-1" },
                { label: "More than 1 year", value: "1+" },
                { label: "More than 2 year", value: "2+" },
                { label: "More than 3 year", value: "3+" },
                { label: "More than 4 year", value: "4+" },
                { label: "More than 5 year", value: "5+" },
              ]}
              selectValue="Select Experience"
              title={"Options"}
            />
          </div>
        </Label>
      </div>

      <div>
        <Label>
          Your Application description
          <Textarea
            className="my-2"
            placeholder="Describe your role or paste your application..."
          />
        </Label>
      </div>

      <ReusableAlertDialog
        trigger={<Button>Submit</Button>}
        title="Send your application for review?"
        description="You can't modify the content of the application after it reaches to submission process."
        acceptFn={() => {
          console.log("Submitted");
          submit();
        }}
        cancelFn={() => {
          alert("Application Discarded!");
        }}
      />
    </>
  );
};

export default ApplicationForm;
