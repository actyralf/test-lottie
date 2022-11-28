import styled from "styled-components";
/* import lottie from "lottie-web";
import { useEffect, useRef } from "react"; */
/* import Link from "next/link"; */


export function Header() {

/* const container = useRef(null);    

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            render: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../public/HeaderAnimation")
        })
    }, []) */




  return (
  <StyledHeader>
    <h3>This is the Header Component</h3>
 {/*    <section className="container" ref={container}></section> */}
    </StyledHeader>

  )
}



const StyledHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid #572887 2px;
padding: 10px;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 5px;
`;