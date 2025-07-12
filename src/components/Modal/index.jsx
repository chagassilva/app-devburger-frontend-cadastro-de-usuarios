//import UserImage from "../../../src/assets/users.png";

function Modal() {
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
      </>
  )
}

export default Modal;
