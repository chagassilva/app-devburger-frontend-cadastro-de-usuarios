import styled from "styled-components";

export const Topcontainer = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  margin: 20px auto 20px auto;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 420px 420px 420px 420px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: auto;
  margin: 20px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
  }
`;

export const ContainerFilter = styled.div``;

export const CardUsersMain = styled.div``;

export const CardUsersChild = styled.div`
  background: radial-gradient(#fe7e5d 5%, #7f3841 100%);
  padding: 10px 10px;
  margin: 20px auto 20px auto;
  display: grid;
  gap: 15px;
  border-radius: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 620px;
  justify-content: center;
  text-align: center;

  box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);
  -webkit-box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);
  -moz-box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;

    transform: scale(1.05);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    z-index: 10; /* traz pra frente */
  }
`;

export const AvatarUsers = styled.div`
  img {
    width: 180px;
  }
`;

export const UserIconTrash = styled.img`
  cursor: pointer;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
export const UserItem = styled.div`
  h5 {
    font-size: 20px;
    color: white;
    font-weight: normal;
    text-align: left;
    padding: 5px;
  }
`;

export const HrUsers = styled.div`
  hr {
    border: 1px solid #7f3841;
    width: 550px;
  }
`;

export const BannerGround = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 30px;
`;

export const BannerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`;

export const BannerAvatarUsers = styled.div`
  width: 130px;
  height: auto;
  text-align: center;
`;

export const AvatarItems = styled.div`
  background-color: white;
  border-radius: 5px;
  text-align: center;
`;
