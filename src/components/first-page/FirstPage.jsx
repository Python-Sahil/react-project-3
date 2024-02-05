import styles from "./First.module.css"
import Button from "../Button/Button";
const FirstPage = ({toggle}) => {
  return (
    <div className={styles.page_container}>
      <div className={styles.left_conatiner}>
        <img src="/dices 1.png" alt="dice-picture" />
      </div>

      <div className={styles.right_container}>
        <h1>DICE GAME</h1>
        <Button toggle={toggle} text = "Play Now"/>
      </div>
    </div>
  );
}

export default FirstPage;