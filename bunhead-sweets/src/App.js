import Routes from './routes/Routes'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import lightTheme from './themes/lightTheme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Header></Header>
        <Routes></Routes>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
