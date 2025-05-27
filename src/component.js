import styled from 'styled-components';

export const Container = styled.div`
background-color:#FFFFFF;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 678px;
max-width: 100%;
min-height: 400px;
`;


export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Logo = styled.img`
width: 150px;
margin-bottom: 20px;
display: block;
margin-left: auto;
margin-right: auto;
`;

export const Form = styled.form`
background-color: #EDF2FF;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

// Smaller Input component
export const Input = styled.input`
background-color: #FFFFFF;
border: none;
padding: 8px 12px;  /* Smaller padding */
margin: 6px 0;
width: 100%;
border-radius: 8px;
font-size: 13px;  /* Smaller font size */
height: 35px; /* Reduced height further */
`;

// Smaller Button component
export const Button = styled.button`
border-radius: 20px;
border: 1px solid #ffffff;
background: linear-gradient(45deg, #1678E6, #0C3C87);
color: #ffffff;
font-size: 13px;  /* Same font size as input */
font-weight: bold;
padding: 8px 0;  /* Adjusted padding */
width: 100%;
height: 35px; /* Same height as input */
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in, background 0.3s ease-in-out;

&:hover {
 background: linear-gradient(45deg, #ff4b2b, #1678E6);
}
&:active {
 transform: scale(0.95);
}
&:focus {
 outline: none;
}
`;


export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #333;
font-size: 10px;
text-decoration: none;
margin: 10px 0;
`;

export const Text = styled.p`
   font-size: 10px;
   color: #555;
   margin-top: 10px;
   text-align: center;
`;

export const SignUpLink = styled.a`
   color: #1678E6;
   font-weight: bold;
   text-decoration: none;
   cursor: pointer;

   &:hover {
       text-decoration: underline;
   }
`;


export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #324DD0;
background: -webkit-linear-gradient(to right, #324DD0, #2C3BA4);
background: linear-gradient(to right, #324DD0, #2C3BA4);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;


export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
right: 0;
transform: translateX(0);
${props => props.signinIn !== true ? `transform: translateX(20%);` : null}

img {
    max-width: 100%;
    height: auto;
    margin-bottom: 5px;
}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;

