"use client";

import React from "react";
import { Dumbbell, LogOut } from "lucide-react";
import { Button } from "./button";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

function AuthenticatedNavBar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.log('Logout error: ', error)
        return;
      }

      router.push('/login')
    } catch (error) {
      console.error('Logout failed: ', error)
    }
  };

  return (
    <header className="border-b border-gray-700 backdrop-blur-sm sticky top-0 z-10 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-glow bg-violet-500">
            <Dumbbell className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold">Lift Logger</h1>
        </div>
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="hover:bg-destructive/10 hover:text-destructive cursor-pointer"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AuthenticatedNavBar;
