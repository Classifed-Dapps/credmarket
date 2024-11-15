import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdDeposit from "./AdDeposit";
import AdRecieved from "./AdRecieved";
import AdSent from "./AdSent";
import { Button } from "../ui/button";
import { useScrollModal } from "@/hooks/useScrollModal";
export default function AdModal({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  useScrollModal(isOpen);
  const tabs = ["Ad Deposit", "Recieved", "Sent"];
  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-primary-2/20 py-1 px-2.5 text-primary-2/80 font-poppins text-xs rounded-3xl font-[500]"
      >
        {title}
      </Button>

      {isOpen && (
        <>
          <div
            className="w-full cursor-pointer h-screen fixed top-0 left-0 backdrop-blur-sm bg-primary-2/70 z-[500]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed z-[850] left-[50%] top-[50%]  grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border-none rounded-xl bg-primary-1 p-6 font-inter border border-primary-2/20">
            <Tabs defaultValue="Ad Deposit" className="font-inter">
              <TabsList className="flex items-center justify-between max-w-full  mx-auto bg-primary-2/5 border border-primary-2/20">
                {tabs.map((tab) => (
                  <TabsTrigger
                    className="data-[state=active]:bg-current-100 data-[state=active]:rounded-md py-1.5 px-3  data-[state=active]:!text-primary-1 w-full text-black font-[400] text-sm"
                    key={tab}
                    value={tab}
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="Ad Deposit">
                <AdDeposit />
              </TabsContent>

              <TabsContent value="Recieved">
                <AdRecieved />
              </TabsContent>

              <TabsContent value="Sent">
                <AdSent />
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
}
