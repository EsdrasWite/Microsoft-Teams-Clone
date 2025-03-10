import Image from "next/image";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Réunion</h1>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <Image src="/link.svg" width={35} height={15} alt="" />
              <h3 className={styles.itemTitle}>Créer un lien de réunion</h3>
            </div>
            <div className={styles.box}>
              <Image src="/calendar.svg" width={25} height={25} alt="" />
              <h3 className={styles.itemTitle}>Planifier une réunion</h3>
            </div>
            <div className={styles.box}>
              <Image src="/number-2.svg" width={30} height={30} alt="" />
              <h3 className={styles.itemTitle}>
                Rejoindre avec un ID de réunion
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <h3 className={styles.itemTitle}>Liens de réunion</h3>
          <div className={styles.linksBox}>
            <Image src="/link-2.svg" width={30} height={30} alt="" />
            <p className={styles.text}>
              Créez, enregistrez et partagez rapidement des liens avec tout le
              monde.{" "}
            </p>
            <span className={styles.detail}>
              En savoir plus sur les liens de réunion
            </span>
          </div>
        </div>
        <div className={styles.schedules}>
          <div className={styles.scheduleHeader}>
            <h3 className={styles.itemTitle}>Réunions planifiées</h3>
            <div className={styles.schHeaderR}>
              <Image src="/calendar-2.svg" width={20} height={20} alt="" />
              <span className={styles.detail}>Afficher dans le calendrier</span>
            </div>
          </div>
          <div className={styles.schBoxContainer}>
            <div className={styles.schBox}>
              <h3 className={styles.schTitle}>
                Aucun événement programmé pour vous.
              </h3>
            </div>
            <div className={styles.schBox}>
              <Image
                src="/imagePexel.jpg"
                alt=""
                width={100}
                height={50}
                className={styles.schBg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
