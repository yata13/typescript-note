import Signup from "./pages/signup";
import Login from "./pages/login";
import { useState } from "react";

export default function App() {

  const [page, setPage] = useState<"login"|"signup">("login");

  return(
  <>

    <button onClick={() => setPage('signup')}>Signup</button>
    <button onClick={() => setPage('login')}>login</button>

    {page === 'login'? <Login/> : <Signup/>}
    
  </>)
}