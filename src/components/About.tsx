export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse lg:flex-row lg:gap-8 lg:mt-[75px]"
    >
      <div className="lg:w-1/2 w-full py-8 ph-8 flex flex-col text-start">
        <h2 className=" text-center mb-2 tett-bold text-3xl font-bold text-gray-100">
          Om mig
        </h2>
        <p className="text-gray-100 ">
          Jag är en ambitiös, kreativ och problemlösande person som trivs både i
          teammiljöer och med att arbeta självständigt. Jag är öppen för nya
          idéer, har en stark analytisk förmåga och är alltid motiverad att lära
          mig nya teknologier och ramverk för att hålla mig uppdaterad inom mitt
          område. Om du eller ditt företag har behov av en engagerad
          webbutvecklare med färsk kunskap och en passion för att skapa
          fantastiska digitala upplevelser, tveka inte att kontakta mig! Jag ser
          fram emot att utforska nya möjligheter och bidra till framgångsrika
          projekt.
        </p>
      </div>
      <div className="rounded-lg h-[380px] w-full lg:w-1/2 bg-[url('/cv3.jpg')] bg-cover"></div>
    </section>
  );
};
