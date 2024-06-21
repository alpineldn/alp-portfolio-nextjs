import styles from "./style.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={styles.footer}>
      <a>Awwwards</a>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a>
    </div>
  );
};

export default Footer;
