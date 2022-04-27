import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoItemPage from './components/TodoItemPage';
import TodosPage from "./components/TodosPage";
import UserItemPage from './components/UserItemPage';
import UserPage from "./components/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to={"/users"}>Пользователи</NavLink>
        <NavLink to={"/todos"}>Список дел</NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UserPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/user/:id"} element={<UserItemPage />} />
        <Route path={"/todos/:id"} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
