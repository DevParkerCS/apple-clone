import styles from "./App.module.scss";
import heroImg from "./assets/ase-hero-202311.jpg";
import { useRef } from "react";
import { LegalSection } from "./components/LegalSection/LegalSection";
import { IphoneSection } from "./components/IphoneSection/IphoneSection";
import { MacSection } from "./components/MacSection/MacSection";
import { IpadSection } from "./components/IpadSection/IpadSection";
import { AirpodSection } from "./components/AirpodSection/AirpodSection";

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
          <AirpodSection />
        </section>
      </section>
      <LegalSection />
    </div>
  );
}

export default App;
