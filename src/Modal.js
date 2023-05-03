import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalBody = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 2rem;
  border: 10px solid #000;
  border-style: double;
  width: 70%;
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: navy;
  color: #fff;
`;

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShouldShow(true)}>Show Modal</Button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <Button onClick={() => setShouldShow(false)}>Hide Modal</Button>
            <br />
            <br />
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
