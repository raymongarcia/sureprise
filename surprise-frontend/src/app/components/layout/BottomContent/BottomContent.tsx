import { Button } from "../../ui/button";

export default function BottomContent() {
  return (
    <section id="bottom-content">
      <div className="flex flex-col text-start p-20 pl-60 pr-60">
        <div className="card-container w-full h-80 flex justify-center items-start gap-8">
          {/* <Card className="h-64 w-52">
            <Image
              src={productPicture}
              width={20}
              height={40}
              alt="Picture of the author"
            />
            <div>Product Title</div>
            <div>$266.00</div>
            <div>$534.00</div>
          </Card> */}
          <Button className="btn-primary w-64">Button 1</Button>
          <Button className="btn-primary w-64">Button 2</Button>
          <Button className="btn-primary w-64">Button 3</Button>
        </div>
      </div>
    </section>
  );
}
