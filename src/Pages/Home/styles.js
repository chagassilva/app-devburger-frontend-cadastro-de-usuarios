import styled from "styled-components";

export const Topcontainer = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
  /* background-image: url("./src/assets/users.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  @media (min-width: 480px) and (max-width: 767px) {
    /* Estilos específicos para telas muito pequenas */

    gap: 20px;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    /* Estilos específicos para telas muito pequenas */

    height: 100vh;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    /* Estilos específicos para telas muito pequenas */

    height: auto;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    /* Estilos para notebooks e desktops comuns */

    gap: 20px;
    height: 100vh;
  }
`;

export const TopBackgound = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;

  img {
    max-width: 80%;
    max-height: 80%;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    /* Estilos específicos para telas muito pequenas */

    gap: 20px;
    height: auto;
    max-width: 542px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Estilos específicos para telas muito pequenas */

    height: auto;
    width: 542px;
    margin: 8px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    /* Estilos para notebooks e desktops comuns */

    gap: 20px;
    height: auto;
    max-width: 542px;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    gap: 20px;
    height: auto;
    max-width: 542px;
  }

  @media (min-width: 1080) and (max-width: 1920px) {
  /* Estilos para telas grandes */
   margin:0;
}


`;

export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputUser = styled.input`
  height: 50px;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 12px 8px;
  width: 100%;
`;

export const LabelUser = styled.label`
  color: white;
  margin: 5px 8px;
  font-size: 13px;

  span {
    color: red;
    font-size: 10px;
    font-style: bold;
    font-weight: bold;
  }
`;
export const ContainerForm = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  padding: 20px 20px;
  border-radius: 15px;
  box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);
  -webkit-box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);
  -moz-box-shadow: 10px 15px 5px -6px rgba(127, 56, 65, 0.53);
`;

// Responsividade

// /* Smartphones médios e tablets em modo retrato */
// @media (min-width: 481px) and (max-width: 767px) {
//   /* Estilos para celulares grandes e tablets menores */
// }

// /* Tablets e dispositivos médios (ex: iPad) */
// @media (min-width: 768px) and (max-width: 1023px) {
//   /* Estilos para tablets e notebooks menores */
// }

// /* Laptops e desktops padrão */
// @media (min-width: 1024px) and (max-width: 1279px) {
//   /* Estilos para notebooks e desktops comuns */
// }

// /* Desktops grandes */
// @media (min-width: 1280px) and (max-width: 1439px) {
//   /* Monitores maiores */
// }

// /* Telas muito grandes (ultrawide, 4K, etc) */
// @media (min-width: 1440px) {
//   /* Estilos para telas grandes */
// }
