
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] bg-[#e5e5e5] overflow-hidden">

     <Image
  src="/images/Hero image.jpg"
  alt="Hero Background"
  fill
  priority
  className="
    object-contain 
    md:object-cover 
    object-bottom 
    md:object-center
    scale-100 md:scale-100
  "
/>

      <div className="absolute inset-0 flex items-start">
        <div className="px-6 md:px-12 pt-[40vh] md:pt-40">
          <h1 className="tracking-wide text-[18px] md:text-[40px]">
            <span className="text-[#00CC61]">
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