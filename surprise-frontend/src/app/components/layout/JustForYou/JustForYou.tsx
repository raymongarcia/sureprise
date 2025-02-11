"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import Image from "next/image";

export default function JustForYou() {
  return (
    <section id="JustForYou">
      <div className="flex flex-col text-start pl-60 pb-20 pr-60">
        <h1 className="font-bold text-[24px]">Just For You</h1>
        <div className="mt-7 w-full h-full flex flex-row justify-center items-center flex-wrap">
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
      </div>
      <div className="flex justify-center items-center">
        <Button className="p-6 w-80 m-7 bg-pink-400">Load More</Button>
      </div>
    </section>
  );
}
