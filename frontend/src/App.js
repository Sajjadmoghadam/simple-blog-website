import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginRegisterPage from "./Pages/LoginRegister";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="/login-register" element={token?<Navigate to="/" />:<LoginRegisterPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>  
  );
}

export default App;