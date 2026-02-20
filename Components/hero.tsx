import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen main-hero">
      {/* Background Image */}
      <Image
        src="/images/Hero image.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-start">
        <div className="tracking-wide-main pt-32 md:pt-40 px-6 md:px-12">
          <h1 className="tracking-wide">
            <span className="text-[#00CC61]">EXCEEDING</span>

            <span className="text-black ml-2">POSSIBILITIES</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
