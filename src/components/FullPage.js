import React from "react";
import styled from "styled-components";

const FullPage = ({ children }) => {
  return <FullPageDiv>{children}</FullPageDiv>;
};

export default FullPage;

const FullPageDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
