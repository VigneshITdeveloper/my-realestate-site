'use client';

export default function Stats() {
  return (
    <section className="bg-black text-white py-10 px-10 mt-[-2rem] rounded-t-[2rem]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-semibold text-lg">
        <div><span className="text-3xl font-bold">40K+</span><br />Customer</div>
        <div><span className="text-3xl font-bold">20K+</span><br />Registration Done</div>
        <div><span className="text-3xl font-bold">15K+</span><br />Units Sold till date</div>
        <div><span className="text-3xl font-bold">23K+</span><br />Units Sold till date</div>
      </div>
    </section>
  );
}
