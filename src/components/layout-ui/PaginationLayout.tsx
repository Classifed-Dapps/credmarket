import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function PaginationLayout() {
  return (
    <Pagination className=" font-manrope font-[500] overflow-hidden text-base text-gray-1 px-5">
      <PaginationContent className=" mr-4  flex flex-row justify-between items-center md:w-[80%] w-[200%] scale-[0.8] md:scale-100 my-12">
        <PaginationItem>
          <PaginationPrevious className="text-xs" href="#" />
        </PaginationItem>

        <div className="flex ">
          <PaginationItem>
            <PaginationLink
              className="z-10 text-xs hover:bg-current-100/30 duration-300 transition-all bg-current-100 text-primary-1 p-2 rounded-none"
              isActive
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="text-xs hover:bg-current-100/30 duration-300 transition-all"
              href="#"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="text-xs hover:bg-current-100/30 duration-300 transition-all"
              href="#"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="text-xs hover:bg-current-100/30 duration-300 transition-all"
              href="#"
            >
              8
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="text-xs hover:bg-current-100/30 duration-300 transition-all"
              href="#"
            >
              9
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="text-xs hover:bg-current-100/30 duration-300 transition-all"
              href="#"
            >
              10
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext href="#" className="text-xs" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
