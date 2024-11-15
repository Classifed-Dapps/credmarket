import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import PostModalSelectField from "./PostModalSelectField";
export default function PostModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" py-1 px-4 border border-current-100 bg-current-100/10 text-lg text-current-100 font-[500]  rounded-lg">
        {" "}
        Enter Amount and Stake
      </AlertDialogTrigger>

      <AlertDialogContent className="border-none rounded-2xl bg-primary-1 p-12 font-inter flex flex-col  justify-center gap-8">
        <div>
          <div className="flex justify-between items-center w-full">
            <p></p>
            <AlertDialogTitle className="text-black font-[500] text-xl">
              Amount
            </AlertDialogTitle>
            <AlertDialogCancel className="rounded-full bg-primary-2/5 text-black">
              x
            </AlertDialogCancel>
          </div>
        </div>

        <div className="flex items-center justify-between w-[75%] mx-auto ">
          <PostModalSelectField />
          <p className="text-current-100 font-[500] text-xl">Use Max</p>
        </div>
        <div>
          <Input
            type="text"
            className="text-center text-primary-2/80 font-inter font-[400] text-2xl border-t-0 border-x-0 border-b-4 border-current-100 bg-current-100/5"
          />
        </div>
        <div className="flex justify-center ">
          <Button className="flex gap-3 items-center rounded-3xl py-6 px-6 text-primary-2/80 bg-current-100/5 font-[500] text-xl">
            <p>$</p>
            <ArrowUpDown className="text-xl" />
          </Button>
        </div>

        <div className="text-primary-2/80 font-[500] text-xl flex items-center gap-2 justify-center">
          <p>Balance:</p>
          <p>ETHER</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogAction className="bg-current-100 text-primary-1 text-lg font-500 w-full p-2.5">
            Stake
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
