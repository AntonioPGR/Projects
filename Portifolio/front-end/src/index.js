import { React, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import pageInfoJson from './json/pageInfo.json'

import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

function App(){
   // INFO: QUANDO CRIAR O BACKEND, TROCAR STATUS DE "loaded" PARA "created" e remover o json importado
   // guarda o json com as informações a serem exibidas pela pagina
   const [pageInfo, setPageInfo] = useState({
      status: "loaded",
      ...pageInfoJson
   })

   /* Código comentado pois como ainda não tem o backend, o JSON vem pelo import da linha 4
   // assim que a pagina carregar faz o request das informações a seren exibidas
   useEffect(async ()=>{

      // muda o status do json para loading
      setPageInfo({ 
         status: "loading"
      })

      // faz o request ao json de informações
      try{
         const request = await fetch("./json/pageInfo.json");
         console.log(request)
         const response = await request.json();

         // seta um status de carregado e adiciona as informações obtidas
         setPageInfo({
            status: "loaded",
            ...response,
         });
         console.log(response);

      } catch (e) {
         // seta um status de erro e adiciona o erro ocorrido ao json
         setPageInfo({
            status: "failed",
            error: Error(e),
         });
         console.log(`Error ${e}`);

      }

   }, [])
   */

   // determina o que será passado como parâmetro através de se existe ou não
   const passInfo = (name) => {
      return pageInfo[name]? pageInfo[name] : {} 
   }

   return(
      <BrowserRouter>
         <div id="reactApp">
            {/* renderiza os principais componentes da pagina passando ou suas informações de exibição ou um objeto vazio */}
            <Header info={passInfo("header")} />
            <Main info={passInfo("main")} />
            <Footer info={passInfo("footer")} />
         </div>
      </BrowserRouter>
   )
}

ReactDOM.render(
   <App />,
   document.querySelector("#root")
)