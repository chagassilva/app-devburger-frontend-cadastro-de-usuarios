import { ButtonRegister } from "../../../src/components/Button/styles.js";
import UserImage from "../../../src/assets/users.png";
import api from "../../services/api.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  TopBackgound,
  Topcontainer,
  FormUser,
  Title,
  InputUser,
  LabelUser,
  ContainerInputs,
} from "./styles.js";

function Home() {
  const navigate = useNavigate();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();
  const inputAddress  = useRef();

  async function registerNewUser() {

    try{

    const data = await api.post("/create-users", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      address: inputAddress.current.value,
    });


    Swal.fire({
      title: 'Usuário cadastrado!',
      text: 'O cadastro foi realizado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Fechar',
      draggable: true,
    });


    setTimeout(() => {
      navigate("/lista-de-usuarios")
    }, 3000);

    // Limpar campos ou redirecionar, se quiser
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: 'Não foi possível cadastrar o usuário.',
      icon: 'error',
    });
  }

  

}

    

  return (
    <Topcontainer>
      <TopBackgound>
        <img src={UserImage} alt="imagnes de usuarios" />
      </TopBackgound>

      <FormUser>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <LabelUser>
              Nome:<span> *</span>
            </LabelUser>
            <InputUser
              type="text"
              placeholder="Nome de usuário"
              ref={inputName}
            />
          </div>

          <div>
            <LabelUser>
              Idade:<span> *</span>
            </LabelUser>
            <InputUser
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <LabelUser>
            E-mail:<span> *</span>
          </LabelUser>
          <InputUser
            type="email"
            placeholder="Digite seu email"
            ref={inputEmail}
          />
        </div>

         <div style={{ width: "100%" }}>
          <LabelUser>
            Endereço:<span> *</span>
          </LabelUser>
          <InputUser
            type="address"
            placeholder="Digite seu endereço"
            ref={inputAddress}
          />
        </div>


        <ButtonRegister type="button" theme="primary"onClick={registerNewUser} 

        >
          Cadastrar usuário
        </ButtonRegister>
        
      </FormUser>

      <ButtonRegister
        type="button"
        onClick={() => {
          
          navigate("/lista-de-usuarios")
        }}
      >
        Ver lista de usuarios
      </ButtonRegister>
    </Topcontainer>
  );
}

export default Home;
// navigate("/lista-de-usuarios")

// Swal.fire({
//             title: "Drag me!",
//             icon: "success",
//             draggable: true,
//           });
