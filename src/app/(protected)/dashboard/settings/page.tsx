"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import GeneralTab from "./_components/GeneralTab";
import NotificationTab from "./_components/NotificationTab";
import SecurityTab from "./_components/SecurityTab";

const Settings = () => {
  return (
    <div className="col-span-12">
        <Tabs defaultValue="general" className=" my-4 mx-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notification">Notificaitons</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent
            value="general"
            className="w-full grid grid-cols-12 gap-4 p-2 my-4 md:px-6"
          >
            <GeneralTab />
          </TabsContent>
          <TabsContent value="notification">
            <NotificationTab />
          </TabsContent>

          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default Settings;
