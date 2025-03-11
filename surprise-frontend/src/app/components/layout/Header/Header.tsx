import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { FiPhone, FiUser, FiChevronDown, FiMapPin } from "react-icons/fi";
import happyMushroom from "@/assets/happy-mushroom.png";
import Image from "next/image";
import { Input } from "@/app/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { CgShoppingCart } from "react-icons/cg";
import { categories } from "@/app/components/layout/Categories/Categories"; // Import categories
import MyGoogleMap from "@/components/GoogleMap"; // Import the Google Map component

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Birthday Surprises",
    href: "/categories/birthday-surprises",
    description: "Unique and memorable birthday surprise ideas and packages.",
  },
  {
    title: "Anniversary Surprises",
    href: "/categories/anniversary-surprises",
    description: "Romantic and thoughtful anniversary surprise plans.",
  },
  {
    title: "Corporate Gifts",
    href: "/categories/corporate-gifts",
    description: "Professional and personalized corporate gift options.",
  },
  {
    title: "Wedding Services",
    href: "/categories/wedding-services",
    description: "Comprehensive wedding planning and surprise services.",
  },
  {
    title: "Holiday Specials",
    href: "/categories/holiday-specials",
    description: "Exclusive holiday surprise packages and deals.",
  },
  {
    title: "Custom Surprises",
    href: "/categories/custom-surprises",
    description: "Tailor-made surprises for any occasion.",
  },
];

export default function Header() {
  return (
    <section className="bg-white">
      <div className="flex justify-between w-full p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex justify-center place-items-center gap-11 p-4 pl-48">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <div className="flex justify-between gap-3">
            <FiPhone className="mt-1" />
            <p>+ 63 966 ( 426 ) ( 8092 )</p>
          </div>
          <div className="flex justify-between gap-3">
            <FiMapPin className="mt-1" />
            <p>Location</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between place-items-center gap-20 p-4">
        <div className="flex justify-center place-items-center">
          <div className="flex p-4 align-middle">
            <div className="flex justify-center align-middle gap-4">
              <Image src={happyMushroom} width={20} alt="happy-mushroom" />
              <h1 className="font-bold italic">
                <span className="text-purple-500 italic">S</span>ureprise
              </h1>
            </div>
          </div>
          <div className="flex justify-center gap-1">
            <Input type="search" placeholder="Search" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  All Categories <FiChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex text-sm">
          {/* <div className="flex gap-3">
            <FiUser className="mt-[0.20rem]" />
            <p>Account</p>
          </div> */}
          <Link href="/cart">
            <div className="flex gap-3">
              <CgShoppingCart className="mt-[0.20rem]" />
              <p>My Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
