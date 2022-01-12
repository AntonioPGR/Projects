export default function RoadMap(props){
   // titulo a ser exibido na parte superior do roadMap
   const title = props.info.title.main? props.info.title.main : "";
   // legenda a ser exibida a baixo do titulo em destaque
   const subtitle = props.info.title.subtitle? props.info.title.subtitle : "";

   // guarda a timeline com os itens divididos em anos
   const timeline = props.info.timeline

   return(
      <article id="roadMap">
         <div id="RoadMapTitleContent">
            <h1 id="RoadMapTitle"> {title} </h1>
            {subtitle? <p id="RoadMapSubtitle">{subtitle}</p> : "" }
         </div>
         <div id="roadMapTimeline">
            <TimeLine timelineInfo={timeline} />
         </div>
      </article>
   )
}

function TimeLine(props){
   const timeline = props.timelineInfo

   // da o efeito de dropdown a div que aplicada
   const hideChildren = (conteinerKey, Complement='') => {
      const key = conteinerKey
      // caso haja, é o que vem depois da key no id
      const comp = Complement
      console.log(`${key}${comp}`)
      const conteiner = document.getElementById(`${key}${comp}`)
      const atualStyle = conteiner.style.display
      const arrow = document.getElementById(`${key}Direction`)
      
      switch(atualStyle){
         case 'none':
            conteiner.style.display = 'block'
            arrow.innerHTML = '&darr;'
            break;
         default:
            conteiner.style.display = 'none'
            arrow.innerHTML = '&uarr;'
      }
   
   }

   // carrega os anos da linha do tempo com o header de cada e o corpo, no corpo chama a função para carregar os itens
   const loadTimeLine = () => {
      // mapeia o obj retornando cada ano e suas informações
      return Object.keys(timeline).map((key, index)=>{
         // TL: time line
         return (
            <div key={key} id={`${key}TL`} className="yearTL">
               <header onClick={()=>hideChildren(key, 'Courses')} id={`${key}TLHeader`} className="yearTLHeader">
                  <p>
                     {key}
                     <span id={`${key}Direction`} className="DirectionTL"> &darr; </span>
                  </p>
               </header>
               <main id={`${key}Courses`} className="TLCoursesConteiner">
                  {loadCourses(key)}
               </main>
            </div>
         )
      })
   }

   // carrega os cursos presentes em cada ano
   const loadCourses = (key) => {
      const timelineYear = timeline[key]
      return Object.keys(timelineYear).map((key, index) => {
         const item = timelineYear[key]
         return (
            <article key={index}>
               <h1 onClick={()=>hideChildren(key, 'InfoConteiner')} >
                     {key}
                     <span id={`${key}Direction`} className="CourseName"> &darr; </span>
               </h1>
               <div id={`${key}InfoConteiner`}>
                  <ul>
                     {item.conclusion? <li>Conclusão: {item.conclusion}</li> : "" }
                     {item.hours? <li>Horas de curso: {item.hours}</li> : "" }
                     {item.local? <li>Instituição: {item.local}</li> : "" }
                     {item.description? <li>{item.description}</li> : "" }
                  </ul>
               </div>
            </article>
         )
      })
   }

   return(
      <div>
         {loadTimeLine()}
      </div>
   )
}
