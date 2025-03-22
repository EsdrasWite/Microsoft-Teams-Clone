import ConversationMenu from "@/component/home/ConversationMenu";
import ConversationContent from "@/component/home/ConversationContent";
import styles from "./app.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.rootmenu}>
        <ConversationMenu />
      </div>
      <div className={styles.rootcontent}>
        <ConversationContent />
      </div>
    </div>
  );
}
