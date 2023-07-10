import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const EditModal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal className="w-full h-[221px md:w-[994px] h-[500px shadow-lg lg:ml-[200px">
                <StyledModalHeader className="px-6 pt-4">
                    <a href="#" onClick={handleCloseClick}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.834" cy="12.834" r="12.834" fill="#DA1E28" />
                            <path d="M17.1126 8.5578L8.55664 17.1138" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.55664 8.5578L17.1126 17.1138" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalBody = styled.div`
  padding-top: px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  ${'' /* width: 567px;
  height: 396px; */}
  padding: px;
  ${'' /* margin-top:510px; */}
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 20%;
  left: 30%;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;


const StyledModalTitle = styled.div`
  padding-left:0.1px
`;
export default EditModal;