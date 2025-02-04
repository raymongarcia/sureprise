"use client";
import { Card } from "../../ui/card";
import Image from "next/image";
import productPicture from "../../../../assets/happy-mushroom.png";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const products = [];

export default function Trending() {
  // Set the end time (24 hours from now)
  const endTime = dayjs().endOf("day").toDate().getTime(); // Ends at midnight today

  // State for countdown timer (starts dynamically)
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, Math.floor((endTime - Date.now()) / 1000))
  );

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format timeLeft into HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <section id="trending">
      <div className="flex flex-col text-start p-20 pl-60 pr-60 mt-4">
        <h1 className="font-bold text-[24px]">Trending Surprises!</h1>
        <div className="flex gap-10">
          <h3>On Sale Now</h3>
          <h6 className="font-bold text-red-500">
            Sale ends in: {formatTime(timeLeft)}
          </h6>
        </div>
        <div className="card-container mt-7 bg-slate-600 w-full h-80 flex justify-center items-center gap-8">
          <Card className="h-64 w-52">
            <Image
              src={productPicture}
              width={20}
              height={40}
              alt="Picture of the author"
            />
            <div>Product Title</div>
            <div>$266.00</div>
            <div>$534.00</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
