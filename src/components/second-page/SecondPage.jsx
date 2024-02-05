import Score from "./Header/Score"
import Number from "./Header/Number"
import styles from "./Second.module.css"
import RoleDice from "./Middle/RoleDice"
import MiddleButton from "./Middle/MiddleButton"
import Rules from "./Middle/Rules"
import { useState } from "react";

const SecondPage = () => {
const [score, setScore] = useState(0);
const [selectedNumber, setSelectedNumber] = useState();
const [currentDice, setCurrentDice] = useState(1);
const [error, setError]= useState("");
const [showRules, setShowRules] = useState(false)



 const generateNumberDice = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };
 const roleDice = () => {
  if (!selectedNumber) {
    setError("You have not selected any number");
    return;
  };
 
   const randomNumber = generateNumberDice(1, 6);
   setCurrentDice((prev) => randomNumber);

   

   if(selectedNumber === randomNumber ){
    setScore(prev =>prev+randomNumber)
   } else{
    setScore(prev => prev-2);
   }

   setSelectedNumber("");
 };
  return (
    <>
      <div className={styles.second_header}>
        <Score score={score}/>
        <Number error={error} 
        setError={setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <MiddleButton score={score} setScore={setScore}
      showRules={showRules} setShowRules={setShowRules}/>

      {showRules && <Rules />}
    </>
  );
}

export default SecondPage;