import { createMuiTheme } from '@material-ui/core/styles';

import { overrides } from './overrides';

// TODO apply all styles here so we can use them in material-ui components easily without
// TODO having to use css files
const theme = createMuiTheme({
  overrides,
});

export default theme;
