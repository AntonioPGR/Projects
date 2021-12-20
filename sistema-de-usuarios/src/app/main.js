import { Routes, Route } from "react-router-dom";
import Users from "./showUsers";


export default function Main(props){
   const paths = {
      'users': {
         path: "/",
         element: <Users />,
      }
   }

   const renderPaths = ()=>{
      return Object.keys(paths).map((key, index)=>{
         return <Route path={paths[key].path} element={paths[key].element} key={index}/>
      })
   }

   return(
      <main>
         <Routes>
            {renderPaths()}
         </Routes>
      </main>
   )
}