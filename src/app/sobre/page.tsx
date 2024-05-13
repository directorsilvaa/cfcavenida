import { About } from "@/components/about";

export default function AboutPage() {
  return (
    <main>
      <div className="container h-[80px] lg:h-[50px]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full max-w-[700px] lg:mt-8 mt-16 mx-auto">
            Quem somos
          </h1>
        </div>
      </div>
      <About />
    </main>
  );
}
