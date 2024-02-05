import styled from "styled-components";

const MiddleButton = ({score,setScore, showRules, setShowRules}) => {
  const resetScore = () => {
    setScore(0);
  };
 
  return (
    <Button>
      <button onClick={resetScore} className="reset">Reset Score</button>
      <button onClick={()=>setShowRules(prev=>!prev)} className="rules">
        {showRules ? "Hide":"Show"} Rules</button>
    </Button>
  );
}

export default MiddleButton;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-top: 36px;

  button {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 18px;
    width: 220px;
    border-radius: 5px;
    cursor: pointer;
  }
  .reset {
    border: 1px solid black;
    transition: 0.25s ease;
  }
  .reset:hover {
    background-color: lightgrey;
    border: 0.25px solid grey;
  }
  .rules {
    color: #ffffff;
    background-color: black;
    border: none;
    transition: 0.25s ease;
  }
  .rules:hover {
    background-color: hsl(0, 0%, 20%);
  }
`;