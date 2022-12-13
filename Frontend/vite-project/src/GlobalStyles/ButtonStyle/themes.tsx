import { createTheme } from '@mui/material/styles';
import { withTheme } from 'styled-components';

const buttonTheme = createTheme ({
    palette: {
      primary: {
        main: '#E9932E',

      },
      secondary: {
        main: '#ffffff'
      }
    },
    typography: {
        fontFamily: [
            'Outfit'
        ].join(','),
        fontSize: 16,
    }
  });


  export default buttonTheme