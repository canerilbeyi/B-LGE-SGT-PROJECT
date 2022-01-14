import React from "react";
import { useGlobalContext } from "../context/context";
const UserCards = ({
  id,
  name,
  username,
  email,
  address: { street, city, suite },
}) => {
  const { openModalForEditing, openModalForDeleting } = useGlobalContext();
  return (
    <article className="card">
      <div
        className="person-info"
        onClick={() =>
          openModalForEditing(id, email, name, username, street, suite, city)
        }
      >
        <p>Name : {name}</p>
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <p>
          Adress : {street} / {suite} / {city}{" "}
        </p>
      </div>
      <div className="button-container">
        <button
          className="btn"
          onClick={() => {
            openModalForDeleting(id);
          }}
        >
          delete user
        </button>
        <button
          className="btn"
          onClick={() =>
            openModalForEditing(id, email, name, username, street, suite, city)
          }
        >
          edit user
        </button>
      </div>
    </article>
  );
};

export default UserCards;
