import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { login } = useContext(UserContext); // get login function from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    login(username); // call login from context
  };

  return (
    <div className="login-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to Your Blog</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
