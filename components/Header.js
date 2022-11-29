import styled from "styled-components";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";

export default function Header() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/HeaderAnimation"),
    });
  }, []);

  return (
    <StyledHeader>
      <h3>Taschen</h3>
      <AnimationContainer ref={container}></AnimationContainer>
      <h3>Anwalt</h3>
    </StyledHeader>
  );
}

const AnimationContainer = styled.section`
  width: 70px;
  height: 100px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #572887 2px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  color: #572887;
`;
