import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

import { createGlobalStyle } from 'styled-components'

const DevStyle = createGlobalStyle`
body {
  background-color: #E5E5E5;
}
`

function App() {
  return (
    <BrowserRouter>
      <DevStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
