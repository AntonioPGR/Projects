import PersonalPhoto from "../../assets/img/personalPhotoTeste.jpg";

export default function Presentation(props){
   // titulo a ser exibido na parte superior da apresentação
   const title = props.info.title.main? props.info.title.main : "";
   // legenda a ser exibida a baixo do titulo em destaque
   const subtitle = props.info.title.subtitle? props.info.title.subtitle : "";

   // guarda url da imagem que será exibida como 'foto de perfil'
   //INFO: mudar para props.info.personalImage.url quando criar o backend
   const personalPhotoUrl = PersonalPhoto;

   // guarda o component alt da foto pessoal
   const personalPhotoAlt = props.info.personalImage.alt

   // paragrafós do texto de apresentação
   const paragrafs = props.info.presentationParagrafs

   const loadParagrafs = () => {
      paragrafs.map((key, index)=>{
         return (
            <p key={index} className="presentationParagraf">
               {paragrafs[index]}
            </p>
         )
      })
   }

   return(
      <article id="presentation">
         <div id="presentationImage">
            <img src='' alt={personalPhotoAlt} />
         </div>
         <div id="presentationText">
            <div id="presentationTileContent">
               <h1 id="presentationTitle"> {title} </h1>
               {subtitle? <p>{subtitle}</p> : "" }
            </div>
            <div id="presentationParagrafs" className="paragrafsConteiner">
               {loadParagrafs()}
            </div>
         </div>
      </article>
   )
}