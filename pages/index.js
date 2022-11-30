import styled from "styled-components";
import Link from "next/link";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";

export default function HomePage() {
  const widerrufContainer = useRef(null);
  const bestellungContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: bestellungContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/BestellungAnimation"),
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: widerrufContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/WiderrufAnimation"),
    });
  }, []);

  return (
    <div>
      <StyledBody>
        <h3>Wo drückt der Schuh?</h3>
        <Link href="/bestellung">
          <StyledButton>
            <BestellungAnimation href={bestellungContainer}>
              Here!
            </BestellungAnimation>
            Online bestellen und kaufen
          </StyledButton>
        </Link>
        <Link href="/widerruf">
          <StyledButton>
            <WiderrufAnimation href={widerrufContainer}>
              Here!
            </WiderrufAnimation>
            Widerruf und Retoure
          </StyledButton>
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
  /*  border: 1px solid rgba(163, 134, 182, 0.5); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 30vh;
  width: 80vw;
  text-decoration: none;
`;

const BestellungAnimation = styled.section`
  width: 70px;
  height: 90px;
  z-index: 10;
`;

const WiderrufAnimation = styled.section`
  width: 70px;
  height: 90px;
  z-index: 10;
`;
