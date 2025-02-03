import { Card } from "../../ui/card";
import Image from "next/image";

export default function JustForYou() {
  return (
    <section id="JustForYou">
      <div className="flex flex-col text-start pl-60 pb-20 pr-60">
        <h1 className="font-bold text-[24px]">Just For You</h1>
        <div className="card-container mt-7 bg-slate-600 w-full h-80 flex justify-center items-center gap-8">
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
    </section>
  );
}
