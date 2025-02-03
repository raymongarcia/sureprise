import { Card } from "../../ui/card";
import Image from "next/image";
import productPicture from "../../../../assets/happy-mushroom.png";

export default function Trending() {
  return (
    <section id="trending">
      <div className="flex flex-col text-start p-20 pl-60 pr-60 mt-4">
        <h1 className="font-bold text-[24px]">Trending Surprises!</h1>
        <span>On Sale Now</span>
        <div className="card-container mt-7 bg-slate-600 w-full h-80 flex justify-center items-center gap-8">
          <Card className="h-64 w-52">
            <Image
              src={productPicture}
              width={20}
              height={40}
              alt="Picture of the author"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
