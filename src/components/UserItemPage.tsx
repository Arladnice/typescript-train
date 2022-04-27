import React, { FC } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams();
	const history = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }

	return (
    <div>
      <button onClick={() => history("/users")}>Back</button>
      <h1>Страница пользователя {user?.name} </h1>
      <div>{user?.email}</div> 
      <div>{user?.address.city}</div>
    </div>
  );
}

export default UserItemPage