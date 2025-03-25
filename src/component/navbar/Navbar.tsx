"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/team.svg" width={25} height={25} alt="logo" />
      </div>
      <div className={styles.searchContent}>
        <div className={styles.arrows}>
          <Image
            src="/arrow.svg"
            width={25}
            height={25}
            alt="logo"
            className={styles.arrowLeft}
            onClick={() => router.back()}
          />
          <Image
            src="/arrow.svg"
            width={25}
            height={25}
            alt="logo"
            className={styles.arrowRight}
            onClick={() => router.forward()}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className="">
            <Image src="/search.svg" alt="" width={20} height={20} />
          </div>
          <input
            type="text"
            placeholder="Rechercher"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.iconsContent}>
        <div className={styles.icons}>
          <Image
            src="/more.svg"
            alt=""
            width={20}
            height={20}
            className={styles.iconMore}
          />
          <Image
            src="/user.svg"
            alt=""
            width={20}
            height={20}
            className={styles.iconUser}
          />
          <div className={styles.user}>
            <span className={styles.username}>Esdras Wite</span>
            <Image src="/warning-1.svg" alt="" width={14} height={14} />
            <div className={styles.avatar}>
              <span className={styles.userinitial}>EW</span>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <div className={styles.btnIcon}>
            <Image src="/line.svg" alt="" width={15} height={15} />
          </div>
          <div className={styles.btnIcon}>
            <Image src="/square.svg" alt="" width={15} height={15} />
          </div>
          <div className={styles.btnIconClose}>
            <Image src="/close.svg" alt="" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
