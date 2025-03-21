"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./conversationcontent.module.css";
import Image from "next/image";

const ConversationContent = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [focused2, setFocused2] = useState<boolean>(false);
  const [focusedTA, setFocusedTA] = useState<boolean>(false);
  const [groupVisible, setgroupVisible] = useState<any>(false);
  const [value, setvalue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.style.maxHeight = `300px`;
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.remove();
      }
    };
  }, [value]);

  const handleGroupe = () => {
    setgroupVisible((prev: any) => {
      if (prev) {
        return setgroupVisible(false);
      } else {
        setFocused2(true);
        return setgroupVisible(true);
      }
    });
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
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/messageIcon.png" alt="" fill />
        </div>
        <div className={styles.imgText}>
          <h4>Vous démarrez une nouvelle conversation</h4>
          <span>Tapez votre premier message ci-dessous.</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div
          className={`${styles.inputContainer} ${
            focusedTA && styles.inputContainerActive
          }`}
        >
          <textarea
            ref={textareaRef}
            name=""
            id=""
            placeholder="Taper un message"
            rows={1}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            onFocus={() => setFocusedTA(true)}
            onBlur={() => setFocusedTA(false)}
          />
          {/* <div className={styles.icons}>Icon</div> */}
          <div className={styles.icContainer}>
            <div className={styles.icItem}>
              <Image src="/emoji.svg" alt="" fill />
            </div>
            <div className={styles.icItem}>
              <Image src="/image.svg" alt="" width={15} height={15} />
            </div>
            <div className={styles.icItem}>
              <Image src="/attached.svg" alt="" fill />
            </div>
            <div className={styles.icItem}>
              <Image src="/add.svg" alt="" fill />
            </div>
            <div className={styles.icItem}>
              <Image src="/bar.svg" alt="" fill />
            </div>
            <div className={styles.icItem}>
              <Image src="/send.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationContent;
