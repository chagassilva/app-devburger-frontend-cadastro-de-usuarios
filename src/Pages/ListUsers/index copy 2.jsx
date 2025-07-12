import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ButtonRegister } from "../../components/Button/styles.js";
import { TopBackgound } from "../../components/TopBackground/styles.js";
import { AddressBookTabsIcon, EnvelopeIcon, NumberSquareOneIcon, UserCheckIcon } from "@phosphor-icons/react";


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
  BannerUsers,
  BannerAvatarUsers,
  AvatarItems,
  UserEdit,
} from "./style";

import Trash from "../../../src/assets/lixeira-xmark.png";
import Edit from "../../../src/assets/edit.png";
import {
  BannerEditAvatarUsers,
  Btncanceledituser,
  Btnsaveedituser,
  InputEditUsers,
  ModalStyled,
  ModalStyledalStyle,
} from "../../components/Modal/styles.js";

function ListUsers() {
  const [users, SetUsers] = useState([]);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      SetUsers(data);
    }

    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/create-users/${id}`);
    const deletedUsers = users.filter((user) => user.id !== id);
    SetUsers(deletedUsers);
  }

  function openEditModal(user) {
    setEditingUser(user);
    setIsEditing(true);
  }

  async function handleUpdateUser() {
    try {
      const { data } = await api.put(
        `/create-users/${editingUser.id}`,
        editingUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? data : user
      );

      SetUsers(updatedUsers);
      setIsEditing(false);
      setEditingUser(null);

      Swal.fire({
        title: "Atualizado com sucesso!",
        icon: "success",
      });
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      Swal.fire({
        title: "Erro ao atualizar",
        icon: "error",
      });
    }
  }

  return (
    <>
      {/* Modal de edição */}
      {isEditing && editingUser && (
        <ModalStyledalStyle>
          <ModalStyled>
            <h3>Editar Usuário</h3>
              <BannerEditAvatarUsers key={isEditing.id}>
                <img
                  src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${isEditing.id}`}
                />             
              </BannerEditAvatarUsers>

            <label className="labelusers">Nome:  <UserCheckIcon size={20} color="#ffffff" /></label>
            <InputEditUsers
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
            />

            <label className="labelusers">Email: <EnvelopeIcon size={20} color="#ffffff" /></label>
            <InputEditUsers
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
            />

            <label className="labelusers">Idade: <NumberSquareOneIcon size={20} color="#ffffff" /></label>
            <InputEditUsers
              type="number"
              value={editingUser.age}
              onChange={(e) =>
                setEditingUser({ ...editingUser, age: Number(e.target.value) })
              }
            />

            <label className="labelusers">Endereço: <AddressBookTabsIcon size={20} color="#ffffff" /></label>
            <InputEditUsers
              type="text"
              value={editingUser.address}
              onChange={(e) =>
                setEditingUser({ ...editingUser, address: e.target.value })
              }
            />

            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <Btnsaveedituser onClick={handleUpdateUser}>Salvar edição</Btnsaveedituser>
              <Btncanceledituser onClick={() => setIsEditing(false)}>Cancelar edição</Btncanceledituser>
            </div>
          </ModalStyled>
        </ModalStyledalStyle>
      )}

      <Topcontainer>
        <TopBackgound theme="page2">
          <BannerUsers>
            {users.map((user) => (
              <BannerAvatarUsers key={user.id}>
                <img
                  src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}`}
                />
                <AvatarItems>
                  <p>{user.name}</p>
                </AvatarItems>
              </BannerAvatarUsers>
            ))}
          </BannerUsers>
        </TopBackgound>

        <Title>Lista de Usuários Cadastrados</Title>
        <HrUsers>
          <hr />
        </HrUsers>

        <ContainerUsers>
          {users.map((user) => (
            <CardUsersChild key={user.id}>
              <AvatarUsers>
                <img
                  src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}`}
                />
              </AvatarUsers>
              <UserItem>
                <h5>Nome: {user.name}</h5>
                <h5>Email: {user.email}</h5>
                <h5>Idade: {user.age}</h5>
                <h5>Endereço: {user.address}</h5>
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

              <UserEdit src={Edit} onClick={() => openEditModal(user)} />
            </CardUsersChild>
          ))}
        </ContainerUsers>

        <CardUsersMain />

        <ButtonRegister theme="primary" onClick={() => navigate("/")}>
          Voltar ao início
        </ButtonRegister>
      </Topcontainer>
    </>
  );
}

export default ListUsers;
