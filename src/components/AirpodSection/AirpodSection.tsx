import {
  SectionItem,
  SectionLeftHead,
} from "../SectionComponents/SectionComponents";
import styles from "./AirpodSection.module.scss";
import colors1 from "../../assets/ase-offer-swatches-iphone14-202311.png";
import airpodsImg from "../../assets/airpods.png";
import airpods1 from "../../assets/airpods1.png";
import airpods2 from "../../assets/airpods2.png";
import airpods3 from "../../assets/airpods3.png";
import airpods4 from "../../assets/airpods4.png";

export const AirpodSection = () => {
  return (
    <div>
      <SectionLeftHead
        name="AirPods"
        title="Get up to a $75 Apple Gift Card with your purchase.*"
        subtitle="Enjoy 6 months of Apple Music free with your new AirPods.⁴ And personalise your AirPods with free engraving."
        img={airpodsImg}
        itemType="airpod"
      />
      <div className={styles.airpodItems}>
        <div className={styles.airpodItem}>
          <SectionItem
            itemType="airpod"
            giftCard="50"
            name={
              <p>
                AirPods Pro <br />
                (2nd generation)
              </p>
            }
            price="$249 or $41.50/mo.per month for 6 mo.³"
            img={airpods1}
            colors={undefined}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.airpodItem}>
          <SectionItem
            itemType="airpod"
            giftCard="25"
            name={
              <p>
                AirPods <br />
                (3rd generation)
              </p>
            }
            price="From $169 or $28.16/mo.per month for 6 mo.³"
            img={airpods2}
            colors={undefined}
          />
        </div>
      </div>
      <div className={styles.airpodItems}>
        <div className={styles.airpodItem}>
          <SectionItem
            itemType="airpod"
            giftCard="75"
            name={<p>AirPods Max</p>}
            price="$549 or $91.50/mo.per month for 6 mo.³"
            img={airpods3}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.airpodItem}>
          <SectionItem
            itemType="airpod"
            giftCard="25"
            name={
              <p>
                AirPods <br />
                (2nd generation)
              </p>
            }
            price="$129 or $21.50/mo.per month for 6 mo.³"
            img={airpods4}
            colors={undefined}
          />
        </div>
      </div>
    </div>
  );
};
