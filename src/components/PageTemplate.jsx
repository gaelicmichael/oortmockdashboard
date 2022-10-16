// Provides basic outer structure for generic page
//
import { Box } from 'grommet';

export function PageTemplate(props) {
  return (
    <Box pad="small">
        {props.title}
        {props.children}
    </Box>
  )
};
