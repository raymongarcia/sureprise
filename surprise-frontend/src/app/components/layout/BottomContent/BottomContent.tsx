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
        <div className="flex gap-20">
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
          <ol className="mt-20">
            <li>
              <a href="">About Sureprise</a>
            </li>
            <li>
              <a href="">Afﬁliate Program</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Press & Media</a>
            </li>
            <li>
              <a href="">Intellectual Property Protection</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
