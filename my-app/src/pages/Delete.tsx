import { useEffect, useState } from "react";
import { api } from "../api";

type Props = { onDeleted: () => void };

const Delete = ({ onDeleted }: Props) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // get my id once, when the page opens
  useEffect(() => {
    const loadMe = async () => {
      try {
        const data = await api("/users/me");
        setUserId(data.id);
      } catch (err) {
        setMessage((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadMe();
  }, []);

  const handleDelete = async () => {
    if (userId === null) return;
    if (!window.confirm("Delete your account forever?")) return;

    try {
      await api(`/users/${userId}`, "DELETE");
      onDeleted(); // 👈 App's logout: removes the token + goes to "login"
    } catch (err) {
      setMessage((err as Error).message);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleDelete} disabled={loading}>
        Delete account
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Delete;