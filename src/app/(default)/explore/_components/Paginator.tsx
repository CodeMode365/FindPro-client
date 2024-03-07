"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Paginator = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page"))
  );

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlPageNo = searchParams.get("page");
    
    if ((!urlPageNo || urlPageNo == "0") && urlCategory) {
      router.replace(`/explore?category=${urlCategory}&page=1`);
      setCurrentPage(1);
    } else if (urlPageNo) {
      router.replace(`/explore?category=${urlCategory}&page=${currentPage}`);
    }
  }, [searchParams, currentPage, router]);

  return (
    <Pagination className="mx-auto ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{currentPage - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="text-primary border-primary"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{currentPage + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
