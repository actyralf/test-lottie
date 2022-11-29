import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <StyledBody>
        <h3>Wo drückt der Schuh?</h3>
        <Link href="/bestellung"><StyledButton>Online bestellen und kaufen</StyledButton></Link>
        <Link href="/widerruf"><StyledButton>Widerruf und Retoure</StyledButton></Link>
      </StyledBody>
    </div>
  );
}

const StyledBody = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 30vh;
  width: 80vw;
`