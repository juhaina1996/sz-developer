export default function DNA() {
  return (
    <section className="dna-main w-full py-32 md:py-40">
      <div className="dna-sub-container text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl tracking-wide text-gray-700 mb-8">
          OUR DNA
        </h2>

        {/* Paragraph */}
        <p className="dna-sub text-base md:text-lg text-gray-700 leading-relaxed font-light">
          At our core is a belief that meaningful spaces emerge from patient
          stewardship, precise decision-making, and an uncompromising respect
          for quality that reveals itself over time -{" "}
          <span className="text-green ml-1">exceeding</span> possibilities.
        </p>
      </div>
    </section>
  );
}
