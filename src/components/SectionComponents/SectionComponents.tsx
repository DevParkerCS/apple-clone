import styles from "./SectionComponents.module.scss";

type SectionHeadProps = {
  name: string;
  title: string;
  subtitle: string;
  img?: string;
  itemType: string;
};

export const SectionLeftHead = ({
  name,
  title,
  subtitle,
  img,
  itemType,
}: SectionHeadProps) => {
  return (
    <div className={`${styles.sectionHead} ${styles[itemType]}`}>
      <div className={`${styles.headTxtWrapper}`}>
        <h1 className={`${styles.name}`}>{name}</h1>
        <h2 className={`${styles.title} `}>{title}</h2>
        <h3 className={`${styles.subtitle}`}>{subtitle}</h3>
      </div>
      <img className={`${styles.headImg}`} src={img} />
    </div>
  );
};

export const SectionRightHead = ({
  name,
  title,
  subtitle,
  img,
  itemType,
}: SectionHeadProps) => {
  return (
    <div className={`${styles.sectionHead} ${styles[itemType]}`}>
      <img className={`${styles.headImg}`} src={img} />
      <div className={`${styles.headTxtWrapper}`}>
        <h1 className={`${styles.name}`}>{name}</h1>
        <h2 className={`${styles.title}`}>{title}</h2>
        <h3 className={`${styles.subtitle}`}>{subtitle}</h3>
      </div>
    </div>
  );
};

type SectionItemProps = {
  giftCard: string;
  name: JSX.Element;
  price: string;
  img: string;
  colors: string | undefined;
  itemType: string;
};

export const SectionItem = ({
  giftCard,
  name,
  price,
  img,
  colors,
  itemType,
}: SectionItemProps) => {
  return (
    <div className={`${styles.sectionItem} ${styles[itemType]}`}>
      <img className={`${styles.itemImg}`} src={img} />
      <p className={`${styles.itemGiftCard}`}>Get a ${giftCard} gift card*</p>
      <div className={`${styles.txtWrapper}`}>
        <div className={`${styles.itemName}`}>{name}</div>
        <p className={`${styles.itemPrice}`}>{price}</p>
      </div>
      {colors ? (
        <img className={`${styles.itemColors}`} src={colors} />
      ) : (
        <div className={styles.colorsReplace}></div>
      )}
    </div>
  );
};
