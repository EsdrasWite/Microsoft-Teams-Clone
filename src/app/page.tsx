"use client";
import ConversationMenu from "@/component/home/ConversationMenu";
import ConversationContent from "@/component/home/ConversationContent";
import styles from "./app.module.css";
import { useState } from "react";

export default function Home() {
  const [msgFocused, setmsgFocused] = useState<boolean>(false);

  // console.log(msgFocused);

  return (
    <div className={styles.container}>
      <div className={styles.rootmenu}>
        <ConversationMenu setmsgFocused={setmsgFocused} />
      </div>
      <div className={styles.rootcontent}>
        <ConversationContent
          msgFocused={msgFocused}
          setmsgFocused={setmsgFocused}
        />
      </div>
    </div>
  );
}
