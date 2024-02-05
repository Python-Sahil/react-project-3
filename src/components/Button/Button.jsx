import styles from "./Button.module.css"

const Button = (props) => {
  const {text,toggle} = props;
  return (
    <button className={styles.button} onClick={toggle}>
      {text}
    </button>
   
  )
}

export default Button