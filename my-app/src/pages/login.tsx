import { useState, type FormEvent } from "react";
import { api } from "../api";

// 👇 the prop App gives us
type Props = { onLogin: () => void };

const Login = ({ onLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data = await api("/users/login", "POST", { email, password });
      localStorage.setItem("token", data.token);
      onLogin(); // 👈 tell App: switch to "home"
    } catch (err) {
      setMessage((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Log in</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
      <p>{message}</p>
    </form>
  );
};

export default Login;