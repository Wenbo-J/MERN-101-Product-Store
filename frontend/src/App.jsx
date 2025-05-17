import { useState } from 'react'
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH='100vh'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
