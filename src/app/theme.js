import { createTheme } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
const theme = createTheme({
  palette: {
    typography: {
      fontFamily: ['GmarketSansMedium'],
    },
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
export default theme;
