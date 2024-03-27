import {ReactNode} from "react";
import styled from "styled-components";
import NavigationMenu1 from "./NavigationMenu1.tsx";


interface LayoutProps {
    children : ReactNode
}
function Layout({children}:LayoutProps) {
    return (
        <Background>
            <NavigationMenu1 navheight={'2vw'}/>
            {children}
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 800px;
`



export default Layout;