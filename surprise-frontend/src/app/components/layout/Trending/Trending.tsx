export default function Trending() {
  return (
    <section id="trending">
      <div className="flex flex-col text-start p-20 pl-60 pr-60 mt-4">
        <h1 className="font-bold text-[24px]">Trending Surprises!</h1>
        <span>On Sale Now</span>
        <div className="card mt-7 bg-slate-600 w-full h-80 flex justify-center items-center gap-8">
          <div className="child-card bg-pink-300 w-48 h-60"></div>
          <div className="child-card bg-pink-300 w-48 h-60"></div>
          <div className="child-card bg-pink-300 w-48 h-60"></div>
          <div className="child-card bg-pink-300 w-48 h-60"></div>
          <div className="child-card bg-pink-300 w-48 h-60"></div>
          <div className="child-card bg-pink-300 w-48 h-60"></div>
        </div>
      </div>
    </section>
  );
}
