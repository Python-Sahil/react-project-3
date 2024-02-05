import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) =>{
  

 
  return (
    <Dice>
      <div className="dice" onClick={roleDice}>
        <img className="button-dice" src={`./dices/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <p>Click on Dice to roll</p>
    </Dice>
  );
}

export default RoleDice;

const Dice = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
  font-size: 24px;
}
.button-dice{
  cursor: pointer;
  width: 250px;
  height: 250px;
}
`