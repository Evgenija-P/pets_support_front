import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from '../../styles/stylesLayout';


export const User = styled.div`
display: flex;
`
export const ButtonLog = styled.div`
display: flex;
align-items: center;
justify-content: center;
	border-radius: 40px;
width: 100%;

background: #F59256;
:last-child{
	margin-left: 20px;
}
 ${media.mobile} {
		
   
  }
`;

export const ButtonReg = styled.div`
display: flex;
align-items: center;
justify-content: center;
	border: 2px solid #F59256;
	border-radius: 40px;
width: 100%;

background: #FFF;
:last-child{
	margin-left: 20px;
}
`;

export const NavLinkLog = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
padding: 10px 28px;

text-decoration: none;

`;

export const NavLinkReg = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
color: #000;
text-decoration: none;
padding: 10px 28px;
width: 100%;
height: 100%;

`;

export const Sp = styled.span`

font-weight: 500;
font-size: 20px;
line-height: 27px;

`;