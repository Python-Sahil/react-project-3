import styled from "styled-components"

const Rules = () => {
  return (
    <ShowRules>
      <h1>How to play dice game</h1>
      <div className="text">
        <p>Send any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted. </p>
      </div>
    </ShowRules>
  );
}

export default Rules;

 const ShowRules = styled.div`
 max-width:794px;
 background-color: #f7e9e9;
 margin: 0 auto;
 margin-top: 40px;
 border-radius: 5px;
 padding: 20px;


 h1{
    font-size:24px;
    font-weight:600;
}
.text{
    margin-top: 24px;
}
 `
