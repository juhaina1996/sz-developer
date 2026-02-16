import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">

      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-start">

        <div className="pt-32 md:pt-40 px-6 md:px-12">

          <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide">

            <span className="text-green-500">
              EXCEEDING
            </span>

            <span className="text-black ml-2">
              POSSIBILITIES
            </span>

          </h1>

        </div>

      </div>

    </section>
  );
}
