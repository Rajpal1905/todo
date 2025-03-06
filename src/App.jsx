import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { CreateTodoPage } from "./pages/CreateTodoPage"
import { MyTodoList } from "./pages/MyTodoList"


function App() {

  return (
   <div className=" max-w-[1280px] mx-auto">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/create-todo" element = {<CreateTodoPage/>}/>
        <Route path="/mytodo" element = {<MyTodoList/>}/>

        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element = {<RegisterPage/>}/>
      </Routes>

   </div>
  )
}

export default App
