"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import Image from "next/image";

export default function JustForYou() {
  const [] = useState();
  console.log("2"+2+"2");
  return (
    <section id="JustForYou">
      <div className="flex flex-col text-start pl-60 pb-20 pr-60">
        <h1 className="font-bold text-[24px]">Just For You</h1>
        <div className="card-container mt-7 w-52 h-full grid grid-cols-6 gap-x-[15.1rem] gap-y-8">
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>{" "}
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>{" "}
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>{" "}
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>{" "}
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>{" "}
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>
          <Card className="h-64 w-52">
            <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Card>
        </div>
        <div className="flex justify-center items-center">
          <Button className="p-6 w-80 m-7 bg-pink-400">Load More</Button>
        </div>
      </div>
    </section>
  );
}
