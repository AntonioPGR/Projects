import PageIntro from './mainComponents/pageIntro.js';
import Presentetion from './mainComponents/presentation.js';
import RoadMap from './mainComponents/roadMap.js';
import Projects from './mainComponents/projects.js'


export default function Main(props){
   // determina o que será passado como parâmetro através de se existe ou não
   // exatamente igual a de sua classe superior, o que muda é o objeto o qual será verificado
   const passInfo = (name) => {
      return props.info[name]? props.info[name] : {} 
   }

   return(
      <main>
         <PageIntro info={ passInfo("passIntro") } />
         <Presentetion info={ passInfo("presentation") } />
         <RoadMap info={ passInfo("roadMap") } />
         <Projects info={ passInfo("projects") } />
      </main>
   )
}