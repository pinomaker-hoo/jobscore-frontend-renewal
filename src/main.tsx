// ** React Imports
import ReactDOM from 'react-dom/client'

// ** Components Imports
import App from './App'
import UseLayout from './layouts'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './store'

// ** Style Imports
import '@/style/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

// ** Other Imports
import { isMobile } from 'react-device-detect'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

declare global {
  interface Window {
    Kakao: any
  }
}

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <div className={isMobile ? '' : 'container'}>
        <div className={isMobile ? '' : 'content'}>
          <App />
        </div>
      </div>
    </ThemeProvider>
  </Provider>,
)
