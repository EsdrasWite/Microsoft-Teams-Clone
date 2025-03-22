import React, { useEffect, useRef, useState } from "react";
import styles from "./filterheader.module.css";
import Image from "next/image";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const FilterHeader = (props: Props) => {
  const [isFocused, setisFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setisFocused(true);
  }, []);
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
        <div className={styles.item}>
          <Image src="/filter.svg" alt="" width={20} height={20} />
          <span className={styles.tooltip}>Plus de filtres</span>
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
