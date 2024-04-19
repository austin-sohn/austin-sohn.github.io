import styled from "styled-components";

const Test = styled.a`
  scroll-behavior: smooth;
`;
const LandingStyle = styled.div`
  margin-top: 55.5px;
  height: 100svh;
`;
const CircleStyle = styled.div`
  width: 330px;
  height: 330px;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
`;

export { LandingStyle, CircleStyle, Test };