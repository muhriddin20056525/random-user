import React from "react";

export default function UserItem({ first_name, last_name, email, avatar }) {
  return (
    <div className="user-item">
      <img src={avatar} alt={first_name} />
      <h3>
        {first_name} {last_name}
      </h3>
      <p>{email}</p>
    </div>
  );
}
