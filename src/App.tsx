import './App.css'
import { Center, MantineProvider, Title } from '@mantine/core'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
