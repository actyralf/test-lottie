import styled from "styled-components";
/* import Link from "next/link"; */


export function Home() {
  return (
    <StyledBody>
      This is the main component
    </StyledBody>
  );
}

const StyledBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3E8E8;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;


/* const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 80px;
`;
 */