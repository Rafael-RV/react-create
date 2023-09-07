import { Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar'
import { About } from './routes/About';
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { Blog } from "./routes/blog";
import { Services } from "./routes/services";
import { Login } from "./routes/login";


export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/login' element={<Login />}></Route>
        {/* <Route path='/*' element={<Navigate to='/' />}></Route>  */}
        

      </Routes>
    </>
  );
}

