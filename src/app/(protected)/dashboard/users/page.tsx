import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Searchbar from "@/components/reusable/Searchbar";
import { Card } from "@/components/ui/card";
import StatCard from "../_components/Admin/Home/StatCard";
import { User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Users = () => {
  return (
    <div className="col-span-12 mx-4 gap-">
      <Card className="w-full grid grid-cols-4 mb-4 gap-4 border-0">
        <StatCard colorMode="red" icon={User} />
        <StatCard colorMode="yellow" icon={User} />
        <StatCard colorMode="blue" icon={User} />
        <StatCard colorMode="green" icon={User} />
      </Card>
      <div className="flex gap-2">
        <Card className="w-2/3 p-2 h-auto">
          <div className="w-full  py-2 flex justify-end">
            <h2>Options</h2>
            <Searchbar />
          </div>
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {[...Array.from({ length: 10 })].map((_, i) => (
                <TableRow className="border-none py-0 " key={"tb-item-" + i}>
                  <TableCell className="font-medium py-2">INV001</TableCell>
                  <TableCell className="py-2">Paid</TableCell>
                  <TableCell className="py-2">Paid</TableCell>
                  <TableCell className="py-2">Credit Card</TableCell>
                  <TableCell className="text-right py-2">$250.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="w-1/3 p-2 h-[70vh] ">
          <h2>Hello world</h2>
        </Card>
      </div>
    </div>
  );
};

export default Users;
