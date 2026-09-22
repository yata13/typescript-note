import { useState } from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import Users from "./pages/Users";

type Page = "login" | "signup" | "home" | "users";

export default function App() {
  // if a token is already saved, start on "home"
  const [page, setPage] = useState<Page>(
    localStorage.getItem("token") ? "home" : "login"
  );

  const loggedIn = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  return (
    <>
      <nav>
        {loggedIn ? (
          <>
            <button onClick={() => setPage("home")}>My account</button>
            <button onClick={() => setPage("users")}>All users</button>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <button onClick={() => setPage("login")}>Log in</button>
            <button onClick={() => setPage("signup")}>Sign up</button>
          </>
        )}
      </nav>

      {/* 👇 each page gets the function it needs as a prop */}
      {page === "login" && <Login onLogin={() => setPage("home")} />}
      {page === "signup" && <Signup />}
      {page === "home" && <Home onDeleted={logout} />}
      {page === "users" && <Users />}
    </>
  );
}