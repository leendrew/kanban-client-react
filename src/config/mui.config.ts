import { createTheme } from '@mui/material/styles';

export const muiConfig = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});
