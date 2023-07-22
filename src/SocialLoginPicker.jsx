import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h1`
  margin-bottom: 20px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
`;

const SocialLoginPicker = () => {
  return (
    <LoginContainer>
      <LoginTitle style={{color:'#2f1c6a'}}>Log in</LoginTitle>
      
      <LoginButtonContainer>
        {/* Google Login */}
        <LoginButton bgcolor="#DB4437" hovercolor="#E74B3B">
          <i className="fab fa-google"></i>
        </LoginButton>
        {/* Facebook Login */}
        <LoginButton bgcolor="#4078C0" hovercolor="#4B89DC">
          <i className="fab fa-facebook-f"></i>
        </LoginButton>
        {/* GitHub Login */}
        <LoginButton bgcolor="#333" hovercolor="#444">
          <i className="fab fa-github"></i>
        </LoginButton>
      </LoginButtonContainer>
      <br />
    ------------------- or -------------------
    </LoginContainer>
  
  );
};

export default SocialLoginPicker;
