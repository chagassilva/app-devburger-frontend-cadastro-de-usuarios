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
  align-items:center;
  gap: 10px;
  width: auto;
  margin: 20px 0;
  
`

export const ContainerFilter = styled.div``;

export const CardUsersMain = styled.div``;

export const CardUsersChild = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  padding: 10px 10px;
  margin: 20px auto 20px auto;
  display: grid;
  gap: 15px;
  border-radius: 32px;
  
  margin-left: auto;
  margin-right: auto;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  width: 100%;
  height: 620px;
  justify-content: center;
  text-align: center;

 box-shadow: 10px 15px 5px -6px rgba(127,56,65,0.49);
-webkit-box-shadow: 10px 15px 5px -6px rgba(127,56,65,0.49);
-moz-box-shadow: 10px 15px 5px -6px rgba(127,56,65,0.49);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background: linear-gradient(to right, #fe7e5d, #7f3841);
  }

`

export const AvatarUsers = styled.div`
  img {
    width: auto;
    height: auto;
  }

`

export const UserIconTrash = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
export const UserItem = styled.div`

 

    h5{
      
      font-size:20px;
      color:white;
      font-weight: normal;
    
    }
    
       h4{
      
      font-size:25px;
      color:white;
      font-weight: normal;
      width:100%;
    
    }
    


`

export const HrUsers = styled.div`


`