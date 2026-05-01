import bottleImg from "@/assets/neuroxen-bottle.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple" aria-hidden />
          <span className="text-brand-purple font-extrabold tracking-wider text-lg">NEUROXEN</span>
        </a>
        <a
          href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY"
          className="inline-flex items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground font-semibold px-6 py-2.5 shadow-md hover:opacity-90 transition"
        >
          Order Now!
        </a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-brand-purple font-extrabold tracking-widest text-xl md:text-2xl uppercase">
              Discover Neuroxen
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your journey to enhanced{" "}
              <span className="whitespace-nowrap">MENTAL CLARITY</span> starts here with NeuroXen.
            </h1>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Experience the power of NeuroXen — designed to support your brain sharpness and{" "}
              <strong>mental clarity</strong>. The longer you use NeuroXen, the greater the benefits
              for your brain performance and mental acuity. Stay connected to the world of sharp
              thinking and enhanced mental focus.
            </p>
            <a
              id="buy"
              href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground font-semibold text-lg px-10 py-4 shadow-lg hover:opacity-90 transition"
            >
              Buy Now
            </a>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
              <span className="text-[18vw] md:text-[14vw] font-black text-foreground/[0.05] leading-none select-none tracking-tighter">
                NEURO
              </span>
            </div>
            <img
              src={bottleImg}
              alt="NeuroXen Super Brain Support Supplement bottle"
              width={1024}
              height={1024}
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
