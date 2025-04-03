import React, { useEffect, useRef, useState } from "react";
import styles from "./filterheader.module.css";
import Image from "next/image";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const FilterHeader = (props: Props) => {
  const [isFocused, setisFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  //Popup menu
  const [isOpened, setisOpened] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setisOpened(!isOpened);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setisFocused(true);
  }, []);

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

  return (
    <div
      className={`${styles.header} ${
        isFocused ? styles.focusOn : styles.focusOff
      }`}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Filtrer par noms"
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(false)}
      />
      <div className={styles.icons}>
        <div className={styles.item} onClick={toggleMenu}>
          <Image
            src="/filter.svg"
            alt=""
            width={20}
            height={20}
            className={styles.filterIcon}
          />
          <span className={styles.tooltip}>Plus de filtres</span>
          {isOpened && (
            <div className={styles.popupMenu} ref={menuRef}>
              <ul>
                <li>
                  <div className={styles.items}>
                    <Image src="/square.svg" alt="" width={14} height={14} />
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
                <hr />
                <li>
                  <div className={styles.items}>
                    <Image src="/warning-2.svg" alt="" width={14} height={14} />
                    <span>Zoom</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.item}>
          <Image
            src="/close.svg"
            alt=""
            width={17}
            height={17}
            onClick={() => props.setOpen(false)}
          />
          <span className={styles.tooltip}>Fermer le filter</span>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
