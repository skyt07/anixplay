const Trending = () => {
  return (
    <section className="border border-black p-2 px-3 rounded-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center text-2xl font-bold">
          Trending
        </div>

        <div className="flex gap-3">
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Trending;
