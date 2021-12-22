import { Routes, Route } from "react-router-dom";
import ShowUsers from "./showUsers";
import CreateUsers from "./createUsers";


export default function Main(props){
   const paths = {
      'ShowUsers': {
         path: "/",
         element: <ShowUsers />,
      },
      'createUsers': {
         path: "/create-user",
         element: <CreateUsers />,
      },
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