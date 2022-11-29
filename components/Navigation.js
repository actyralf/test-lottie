import styled from "styled-components";
import { Icon } from '@iconify/react';
import homeRounded from '@iconify/icons-material-symbols/home-rounded';


export default function Navigation() {
    return (
    <StyledNav>
        <Icon icon={homeRounded} color="#572887" width="45px"/>
        <Icon icon="mdi:bookmark-multiple" color="#572887" width="40px" />
        <Icon icon="mdi:map-marker-multiple" color="#572887" width="40px" />
    </StyledNav>
    )
  }



const StyledNav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
border: solid #572887 2px;
padding: 10px;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 5px;
position: sticky;
bottom: 0px;
`;