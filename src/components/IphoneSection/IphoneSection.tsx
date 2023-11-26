import {
  SectionItem,
  SectionLeftHead,
} from "../SectionComponents/SectionComponents";
import styles from "./IphoneSection.module.scss";
import iphoneImg from "../../assets/ase-header-iphone-202311.png";
import iphone1 from "../../assets/ase-offer-product-iphone14-202311.png";
import colors1 from "../../assets/ase-offer-swatches-iphone14-202311.png";
import iphone2 from "../../assets/ase-offer-product-iphone13-202311.png";
import iphone3 from "../../assets/ase-offer-product-iphonese-202311.png";

export const IphoneSection = () => {
  return (
    <div>
      <SectionLeftHead
        name="iPhone"
        title="Get up to a $75 Apple Gift Card with your purchase.*"
        subtitle="Enjoy 3 months of Apple Fitness+ free with your new iPhone.¹"
        img={iphoneImg}
        itemType="iphone"
      />
      <div className={styles.iphoneItems}>
        <div className={styles.iphoneItem}>
          <SectionItem
            itemType="iphone"
            giftCard="75"
            name={<p>iPhone 14</p>}
            price="From $699"
            img={iphone1}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.iphoneItem}>
          <SectionItem
            itemType="iphone"
            giftCard="50"
            name={<p>iPhone 13</p>}
            price="From $599"
            img={iphone2}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.iphoneItem}>
          <SectionItem
            itemType="iphone"
            giftCard="25"
            name={<p>iPhone SE</p>}
            price="From $429"
            img={iphone3}
            colors={colors1}
          />
        </div>
      </div>
    </div>
  );
};
