"use client";

import { Button } from "@/components/ui/button";
import { CrossCircledIcon, GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";


export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
        title: "Gear",
        href: "/gear",
      },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center space-x-12">

          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href} className="text-sm font-semibold">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/ikasturirangan/" passHref>
            <Button variant="outline" className="text-sm"><LinkedInLogoIcon className="mr-2 h-4 w-4"/> LinkedIn</Button>
          </Link>
          <Link href="https://github.com/ikasturirangan" passHref>
            <Button variant="outline" className="text-sm font-bold"><GitHubLogoIcon className="mr-2 w-4 h-4"/>    Github</Button>
          </Link>
          <Link href="mailto:ikasturirangan@gmail.com" passHref>
            <Button className="text-sm font-bold">Contact Me</Button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CrossCircledIcon className="w-5 h-5" /> : <HamburgerMenuIcon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-background shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href} className="text-sm font-semibold">
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="https://www.linkedin.com/in/ikasturirangan/" passHref>
                <Button variant="outline" className="text-sm font-bold">LinkedIn</Button>
              </Link>
              <Link href="https://github.com/ikasturirangan" passHref>
                <Button variant="outline" className="text-sm font-bold">Github</Button>
              </Link>
              <Link href="mailto:ikasturirangan@gmail.com" passHref>
                <Button className="text-sm">Contact Me</Button>
                
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
