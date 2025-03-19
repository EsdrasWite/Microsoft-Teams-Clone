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
      <div className={styles.content}>
        <div className={styles.recentsChats}>
          <div className={styles.titleContainer}>
            <Image
              src="/arrow.svg"
              alt=""
              width={15}
              height={15}
              className={styles.ico}
            />
            <span>Récentes</span>
          </div>
          <div className={styles.itemsChat}>
            <div className={styles.itemChat}>
              <div className={styles.avatar}>
                <Image src="/group-1.svg" alt="" width={25} height={25} />
              </div>
              <span className={styles.newmsg}>Nouvelle conversation</span>
            </div>
          </div>
        </div>
        <div className={styles.othersChats}>
          <div className={styles.titleContainer}>
            <Image
              src="/arrow.svg"
              alt=""
              width={15}
              height={15}
              className={styles.ico}
            />
            <span>Personnes que vous avez rencontrées</span>
          </div>
          <div className={styles.items}>Items</div>
        </div>
      </div>
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
