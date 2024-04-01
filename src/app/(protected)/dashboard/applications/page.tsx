"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrevApplications from "../_components/Client/Requests/PrevApplication";
import ApplicationForm from "../_components/Client/Requests/ApplicationForm";

const Requests = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-4">
      <Card className="col-span-12 md:col-span-8">
        <CardHeader>
          <CardTitle className="text-primary">Application Form</CardTitle>
          <CardDescription>
            Fill out the following form to apply for a professional
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ApplicationForm />
        </CardContent>
      </Card>

      <PrevApplications />
    </div>
  );
};

export default Requests;
