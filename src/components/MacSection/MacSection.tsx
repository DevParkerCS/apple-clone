import {
  SectionItem,
  SectionRightHead,
} from "../SectionComponents/SectionComponents";
import styles from "./MacSection.module.scss";
import macImg from "../../assets/ase-header-mac-202311.png";
import mac1 from "../../assets/ase-offer-product-mba15-m2-202311.png";
import mac2 from "../../assets/ase-offer-product-mba13-m2-202311.png";
import mac3 from "../../assets/ase-offer-product-mba-m1-202311.png";
import mac4 from "../../assets/ase-offer-product-macmini-202311.png";
import colors1 from "../../assets/ase-offer-swatches-iphone14-202311.png";

export const MacSection = () => {
  return (
    <div className={styles.macWrapper}>
      <SectionRightHead
        name="Mac"
        title="Get up to a $200 Apple Gift Card with your purchase.*"
        subtitle="Enjoy 3 months of Apple Tv+ free with your new Mac.²"
        img={macImg}
        itemType="mac"
      />
      <div className={styles.macItems}>
        <div className={styles.macItem}>
          <SectionItem
            giftCard="75"
            name={<p>MacBook Air 15” with M2 chip</p>}
            price="From $1299 or $108.25/mo.per month for 12 mo.³"
            img={mac1}
            colors={colors1}
            itemType="mac"
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.macItem}>
          <SectionItem
            giftCard="75"
            name={<p>MacBook Air 13” with M2 chip</p>}
            price="From $1099 or $91.58/mo.per month for 12 mo.³"
            img={mac2}
            colors={colors1}
            itemType="mac"
          />
        </div>
      </div>
      <div className={styles.macItems}>
        <div className={styles.macItem}>
          <SectionItem
            giftCard="150"
            name={<p>MacBook Air 13” with M1 chip</p>}
            price="From $999 or $83.25/mo.per month for 12 mo.³"
            img={mac3}
            colors={colors1}
            itemType="mac"
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.macItem}>
          <SectionItem
            giftCard="100"
            name={<p>Mac Mini</p>}
            price="From $599 or $49.91/mo.per month for 12 mo.³"
            img={mac4}
            colors={undefined}
            itemType="mac"
          />
        </div>
      </div>
    </div>
  );
};
