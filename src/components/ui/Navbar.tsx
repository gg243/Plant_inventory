import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Home, HomeIcon, LogIn, LogOut, Sprout } from "lucide-react";
import ModeToggle from "@/components/ui/toggler";
import { stackServerApp } from "@/stack";
import { StackServerApp, UserButton } from "@stackframe/stack";
import { getUserDetails } from "@/actions/userActions";

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 ">
      <div className="max-w-7xl px-4 mx-auto ">
        {/* logo */}
        <div className="flex items-center h-16 justify-between">
          <Link
            href="/"
            className="text-xl font-mono tracking-wider text-primary font-bold"
          >
            {" "}
            🥀 Plant Inventory
          </Link>

          {/* welcome user */}
          <span className="inline-flex h-8 items-end flex-col justify-center font-bold text-lg uppercase">
            {userProfile?.name && (
              <span className="text-[14px] text-gray-600 dark:text-gray-300">
                {`Hello, ${userProfile?.name.split(" ")[0]}`}
              </span>
            )}
          </span>

          <div className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              className="gap-2 flex items-center "
              asChild
            >
              <Link href="/plants">
                <Sprout className="w-4 h-4" />
                <span className="hidden lg:inline ">Plant</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="gap-2 flex items-center "
              asChild
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                <span className="hidden lg:inline ">Home</span>
              </Link>
            </Button>
            <ModeToggle />

            {user ? (
              <>
                <Button
                  variant="ghost"
                  className="gap-2 flex items-center "
                  asChild
                >
                  <Link href={app.signOut}>
                    <LogOut className="w-4 h-4" />
                    <span className="hidden lg:inline ">sign Out</span>
                  </Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <Button
                variant="ghost"
                className="gap-2 flex items-center "
                asChild
              >
                <Link href={app.signIn}>
                  <LogIn className="w-4 h-4" />
                  <span className="hidden lg:inline ">sign In</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
