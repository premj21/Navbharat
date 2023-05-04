import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact.jsx'
import About from "./Components/About/About.jsx";
import Home from './Components/Home/Home.jsx'
import {Box} from '@chakra-ui/react'
function App() {
  return (
    <>
      <Navbar />
      <Box h='100vh' w="100vw" p={{base:"0",lg:"0 5rem"}} >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />} />
        </Routes>     
      </Box>
    </>
  );
}
export default App;