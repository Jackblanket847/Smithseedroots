import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Smith Seeds" description="Growing since 1952" />

      <img src="/images/hero-greenhouse.jpg" className="w-full h-[500px]" />

      <section className="p-20">
        <h2>Growing Gardens, Cultivating Stories</h2>
      </section>
    </>
  );
}