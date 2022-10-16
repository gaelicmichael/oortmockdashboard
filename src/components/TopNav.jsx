import React, { useContext } from "react";
import { Grommet, Anchor, Button, Header, Nav } from 'grommet';
import { AuthenticationContext } from "../hooks/AuthenticationContext";

export function TopNav({ options }) {
  const [authState, authDispatch] = useContext(AuthenticationContext);

  function logOut() {
    authDispatch({ type: 'LOGOUT' });
  } // logOut()

  return (
    <Grommet>
        <Header background="dark-1" pad="small">
            <Nav direction="row">
            { options.map((option) => (
                <Anchor href={option.href} label={option.label} key={option.label} />
            ))}
            { authState.loggedIn &&
                <Button size="small" label="Logout" onClick={logOut} />
            }
            </Nav>
        </Header>
    </Grommet>
  )
}
