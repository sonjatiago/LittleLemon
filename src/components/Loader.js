import React from 'react';
import styled from 'styled-components';
import lemonImage from '../assets/lemon.png';  // Adjust the path to where your lemon image is stored

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="loader lemon">
          <img src={lemonImage} alt="Lemon" />
        </div>
        <div className="loader lemon">
          <img src={lemonImage} alt="Lemon" />
        </div>
        <div className="loader lemon">
          <img src={lemonImage} alt="Lemon" />
        </div>
      </div>
      <div className="welcome-text">
        Welcome to Little Lemon Restaurant
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
  z-index: 9999;
  flex-direction: column;

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .loader {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotateLemon 1s infinite ease-in-out;
  }

  .loader.lemon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Styling for the welcome text */
  .welcome-text {
    font-size: 24px;
    color: #495E57;
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
  }

  /* Animation for rotating lemon images */
  @keyframes rotateLemon {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
