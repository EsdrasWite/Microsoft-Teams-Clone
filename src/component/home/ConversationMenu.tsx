import React from "react";
import styles from "./conversationmenu.module.css";
import Image from "next/image";

const ConversationMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Conversation</h4>
        <div className={styles.iconContainer}>
          <div className={styles.item}>
            <Image src="/filter.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.item}>
            <Image src="/camera.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.item}>
            <Image src="/edit.svg" alt="" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className={styles.content}>menu</div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>
          <Image src="/user.svg" alt="" height={20} width={20} />
          <span>Inviter à rejoindre Teams</span>
        </button>
      </div>
    </div>
  );
};

export default ConversationMenu;
