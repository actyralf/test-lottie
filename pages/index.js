import styled from "styled-components";
import Link from "next/link";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";

export default function HomePage() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/BestellungAnimation"),
    });
  }, []);


  return (
    <div>
      <StyledBody>
        <h3>Wo drückt der Schuh?</h3>
        <Link href="/bestellung">
       {/*  <BestellungAnimation href={container}></BestellungAnimation> */}
          <StyledButton>Online bestellen und kaufen</StyledButton>
        </Link>
        <Link href="/widerruf">
          <StyledButton>Widerruf und Retoure</StyledButton>
        </Link>
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
  font-size: 18px;
  background-color: #E6CEEE;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
  height: 30vh;
  width: 80vw;
`;

/* const BestellungAnimation = styled.section`
  width: 70px;
  height: 90px;
`; */


/* const WiderrufAnimation = styled.section`

`; */