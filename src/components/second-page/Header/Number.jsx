import styled from "styled-components";


const Number = ({
 error,setError, selectedNumber, setSelectedNumber
}) => {
  const myNum = [1, 2, 3, 4, 5, 6];
  
  const numberSelectorHandler = (value) =>{
    setSelectedNumber(value);
    setError("");
  }

  return (
    <>
      <NumberSelectorContainer>
        <p className="error-message">{error}</p>
        <div className="box-flex">
          {myNum.map((value, i) => (
            <Box
              isSelected = {value === selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  );
};

export default Number;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .box-flex {
    display: flex;
    gap: 24px;
  }
  
  p {
    font-size: 24px;
    font-weight: 600;
    margin-top: 30px;
  }
  .error-message{
    font-weight:400;
    color: red;
  }
`;

let Box = styled.div`
  border: 1px solid black;
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor:pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: 0.5s ease;
  &:hover{
    background-color: grey;
    color: white;
    border: none;
  }

`;

