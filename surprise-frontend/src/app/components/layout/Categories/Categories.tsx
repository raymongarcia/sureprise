import { Button } from "../../ui/button";

const categories = [
  "Birthday",
  "Valentine's Day",
  "Anniversary",
  "Baby and Kids",
  "Weddings",
  "Holidays and Festivals",
  "Achievements",
  "Get Well Soon",
  "Romantic",
  "Adventure Surprises",
  "Thank You",
  "Corporate Surprises",
  "Breakup Healing",
  "Retirement",
  "Pets",
  "Housewarming",
];

export default function Categories() {
  return (
    <section id="trending">
      <div className="flex flex-col text-start pl-60 pb-20 pr-60">
        <h1 className="font-bold text-[24px]">Categories</h1>
        <div className="card mt-7 grid grid-cols-8 w-full h-80">
          {categories.map((category) => {
            return (
              <Button className="child-card bg-pink-300 h-40 border hover:bg-slate-300 text-slate-700 flex justify-center items-center">
                <div>{category}</div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
