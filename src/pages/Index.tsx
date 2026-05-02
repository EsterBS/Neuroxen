import { useEffect, useState } from "react";
import bottleImg from "@/assets/neuroxen-bottle.png";
import logoImg from "@/assets/neuroxen-logo.png";

const REDIRECT_URL = "https://getneuroxen.com/#aff=EliteBizScale&cam=CAMPAIGNKEY";

const Index = () => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    setShowTerms(true);
  }, []);

  const redirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div>
      {showTerms && (
        <div className="nx-modal__overlay" role="dialog" aria-modal="true">
          <div className="nx-modal">
            <button type="button" className="nx-modal__close" aria-label="Close" onClick={redirect}>
              ×
            </button>
            <h2 className="nx-modal__title">Terms &amp; Conditions</h2>
            <p className="nx-modal__desc">
              By continuing on this page you acknowledge that this is an affiliate marketing
              site and agree to our terms of use and privacy policy.
              <span className="nx-modal__question">Do you accept the terms?</span>
            </p>
            <div className="nx-modal__footer">
              <button type="button" className="nx-btn nx-btn--outline" onClick={redirect}>
                Reject
              </button>
              <button type="button" className="nx-btn nx-btn--accept" onClick={redirect}>
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="nx-header">
        <div className="nx-header__inner">
          <a href={REDIRECT_URL} className="nx-logo">
            <img src={logoImg} alt="NeuroXen logo" className="nx-logo__img" />
            <span className="nx-logo__tag">Affiliate Marketing</span>
          </a>
          <a href={REDIRECT_URL} className="nx-btn nx-btn--primary">
            Order Now!
          </a>
        </div>
      </header>

      <div aria-hidden className="nx-spacer" />

      <section className="nx-hero">
        <div className="nx-hero__container">
          <div className="nx-hero__text">
            <h2 className="nx-hero__brand">Neuroxen</h2>
            <h1 className="nx-hero__title">
              The boost your brain needs!
              <br />
              Focus, clarity, mental agility with every use
            </h1>
            <a id="buy" href={REDIRECT_URL} className="nx-btn nx-btn--hero">
              Learn more
            </a>
          </div>

          <div className="nx-hero__visual">
            <div aria-hidden className="nx-hero__bg">
              <span>NEURO</span>
            </div>
            <img
              src={bottleImg}
              alt="NeuroXen Super Brain Support Supplement bottle"
              width={1024}
              height={1024}
              className="nx-hero__bottle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
