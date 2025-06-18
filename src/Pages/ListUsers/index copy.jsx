import api from "../../Services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
//import { useId } from 'react';
import { ButtonRegister } from "../../Components/Button/styles.js";

import { TopBackgound } from "../../components/TopBackground/styles.js";
import {
  Topcontainer,
  Title,
  CardUsersMain,
  ContainerFilter,
  CardUsersChild,
  AvatarUsers,
  UserIconTrash,
  ContainerUsers,
  UserItem,
  HrUsers,
  BannerGround,
  BannerImg,
} from "./style";
import UserImage from "../../../src/assets/users.png";
import Trash from "../../../src/assets/trash.svg";
//import { createAvatar } from '@dicebear/core';
//import { Felix } from '@dicebear/collection';

// biblioteca para fazer navegar entre paginas

function ListUsers() {
  //const navigate = useNavigate();
  const [users, SetUsers] = useState([]);
  //const [deleteusers, SetDeleteUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      SetUsers(data);
    }

    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/create-users/${id}`);

    const updatedusers = users.filter((user) => user.id !== id);

    SetUsers(updatedusers);
  }

  return (
    <Topcontainer>
      <TopBackgound theme="page2">
        <img src={UserImage} alt="imagnes de usuarios" />
      </TopBackgound>

      <BannerGround>
         
        <BannerImg>
          <img
            src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix`}
          />
        </BannerImg>
         
      </BannerGround>

      <Title>Lista de Usuários Cadastrados</Title>
      <HrUsers>
        <hr></hr>
      </HrUsers>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsersChild key={user.id}>
            <AvatarUsers>
              <img
                src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}`}
              />
            </AvatarUsers>
            {/* <AvatarUsers src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}`} /> */}
            {/* < img src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}`} alt="avatar" /> */}
            <UserItem>
              <h5>Nome: {user.name}</h5>
              <h5>Email: {user.email}</h5>
              <h5>Idade: {user.age}</h5>
            </UserItem>
            <UserIconTrash
              src={Trash}
              onClick={() => {
                Swal.fire({
                  title: "Tem certeza?",
                  text: "Quer realmente deletar este usuário?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#d33",
                  confirmButtonText: "Sim, deletar!",
                  cancelButtonText: "Cancelar",
                  cancelButtonColor: "#3085d6",
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteUser(user.id).then(() => {
                      Swal.fire({
                        title: "Deletado com sucesso!",
                        icon: "success",
                        draggable: true,
                      });
                    });
                  }
                });
              }}
            />
          </CardUsersChild>
        ))}
      </ContainerUsers>

      {/* <ContainerFilter>
        <label htmlFor="searchInput">Pesquisar usuário: </label>
        <input type="text" id="searchInput" placeholder="Pesquisar usuário" />
      </ContainerFilter> */}

      <CardUsersMain></CardUsersMain>

      <ButtonRegister theme="primary" onClick={() => navigate("/")}>
        Voltar ao inicio
      </ButtonRegister>
    </Topcontainer>
  );
}

export default ListUsers;
