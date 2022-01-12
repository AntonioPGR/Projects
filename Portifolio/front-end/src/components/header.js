import '../assets/css/header.css';

export default function Header(props){
   return(
      <header id="pageHeader">
         <div id="supBar" className="mirrorEffect">
            <div id="hamburguerMenu">
               <div className="hamburguerMenuBar"></div>
               <div className="hamburguerMenuBar"></div>
               <div className="hamburguerMenuBar"></div>
            </div>
            <nav id="headerNavMenu">
               <a className="navMenuLink" target="" href="" >Apresentação</a>
               <a className="navMenuLink" target="" href="" >Linha do tempo</a>
               <a className="navMenuLink" target="" href="" >Projetos</a>
            </nav>
         </div>
         <article id="pageIntro" className="mirrorEffect">
            <h1 className="pageIntroText" id="pageIntroTitle">
               Antonio Pacheco
            </h1>
            <h2 className="pageIntroText" id="pageIntroSubtitle" >
               front-end developer
            </h2>
         </article>
      </header>
   )
}