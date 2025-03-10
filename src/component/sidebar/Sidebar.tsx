import Image from "next/image";
import styles from "./sidebar.module.css";

type menuTYpe = {
  id: number;
  name: string;
  path: string;
  icon: string;
}[];

const menus: menuTYpe = [
  {
    id: 1,
    name: "Conversation",
    path: "conversation",
    icon: "./message.svg",
  },
  {
    id: 2,
    name: "Meet",
    path: "meet",
    icon: "./camera.svg",
  },
  {
    id: 3,
    name: "Communauté",
    path: "community",
    icon: "./group-1.svg",
  },
  {
    id: 4,
    name: "Calendar",
    path: "calendar",
    icon: "./calendar.svg",
  },
  {
    id: 5,
    name: "Activité",
    path: "activity",
    icon: "./alert.svg",
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      {menus.map((menu) => (
        <div className={styles.items} key={menu.id}>
          <Image
            src={menu.icon}
            width={25}
            height={28}
            alt=""
            className={styles.icon}
          />
          <span className={styles.label}>{menu.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
