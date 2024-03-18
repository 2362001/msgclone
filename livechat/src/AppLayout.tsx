import styles from "./applayout.module.scss";
import Content from "./components/content/Content";
import LeftNav from "./components/leftnav/LeftNav";
import RightNav from "./components/rightnav/RightNav";
const AppLayout = () => {
  return (
    <div className={styles.applayout}>
      <LeftNav />
      <Content />
      <RightNav />
    </div>
  );
};

export default AppLayout;
