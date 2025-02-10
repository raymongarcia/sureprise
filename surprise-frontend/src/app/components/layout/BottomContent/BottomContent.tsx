import { Button } from "../../ui/button";

export default function BottomContent() {
  return (
    <section id="bottom-content">
      <div className="flex flex-col text-start pl-60 pr-60 pb-20">
        <div className="card-container w-full flex justify-center items-start gap-8">
          <Button className="btn-primary w-64 h-28">Button 1</Button>
          <Button className="btn-primary w-64 h-28">Button 2</Button>
          <Button className="btn-primary w-64 h-28">Button 3</Button>
        </div>
        <ol className="mt-20">
          <li>
            <a href="">Customer Care</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Shipping & Delivery</a>
          </li>
          <li>
            <a href="">Returns & Exchanges</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ol>
      </div>
    </section>
  );
}
