import bottleImg from "@/assets/neuroxen-bottle.png";
import logoImg from "@/assets/neuroxen-logo.png";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const REDIRECT_URL = "https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY";

const Index = () => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    setShowTerms(true);
  }, []);

  const handleRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Dialog open={showTerms} onOpenChange={(open) => { if (!open) handleRedirect(); }}>
        <DialogContent
          className="sm:max-w-md border-brand-purple/20"
          style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        >
          <DialogHeader>
            <DialogTitle
              className="text-brand-purple"
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "1.5rem" }}
            >
              Terms &amp; Conditions
            </DialogTitle>
            <DialogDescription style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              By continuing on this page you acknowledge that this is an affiliate marketing
              site and agree to our terms of use and privacy policy. Do you accept the terms?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-2">
            <button
              type="button"
              onClick={handleRedirect}
              className="inline-flex items-center justify-center rounded-full border border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple/5 transition capitalize"
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "1rem",
                fontWeight: 600,
                lineHeight: 1.75,
                padding: "6px 1.5em",
                minWidth: "64px",
              }}
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleRedirect}
              className="inline-flex items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground shadow-md hover:opacity-90 transition capitalize"
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "1rem",
                fontWeight: 600,
                lineHeight: 1.75,
                padding: "6px 1.5em",
                minWidth: "64px",
              }}
            >
              Accept
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Header (fixed) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
          <a
            href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY"
            className="flex items-center"
            style={{ flexDirection: "column" }}
          >
            <img
              src={logoImg}
              alt="NeuroXen logo"
              className="object-contain"
              style={{ width: "9rem", height: "100%" }}
            />
            <span
              className="text-brand-purple font-extrabold tracking-wider uppercase self-center"
              style={{ fontSize: "0.60rem" }}
            >
              Affiliate Marketing
            </span>
          </a>
          <a
            href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY"
            className="inline-flex items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground shadow-md hover:opacity-90 transition capitalize"
            style={{
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "1.2rem",
              fontWeight: 600,
              lineHeight: 1.75,
              padding: "6px 1.5em",
              minWidth: "64px",
            }}
          >
            Order Now!
          </a>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div aria-hidden className="h-20 md:h-24" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-10">
          <div className="space-y-6 max-w-xl">
            <h2
              className="text-brand-purple uppercase text-[2.1422rem] sm:text-[2.1422rem] md:text-[2.3565rem] xl:text-[2.5707rem]"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
              }}
            >
              Neuroxen
            </h2>
            <h1
              className="text-foreground text-[2.1422rem] sm:text-[2.1422rem] md:text-[2.3565rem] xl:text-[2.5707rem]"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: "30px 0",
              }}
            >
              The boost your brain needs!
              <br />
              Focus, clarity, mental agility with every use
            </h1>
            <a
              id="buy"
              href="https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground shadow-lg hover:opacity-90 transition capitalize"
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "1.6rem",
                fontWeight: 700,
                lineHeight: 1.75,
                padding: "8px 2em",
                minWidth: "64px",
              }}
            >
              Learn more
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
