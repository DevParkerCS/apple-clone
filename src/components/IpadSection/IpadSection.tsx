import {
  SectionItem,
  SectionLeftHead,
} from "../SectionComponents/SectionComponents";
import styles from "./IpadSection.module.scss";
import colors1 from "../../assets/ase-offer-swatches-iphone14-202311.png";
import ipadImg from "../../assets/ase-header-ipad-202311.png";
import ipad1 from "../../assets/ipad1.png";
import ipad2 from "../../assets/ipad2.png";
import ipad3 from "../../assets/ipad3.png";

export const IpadSection = () => {
  return (
    <div>
      <SectionLeftHead
        name="iPad"
        title="Get up to a $100 Apple Gift Card with your purchase.*"
        subtitle="Enjoy 3 months of Apple TV+ free with your new iPad.² And personalize your iPad with free engraving."
        img={ipadImg}
        itemType="ipad"
      />
      <div className={styles.ipadItems}>
        <div className={styles.ipadItem}>
          <SectionItem
            itemType="ipad"
            giftCard="100"
            name={<p>iPad Pro</p>}
            price="From $799 or $66.58/mo.per month for 12 mo.³"
            img={ipad1}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.ipadItem}>
          <SectionItem
            itemType="ipad"
            giftCard="75"
            name={<p>iPad Air</p>}
            price="From $599 or $49.91/mo.per month for 12 mo.³"
            img={ipad2}
            colors={colors1}
          />
        </div>
      </div>
      <div className={styles.ipadItems}>
        <div className={styles.ipadItem}>
          <SectionItem
            itemType="ipad"
            giftCard="50"
            name={
              <p>
                iPad <div>(10th Generation)</div>
              </p>
            }
            price="From $449 or $37.41/mo.per month for 12 mo.³"
            img={ipad3}
            colors={colors1}
          />
        </div>
        <div className={styles.itemSpacer}></div>
        <div className={styles.ipadItem}>
          <SectionItem
            itemType="ipad"
            giftCard="50"
            name={
              <p>
                iPad <div>(10th Generation)</div>
              </p>
            }
            price="From $499 or $41.58/mo.per month for 12 mo.³"
            img={ipad2}
            colors={colors1}
          />
        </div>
      </div>
    </div>
  );
};
