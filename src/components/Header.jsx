import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="flex-row">
      <h1>
        Web Dev Circle <i className="fa-solid fa-circle-chevron-right"></i>
      </h1>

      {/* Show logout button only if user is logged in */}
      {user && (
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      )}
    </header>
  );
}

