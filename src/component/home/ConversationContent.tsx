"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./conversationcontent.module.css";
import Image from "next/image";

type Props = {
  setmsgFocused: React.Dispatch<React.SetStateAction<boolean>>;
  msgFocused: boolean;
};

const ConversationContent = ({ msgFocused, setmsgFocused }: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  // const [msgFocused] = useState<boolean>(msgFocused);
  const [focusedGroup, setFocusedGroup] = useState<boolean>(false);
  const [focusedTA, setFocusedTA] = useState<boolean>(false);
  const [groupOpened, setgroupOpened] = useState<any>(false);
  const [valueTA, setvalueTA] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  //activate focus in textarea when it's cliked & rise up the textarea row size dynamically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.style.maxHeight = `300px`;
    }
  }, [valueTA]);

  //activate focus on message recipien input when the edit button in left menu is cliked
  useEffect(() => {
    if (inputRef.current && msgFocused) {
      inputRef.current.focus();
    }
  }, [msgFocused]);

  const handleGroupe = () => {
    if (groupOpened) {
      setgroupOpened(false);
    } else {
      setFocusedGroup(true);
      setgroupOpened(true);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.header} ${
          focused || msgFocused ? styles.headerActive : styles.headerInactive
        }`}
      >
        {groupOpened && (
          <div
            className={`${styles.groupForm} ${
              focusedGroup ? styles.groupFormActive : styles.groupFormInactive
            }`}
          >
            <input
              type="text"
              placeholder="Nom du groupe :"
              onFocus={() => {
                setFocusedGroup(true);
                setmsgFocused(false);
              }}
              onBlur={() => {
                setFocusedGroup(false);
              }}
              autoFocus={focusedGroup}
            />
          </div>
        )}
        <div className={styles.recipientForm}>
          <div className={styles.text}>
            <span className={styles.label}>A :{msgFocused && "Focused"}</span>
            <input
              type="text"
              ref={inputRef}
              placeholder="Entez nom, email ou numéro de téléphone"
              onFocus={() => {
                setFocused(true);
                setFocusedGroup(false);
                setmsgFocused(false);
              }}
              onBlur={() => {
                setFocused(false);
                setmsgFocused(false);
              }}
            />
          </div>
          <div className={styles.iconContainer} onClick={handleGroupe}>
            <Image src="/arrow.svg" fill alt="" className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Image src="/messageIcon.png" alt="" width={400} height={250} />
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
            placeholder="Taper un message"
            rows={1}
            value={valueTA}
            onChange={(e) => setvalueTA(e.target.value)}
            onFocus={() => {
              setFocusedTA(true);
              setmsgFocused(false);
            }}
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
