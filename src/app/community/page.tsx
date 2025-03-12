import Image from "next/image";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.top}>
          <h1>Créer votre communauté</h1>
          <p>
            Rassemblez votre communauté dans un seul endroit pour planifier des
            événements, rester organisé et faire plus.
          </p>
          <button>Crée le votre</button>
        </div>
        <div className={styles.bottom}>
          <h1>Créer avec un modèle</h1>
          <div className={styles.btnGroup}>
            <button>
              <Image src="/graduation.svg" alt="" width={18} height={18} />
              <span>Ecole</span>
            </button>
            <button>
              <Image src="/enterprise.svg" alt="" width={18} height={18} />
              <span>Entreprise</span>
            </button>
            <button>
              <Image src="/medal.svg" alt="" width={18} height={18} />
              <span>Vie</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.imgContent}>
          <Image src="/imageCommunity.jpg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default page;
