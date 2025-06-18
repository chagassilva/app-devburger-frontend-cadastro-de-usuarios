
import styled from "styled-components"



export const ButtonRegister = styled.button`

border: ${(props) => props.theme === "primary" ? "none" : "solid 1px #fff"};
background: ${(props) => props.theme === "primary" ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)" : "transparent"} ;
font-size: 16px;
color: white;
padding: 16px 32px;
width:fit-content;
height: 60px;
border-radius: 16px;
cursor: pointer;

&:hover{
    
    ${(props) => props.theme === "primary" ? "opacity: 0.8" : "background:#fff; color:#fe7e5d"}
}

&:active{
   
    ${(props) => props.theme === "primary" ? "opacity:0.5" : "background:#c0c0c0; color:#000000"}
}

`

export const ContainerFilter = styled.div`


input{

    background:rgb(255, 255, 255);
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
    margin-left: 10px;

}

label{


color: white;

}



&:hover{

    opacity: 0.5;
    transition: 0.9s;
    transition-duration: 1s, 3s;

}

    select{
        width: 150px;
height: 30px;
border-radius: 8px;
border: none;
background: linear-gradient(to right,rgb(216, 199, 195),rgb(100, 88, 90));
outline: none;
cursor: pointer;


    }

`

export const TopBackgound = styled.div`




background: ${(props) => props.theme === "page2" ?
"linear-gradient(to right, #fe7e5d,rgb(54, 5, 12))" :
 "linear-gradient(to right, #fe7e5d, #7f3841)"
 };
height:auto;
width:90vw;
border-radius:30px;
max-width: 880px;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 20px;
justify-items: center;
row-gap: 10px;

img{

    max-width: 80%;
    max-height: 80%;

}

@media screen and (min-width: 480px) and (max-width: 700px) {

grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
height: auto;


}

`
//
export const Topcontainer = styled.div`

    background-color:#181f36;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
   
    
    
    gap: 20px;


    @media screen and (min-width: 480px) and (max-width: 1920px) {

        height: auto;
        background-color:#181f36;
    }
    
    
`
export const Title = styled.h1`

 text-align: center;
 color: white;
 font-size: 60px;

 @media screen and (min-width: 480px) and (max-width: 700px) {
    
    font-size:  ${(props) => props.theme === "listusers" ? "35px" : "60px"};
 }
 
 

`

export const CardUsersMain = styled.div`

height: auto;
border-radius: 30px;
padding: 30px;
background: linear-gradient(to right,rgb(145, 126, 122),rgb(255, 255, 255));
display:grid;
grid-template-columns:1fr 1fr;
gap: 20px;
width: auto;

@media screen and (max-width: 700px) {

    grid-template-columns: 1fr;
    
}

`
 //background: linear-gradient(to right, #fe7e5d, #7f3841);
 //background: linear-gradient(to right,rgb(145, 126, 122),rgb(255, 255, 255));

export const CardUsersChild = styled.div`

display:flex;

align-items: center;
justify-content: space-between;
width: 400px;
height:110px;
border-radius: 15px;
padding: 10px;
background: linear-gradient(to right, #fe7e5d, #7f3841);

&:hover{

opacity: 0.5;
cursor: pointer;

  transition: 0.9s;
  transition-duration: 1s, 3s;
  
}

li{

   text-transform: capitalize;
   list-style: none;
}

`

export const CardUsersHeaderMain = styled.div`


width: 80px;
height:80px;
padding: 10px;
background: linear-gradient(to right,rgb(109, 98, 95),rgb(253, 252, 252));
border-radius: 100%;
display:flex;
justify-content: center;




&:hover{

opacity: 0.5;
cursor: pointer;

  transition: 0.9s;
  transition-duration: 1s, 3s;
  
}

li{

   text-transform: capitalize;
   list-style: none;
}

`

export const CardUsersHeaderChild = styled.div`


`

export const UserIconTrash = styled.img`



`

export const AvatarUsers = styled.img`


   
    width:70px;
    height:70px;
    

`
export const backgroundLogin = styled.div`

background-color:rgb(28, 183, 211);


`


export const FormUser = styled.form`


display:flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
    

`


export const ContainerInputs = styled.div`

display:flex;
gap: 10px;
   
`


export const InputUser = styled.input`


height: 50px;
border-radius: 6px;
border: none;
outline: none;
padding: 12px 8px;
width: 100%;

`

export const LabelUser = styled.label`

color:white;
margin: 5px 8px;
font-size: 13px;  

span{

    color:red;
    font-size: 10px;   
    font-style:bold;
    font-weight: bold;
    
    
}

`

// background: ${(props) => props.theme === "pagelogin" ? 
    
//     "linear-gradient(to right, #fe7e5d,rgb(0, 156, 91))" :
//  "linear-gradient(to right, #fe7e5d,rgb(4, 124, 94))", "height:100vh", "#181f36"};