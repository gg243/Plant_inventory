import { stackServerApp } from "@/stack";
import React from "react";
import InventoryTable from "@/components/ui/InventoryTable";
import { SignUp } from "@stackframe/stack";

async function page() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;

  // return <>{user ? <InventoryTable /> : <SignUp />}</>;
  return <InventoryTable />;
}

export default page;
