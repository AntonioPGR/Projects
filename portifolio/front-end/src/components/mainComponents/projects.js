import { useState, userEffect } from 'react'
import projectsRequest from '../../json/projectsInfo.json'

export default function ProjectSession(props){
   // titulo a ser exibido na parte superior da apresentação
   const title = props.info.title.main? props.info.title.main : "";
   // legenda a ser exibida a baixo do titulo em destaque
   const subtitle = props.info.title.subtitle? props.info.title.subtitle : "";

   return(
      <article id="projects">
         <div id="projectsTitleContent">
            <h1 id="projectsTitle"> {title} </h1>
            {subtitle? <p>{subtitle}</p> : "" }
         </div>
         <ProjectsDiv />
      </article>
   )
}

function ProjectsDiv(props){
   // INFO: usar após a construjçao do backend para substituir o import json
   // // variavel que guarda os projetos a serem exibidos
   // const [projects, setProjects] = useState({
   //    status: "loading",
   // })
   // // faz o request a api trazendo os projetos do banco de dados
   // const loadProjects = async () => {
   //    try{
   //       const request = await fetch("");
   //       const response = await json(request);

   //       setProjects({
   //          status: "loaded",
   //          projects: response
   //       })
   //    } catch(e) {
   //       setProjects({
   //          status: "error",
   //          error: Error(e)
   //       })
   //    }  
   // }
   // useState(()=>{
   //    loadProjects();
   // }, [])

   // apagar após a cnstrução do back-end
   const projects = {
      status: 'loaded',
      ...projectsRequest
   }

   return(
      <div>
         <ProjectsHeader languages={projects.languages} />
         <Projects pj={projects.projects} status={projects.status} />
      </div>
   )
}

function Projects(props){
   // guarda os projets na forma de objetos
   const projects = props.pj
   // status para definir a exibição
   const status = props.status

   const loadProjects = () => {
      return projects.map((key, index)=>{
         const project = projects[index];
         return(
            <article key={index}>
               <h2> {project.title} </h2>
               <p> {project.description} </p>
               <a href={project.link} target="_blank" >Visitar pagina do projeto</a>
            </article>
         )
      })
   }

   // retorna um status de carregando, erro ou secesso ao cliente dependendo do status da variavel projects
   switch(status){
      case 'loading':
         return(
            <div id="projectsConteiner">
               <div id="loadingProjectsDiv">

               </div>
            </div>
         )

      case "loaded":
         return(
            <div id="projectsConteiner" >
               {loadProjects()}
            </div>
         )

      default:
         return(
            <div id="projectsConteiner">
               <img alt="errorImage" src="" />
               <div id="errorInfo">
                  <p>Oops! Não foi possivel carregar os projetos desejados, casi deseje, <span>clique aqui </span> para tentar recarregar</p>
               </div>
            </div>
         )
   }
}

function ProjectsHeader(props){
   const languages = props.languages

   const loadLanguages = () => {
      return languages.map((key, index)=>{
         return (
            <button key={key} id={`${key}button`}>
               {key}
            </button>
         )
      })
   }

   return(
      <header>
         {loadLanguages()}
      </header>
   )
}