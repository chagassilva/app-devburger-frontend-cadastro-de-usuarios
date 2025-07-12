import styled from "styled-components";

export const ModalStyledalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 1000;
  background: transparent;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const ModalStyled = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  .labelusers {
    display: flex;
    justify-content: start;
    align-items: anchor-center;
    gap:5px;
    color: white;
  }

  h3{
    text-align:"center"; 
    font-size:30px; color:white;
    justify-content: start;
    align-self:center;
    text-shadow: 5px 5px #7f3841;
  }

  
`;

export const BannerEditAvatarUsers = styled.div`

    display: flex;
    justify-content: center;
   align-self: center;
    width:120px;
    height:120px;
`;

export const Btnsaveedituser = styled.button`
  background: linear-gradient(to right, #ffffffff, #d6c9cbff);
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 50%;
  justify-content: center;
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    opacity: 0.9;
    background: linear-gradient(to right, #d6c7c4ff, #f3c9cfff);
  }
`;

export const Btncanceledituser = styled.button`
  background: linear-gradient(to right, #c4117fff, #e60b28ff);
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 50%;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-style: normal;
  &:hover {
    opacity: 0.9;
    background: linear-gradient(to right, #e90993ff, #ff0123ff);
  }
`;

export const InputEditUsers = styled.input`

border:none;
border-radius:5px;
height:40px;
padding: 15px; 10px;


`;

export const ContainerUserEdit = styled.div`

`;
