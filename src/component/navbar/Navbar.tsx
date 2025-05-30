"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [_, setIsFullscreen] = useState<boolean>(false);
  const [isOpened, setisOpened] = useState<boolean>(false);
  const [isUserMenuOpened, setisUserMenuOpened] = useState<boolean>(false);

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

  // close the tab
  const openAndCloseTab = () => {
    const newTab = window.open("about:blank", "_self"); // Open a blank tab
    if (newTab) newTab.close(); // Close the tab
  };

  // minimize the tab
  const minimizeWindow = () => {
    const newTab = window.open("about:blank");
    if (newTab) window.close(); // Close the current window
  };

  //Popup menu
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setisOpened(!isOpened);
  };
  //Popup usermenu
  const userMenuRef = useRef<HTMLDivElement>(null);
  const toggleuserMenu = () => {
    setisUserMenuOpened(!isUserMenuOpened);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setisOpened(false);
      }
    };

    if (isOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setisUserMenuOpened(false);
      }
    };

    if (isUserMenuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpened]);

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
              onClick={toggleMenu}
            />
            {isOpened && (
              <div className={styles.popupMenu} ref={menuRef}>
                <ul>
                  <li>
                    <div className={styles.items}>
                      <Image src="/setting.svg" alt="" width={14} height={14} />
                      <span>Paramètres</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.items}>
                      <Image src="/help.svg" alt="" width={14} height={14} />
                      <span>Aide</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.items}>
                      <Image src="/message.svg" alt="" width={14} height={14} />
                      <span>Commentaire</span>
                    </div>
                  </li>
                  <li className={styles.listZoom}>
                    <div className={`$ ${styles.bordered}`}>
                      {/* <Image src="/warning-2.svg" alt="" width={14} height={14} /> */}
                      <span>Zoom</span>
                      <div className={styles.zoom}>
                        <span className={styles.ZomIcons} onClick={zoomOut}>
                          -
                        </span>
                        <span>({`${Math.trunc(zoomLevel * 100)} %`})</span>
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
                  <li>
                    <div className={styles.items}>
                      {/* <Image src="/warning-2.svg" alt="" width={14} height={14} /> */}
                      <span>Raccourcis clavier</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.items}>
                      <Image src="/diamond.svg" alt="" width={14} height={14} />
                      <span>Mettre à niveau</span>
                    </div>
                  </li>
                  <li className={styles.withNew}>
                    <div className={styles.itemsWithNew}>
                      <Image
                        src="/user-heart.svg"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>Programme Teams Insider</span>
                    </div>
                    <div className={styles.new}>
                      <span>Nouveau</span>
                    </div>
                  </li>
                  <li className={styles.withNew}>
                    <div className={styles.itemsWithNew}>
                      <Image
                        src="/telephone.svg"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>Télécharger l'application mobile</span>
                    </div>
                    <div className={styles.new}>
                      <span>Nouveau</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className={styles.icon}>
            <Image
              src="/user.svg"
              alt=""
              width={20}
              height={20}
              className={styles.iconUser}
              onClick={toggleuserMenu}
            />
            {isUserMenuOpened && (
              <div className={styles.popupUserMenu} ref={userMenuRef}>
                <div className={styles.topUser}>
                  <span>Activtés dans vos autres comptes et organisations</span>
                </div>
                <div className={styles.bottomUser}>
                  <Image
                    src="/hand-with-fingers.svg"
                    alt=""
                    width={25}
                    height={25}
                    // className={styles.iconUser}
                  />
                  <span>Aucune activité</span>
                </div>
              </div>
            )}
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
          <div className={styles.btnIcon} onClick={minimizeWindow}>
            <Image src="/line.svg" alt="" width={15} height={15} />
          </div>
          <div className={styles.btnIcon} onClick={toggleFullscreen}>
            <Image src="/square.svg" alt="" width={15} height={15} />
          </div>
          <div className={styles.btnIconClose} onClick={openAndCloseTab}>
            <Image src="/close.svg" alt="" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
