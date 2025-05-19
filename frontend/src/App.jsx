import { useState } from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH='100vh' background={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
