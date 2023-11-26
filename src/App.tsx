import styles from "./App.module.scss";
import heroImg from "./assets/ase-hero-202311.jpg";
import { useRef } from "react";
import { LegalSection } from "./components/LegalSection/LegalSection";
import { IphoneSection } from "./components/IphoneSection/IphoneSection";
import { MacSection } from "./components/MacSection/MacSection";
import { IpadSection } from "./components/IpadSection/IpadSection";
import { AirpodSection } from "./components/AirpodSection/AirpodSection";
import { WatchSection } from "./components/WatchSection/WatchSection";
import card from "./assets/card.jpg";
import twoPhones from "./assets/twoPhones.jpg";

function App() {
  const iphoneRef = useRef<HTMLElement>(null);
  const macRef = useRef<HTMLElement>(null);
  const ipadRef = useRef<HTMLElement>(null);

  const handleClick = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <section className={styles.heroSection}>
        <h1 className={styles.title}>Gift Cards Come To Those Who Shop</h1>
        <h2 className={styles.subTitle}>
          Buy an eligible product and get an Apple Gift Card up to $200 to use
          on a later purchase.* Now through November 27. Only at Apple.
        </h2>
        <img className={styles.heroImg} src={heroImg} />
      </section>

      <section className={styles.mainContentWrapper}>
        <section className={styles.searchSection}>
          <ul className={styles.searchWrapper}>
            <li>
              <button onClick={() => handleClick(iphoneRef)}>iPhone</button>
            </li>
            <li>
              <button onClick={() => handleClick(macRef)}>Mac</button>
            </li>
            <li>
              <button onClick={() => handleClick(ipadRef)}>iPad</button>
            </li>
            <li>
              <button>Watch</button>
            </li>
            <li>
              <button>AirPods</button>
            </li>
            <li>
              <button>TV & Home</button>
            </li>
            <li>
              <button>Beats</button>
            </li>
            <li>
              <button>Accessories</button>
            </li>
          </ul>
        </section>

        <section ref={iphoneRef} className={styles.iphoneSection}>
          <IphoneSection />
        </section>
        <button className={styles.sectionBtn}>Shop iPhone</button>
        <section className={styles.macSection} ref={macRef}>
          <MacSection />
        </section>
        <button className={styles.sectionBtn}>Shop Mac</button>
        <section className={styles.ipadSection} ref={ipadRef}>
          <IpadSection />
        </section>
        <button className={styles.sectionBtn}>Shop iPad</button>
        <section className={styles.airpodSection}>
          <WatchSection />
        </section>
        <button className={styles.sectionBtn}>Shop Apple Watch</button>

        <section className={styles.airpodSection}>
          <AirpodSection />
        </section>
        <button className={styles.sectionBtn}>Shop AirPods</button>
      </section>

      <section className={styles.saveSection}>
        <h1 className={styles.saveTitle}>
          Even more <br /> ways to save.
        </h1>
        <div className={styles.cardWrapper}>
          <div className={styles.saveCard}>
            <h2>Buy with Apple Card.</h2>
            <h3>
              Get 3% Daily Cash back with Apple Card. And pay over time,
              interest-free when you choose to check out with Apple Card Monthly
              Installments.⁵
            </h3>
            <a>Learn More {">"}</a>
            <img className={styles.cardImg} src={card} />
          </div>
          <div className={styles.itemSpacer}></div>
          <div className={styles.saveCard}>
            <h2>
              Get credit with <br /> Apple Trade In.
            </h2>
            <h3>
              Trade in your eligible device and get credit toward a new one.⁶
            </h3>
            <a>Learn More {">"}</a>
            <img className={styles.phonesImg} src={twoPhones} />
          </div>
        </div>
      </section>

      <LegalSection />
    </div>
  );
}

export default App;
