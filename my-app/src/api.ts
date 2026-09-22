const API_URL = "http://localhost:3000";

export const api = async (path: string, method = "GET", body?: unknown) => { // ✅ unknown
  const headers: Record<string, string> = { "Content-Type": "application/json" }; // ✅

  const token = localStorage.getItem("token");
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message); // ✅ message
  return data;
};

