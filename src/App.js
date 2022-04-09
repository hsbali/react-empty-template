import Routes from './routes';

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

import theme from './theme'

import './styles/global.scss'

export default function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
            <Routes />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
