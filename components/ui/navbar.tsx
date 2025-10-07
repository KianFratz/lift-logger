import { Dumbbell } from "lucide-react";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-primary"></Dumbbell>
          <h1 className="text-2xl font-bold"><Link href={"/"}>Lift Logger</Link></h1>
        </div>
        <div>
          <Button variant="ghost">
            <Link href={"/signin"}>Sign In</Link>{" "}
          </Button>
          <Button className="ml-2">
            <Link href={"/signup"}>Get Started</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
