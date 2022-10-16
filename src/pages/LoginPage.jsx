import { React, useState, useContext } from "react";
import { PageTemplate } from "../components/PageTemplate";
import { PageHeader, Box, Button, Form, FormField, TextInput } from 'grommet';
import { AuthenticationContext } from "../hooks/AuthenticationContext";

export function LoginPage() {
  const [authState, authDispatch] = useContext(AuthenticationContext);
  // Values in form
  const [values, setValues] = useState({ name: '', password: '' });

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
        name: data.get("name"),
        password: data.get("password")
      };
    authDispatch({ type: 'TRY_LOGIN', payload: loginData });
  }

  return (
    <PageTemplate>
      <PageHeader title="Login" subtitle="Please provide your ID and password to enter Oort-land" size="small" />
      <Box fill align="center" justify="center">
        <p>{authState.logFeedback}</p>
        <Box width="medium">
          <Form value={values} onChange={(nextValues) => setValues(nextValues)} onSubmit={handleSubmit}>
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" />
            </FormField>
            <FormField label="Password" name="password" required>
              <TextInput name="password" type="password" />
            </FormField>
            <Button type="submit" label="Login" primary />
          </Form>
        </Box>
      </Box>
    </PageTemplate>
  )
}
