"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./conversationcontent.module.css";
import Image from "next/image";

const ConversationContent = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [focused2, setFocused2] = useState<boolean>(false);
  const [groupVisible, setgroupVisible] = useState<any>(false);

  const handleGroupe = () => {
    setgroupVisible((prev: any) => {
      if (prev) {
        return setgroupVisible(false);
      } else {
        setFocused2(true);
        return setgroupVisible(true);
      }
    });
    // if (groupVisible) {
    //   setgroupVisible(true);
    //   setFocused2(true);
    // } else {
    //   setgroupVisible(false);
    // }
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.header} ${
          focused ? styles.headerActive : styles.headerInactive
        }`}
      >
        {groupVisible && (
          <div
            className={`${styles.groupForm} ${
              focused2 ? styles.groupFormActive : styles.groupFormInactive
            }`}
          >
            <span className={styles.label}>Nom du groupe :</span>
            <input
              type="text"
              onFocus={() => setFocused2(true)}
              onBlur={() => setFocused2(false)}
            />
          </div>
        )}
        <div className={styles.recipientForm}>
          <div className={styles.text}>
            <span className={styles.label}>A :</span>
            <input
              type="text"
              placeholder="Entez nom, email ou numéro de téléphone"
              onFocus={() => {
                setFocused(true);
                setFocused2(false);
              }}
              onBlur={() => setFocused(false)}
            />
          </div>
          <div className={styles.iconContainer} onClick={handleGroupe}>
            <Image src="/arrow.svg" fill alt="" className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.content}>content</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default ConversationContent;
