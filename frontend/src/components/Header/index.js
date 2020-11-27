import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icone  from '../../assests/icon.png';


function Header(props) {
    return (
        <> 
           <HeaderContainer>
                <Logo src={Icone} alt ='Pitu - Ecurtador de URL'/>
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer> 
        </>    
    )
}

export default Header;