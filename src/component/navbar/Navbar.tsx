"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Function to zoom in
  const zoomIn = () => {
    const newZoom = zoomLevel + 0.1;
    document.body.style.zoom = `${newZoom}`; // Works in Chrome, Edge, Safari (not Firefox)
    setZoomLevel(newZoom);
  };

  // Function to zoom out
  const zoomOut = () => {
    const newZoom = zoomLevel - 0.1;
    document.body.style.zoom = `${newZoom}`;
    setZoomLevel(newZoom);
  };

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error("Error entering fullscreen:", err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  };

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
          <div className={styles.icon}>
            <Image
              src="/more.svg"
              alt=""
              width={20}
              height={20}
              className={styles.iconMore}
            />
            <div className={styles.popupMenu}>
              <ul>
                <li>
                  <div className={styles.items}>
                    <Image src="/setting.svg" alt="" width={14} height={14} />
                    <span>Paramètres</span>
                  </div>
                </li>
                <li>
                  <div className={styles.items}>
                    <Image src="/message.svg" alt="" width={14} height={14} />
                    <span>Aide</span>
                  </div>
                </li>
                <li>
                  <div className={styles.items}>
                    <Image src="/camera.svg" alt="" width={14} height={14} />
                    <span>Commentaire</span>
                  </div>
                </li>
                <li className={`${styles.borderItem} ${styles.listZoom}`}>
                  <div className={`$ ${styles.bordered}`}>
                    {/* <Image src="/warning-2.svg" alt="" width={14} height={14} /> */}
                    <span>Zoom</span>
                    <div className={styles.zoom}>
                      <span className={styles.ZomIcons} onClick={zoomOut}>
                        -
                      </span>
                      <span>(100%)</span>
                      <span className={styles.ZomIcons} onClick={zoomIn}>
                        +
                      </span>
                      <Image
                        src="/fullscreen.svg"
                        alt=""
                        width={20}
                        height={20}
                        className={styles.ZomIcons}
                        onClick={toggleFullscreen}
                      />
                    </div>
                  </div>
                </li>
                <li className={styles.borderItem}>
                  <div className={styles.items}>
                    {/* <Image src="/warning-2.svg" alt="" width={14} height={14} /> */}
                    <span>Raccourcis clavier</span>
                  </div>
                </li>
                <li className={styles.borderItem}>
                  <div className={styles.items}>
                    <Image src="/warning-2.svg" alt="" width={14} height={14} />
                    <span>Mettre à niveau</span>
                  </div>
                </li>
                <li className={styles.borderItem}>
                  <div className={styles.items}>
                    <Image src="/warning-2.svg" alt="" width={14} height={14} />
                    <span>Programme Teams Insider</span>
                  </div>
                </li>
                <li className={styles.borderItem}>
                  <div className={styles.items}>
                    <Image src="/warning-2.svg" alt="" width={14} height={14} />
                    <span>Télécharger l'application mobile</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.icon}>
            <Image
              src="/user.svg"
              alt=""
              width={20}
              height={20}
              className={styles.iconUser}
            />
          </div>
          <div className={styles.ico}>
            <div className={styles.user}>
              <span className={styles.username}>Esdras Wite</span>
              <Image src="/warning-1.svg" alt="" width={14} height={14} />
              <div className={styles.avatar}>
                <span className={styles.userinitial}>EW</span>
              </div>
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
