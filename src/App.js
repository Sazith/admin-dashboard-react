import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import Topbar from './scenes/global/Topbar'

const App = () => {
  const [theme, colorMode] = useMode()
  return (
        <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className='content'>
            <Topbar/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App