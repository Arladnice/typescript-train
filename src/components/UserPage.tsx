import React, { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";
import UserItem from "./UserItem";
import { IUser } from "../types/types";
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
	const history = useNavigate()
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => history("/user/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
