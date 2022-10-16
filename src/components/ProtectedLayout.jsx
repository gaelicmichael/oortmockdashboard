import { useContext } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { AuthenticationContext } from "../hooks/AuthenticationContext";
import { TopNav } from "./TopNav";

const destinations = [
];

export function ProtectedLayout() {
  const [authState] = useContext(AuthenticationContext);
  const outlet = useOutlet();   // pages within route rendered inside this frame

  // If user logged in, don’t allow getting to these pages
  if (!authState.loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <TopNav options={destinations} />
      {outlet}
    </div>
  )
};
