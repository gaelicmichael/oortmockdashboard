import { PageTemplate } from "../components/PageTemplate";
import { PageHeader } from "grommet";

export function HomePage() {
  return (
  <PageTemplate>
    <PageHeader title="Home" subtitle="Some explanation of the glories of Oort-land" size="small" />
    <p>Code Sample by Michael Newton</p>
  </PageTemplate>
  )
}
