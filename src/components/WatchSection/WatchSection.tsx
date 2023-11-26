import {
  SectionItem,
  SectionLeftHead,
  SectionRightHead,
} from "../SectionComponents/SectionComponents";
import styles from "./WatchSection.module.scss";
import colors1 from "../../assets/ase-offer-swatches-iphone14-202311.png";
import watchImg from "../../assets/watch.png";
import watch1 from "../../assets/watch1.png";
import watch2 from "../../assets/watch2.png";

export const WatchSection = () => {
  return (
    <div>
      <SectionRightHead
        name="Apple Watch"
        title="Get a $50 Apple Gift Card with your purchase.*"
        subtitle="Enjoy 3 months of Apple Fitness+ free with your new Apple Watch.¹"
        img={watchImg}
        itemType="watch"
      />
      <div className={styles.watchItems}>
        <div className={styles.watchItem}>
          <SectionItem
            itemType="watch"
            giftCard="50"
            name={<p>Apple Watch Series 9</p>}
            price="From $399 or $33.25/mo.per month for 12 mo.³"
            img={watch1}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.watchItem}>
          <SectionItem
            itemType="watch"
            giftCard="50"
            name={<p>Apple Watch SE</p>}
            price="From $249 or $20.75/mo.per month for 12 mo.³"
            img={watch2}
            colors={colors1}
          />
        </div>
      </div>
    </div>
  );
};
