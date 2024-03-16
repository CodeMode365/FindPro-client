import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Searchbar from "@/components/reusable/Searchbar";
import { Card } from "@/components/ui/card";
import StatCard from "../_components/Admin/Home/StatCard";
import { User } from "lucide-react";
import FilterOptions from "../_components/Admin/Users/FilterOptions";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Users = () => {
  return (
    <div className="col-span-12 mx-4 overflow-hidden ">
      <Card className="w-full grid grid-cols-4 mb-4 gap-4 border-0">
        <StatCard colorMode="red" icon={User} />
        <StatCard colorMode="yellow" icon={User} />
        <StatCard colorMode="blue" icon={User} />
        <StatCard colorMode="green" icon={User} />
      </Card>
      <div className="flex gap-2 pb-4">
        <Card className="w-full p-2 h-auto">
          <div className="w-full  py-2 flex justify-between">
            <div className="flex">
              <FilterOptions />
            </div>
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
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} className="p-2">
                  <Pagination className="m-0">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Users;
