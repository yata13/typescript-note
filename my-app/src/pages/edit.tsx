import { useEffect, useState, type FormEvent } from "react";
import { api } from "../api";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<number | null>(null);

  // Get current user
  useEffect(() => {
    const getMe = async () => {
      try {
        const me = await api("/users/me", "GET");

        setName(me.name);
        setEmail(me.email);
        setUserId(me.id);
      } catch (err) {
        setMessage((err as Error).message);
      }
    };

    getMe();
  }, []);

  // Update user
  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    if (userId === null) return;

    try {
      await api(`/users/${userId}`, "PUT", {
        name,
        email,
        password,
      });

      setMessage("User updated successfully");
    } catch (err) {
      setMessage((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>

      <p>{message}</p>
    </form>
  );
};

export default Edit;
