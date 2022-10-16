// Structure within which pages will be rendered when users not logged-in
//
import { useContext } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { AuthenticationContext } from "../hooks/AuthenticationContext";
import { TopNav } from "./TopNav";

const destinationsNotLoggedIn = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
];

export function NonsecuredLayout() {
  const [authState] = useContext(AuthenticationContext);
  const outlet = useOutlet();   // pages within route rendered inside this frame

  // If user logged in, bump to secure area
  if (authState.loggedIn) {
    return <Navigate to="/secure/oort" />;
  }

  return (
    <div>
      <TopNav options={destinationsNotLoggedIn} />
      {outlet}
    </div>
  )
}
