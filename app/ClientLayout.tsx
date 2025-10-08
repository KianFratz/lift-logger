"use client";
import NavBar from "@/components/ui/navbar";
import React from "react";
import { usePathname } from "next/navigation";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const hideNavBarRoutes = ["/dashboard"]; // list the route you want to hide Navbar
  const hideNavBar = hideNavBarRoutes.includes(pathName)

  return (
    <>
      {!hideNavBar && <NavBar />}
      {children}
    </>
  );
}

export default ClientLayout;
