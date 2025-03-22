"use client";
import React, { useState } from "react";
import styles from "./conversationmenu.module.css";
import Image from "next/image";
import FilterHeader from "./header/FilterHeader";

type Props = {
  setmsgFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConversationMenu = (props: Props) => {
  const [hoveredItem, sethoveredItem] = useState<boolean>(false);
  const [titleExtended, settitleExtended] = useState<{
    recent: boolean;
    chat: boolean;
  }>({ recent: false, chat: false });

  const [filterOpened, setfilterOpened] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {/* header primary? */}
      {!filterOpened && (
        <div className={styles.header}>
          <h4>Conversation</h4>
          <div className={styles.iconContainer}>
            <div className={styles.item}>
              <Image
                src="/filter.svg"
                alt=""
                width={20}
                height={20}
                onClick={() => setfilterOpened(true)}
              />
              <span className={styles.tooltip}>Filtrer (Ctrl+Shift+F)</span>
            </div>
            <div className={`${styles.item} ${styles.meeting}`}>
              <Image src="/camera.svg" alt="" width={20} height={20} />
              <span className={styles.tooltip}>Réunion instantannée</span>
            </div>
            <div className={styles.item}>
              <Image
                src="/edit.svg"
                alt=""
                width={20}
                height={20}
                onClick={() => props.setmsgFocused(true)}
              />
              <span className={styles.tooltip}>
                Nouvelle conversation (Ctrl+N)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* header filter? */}
      {filterOpened && <FilterHeader setOpen={setfilterOpened} />}
      <div className={styles.content}>
        <div className={styles.recentsChats}>
          <div className={styles.titleContainer}>
            <Image
              src="/arrow.svg"
              alt=""
              width={15}
              height={15}
              className={`${
                titleExtended.recent ? styles.icoExtended : styles.ico
              }`}
            />
            <span
              onClick={() =>
                settitleExtended((prev) => ({ ...prev, recent: !prev.recent }))
              }
            >
              Récentes
            </span>
          </div>
          {titleExtended.recent && (
            <div className={styles.itemsChat}>
              <div className={styles.itemChat}>
                <div className={styles.avatar}>
                  <Image src="/group-1.svg" alt="" width={25} height={25} />
                </div>
                <span className={styles.newmsg}>Nouvelle conversation</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.othersChats}>
          <div className={styles.titleContainer}>
            <Image
              src="/arrow.svg"
              alt=""
              width={15}
              height={15}
              className={`${
                titleExtended.chat ? styles.icoExtended : styles.ico
              }`}
            />
            <span
              onClick={() =>
                settitleExtended((prev) => ({ ...prev, chat: !prev.chat }))
              }
            >
              Personnes que vous avez rencontrées
            </span>
          </div>
          {titleExtended.chat && (
            <div className={styles.itemsContact}>
              <div
                className={styles.itemContact}
                onMouseEnter={() => sethoveredItem(true)}
                onMouseLeave={() => sethoveredItem(false)}
              >
                <div className={styles.contactInfo}>
                  <div className={styles.avatarContact}>
                    <span>DK</span>
                  </div>
                  <div
                    className={`${styles.names} ${
                      hoveredItem && styles.namesActive
                    }`}
                  >
                    <span>Dorcas Katoto</span>
                    <span>Bonjour, je suis sur Teams.</span>
                  </div>
                </div>
                {hoveredItem && (
                  <Image
                    src="/more.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={styles.moreIco}
                  />
                )}
              </div>
              <div className={styles.itemContact}>
                <div className={styles.contactInfo}>
                  <div className={styles.avatarContact}>
                    <span>EM</span>
                  </div>
                  <div className={styles.names}>
                    <span>Elisée Mulumba</span>
                    <span>Bonjour, je suis sur Teams.</span>
                  </div>
                </div>
                <Image
                  src="/more.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.moreIco}
                />
              </div>
              <div className={styles.itemContact}>
                <div className={styles.contactInfo}>
                  <div className={styles.avatarContact}>
                    <span>KW</span>
                  </div>
                  <div className={styles.names}>
                    <span>Kasereka Wite</span>
                    <span>Bonjour, je suis sur Teams.</span>
                  </div>
                </div>
                <Image
                  src="/more.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.moreIco}
                />
              </div>
            </div>
          )}
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
