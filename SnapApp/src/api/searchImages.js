import Mountains from '../json/mountains';
import Beaches from '../json/beaches';
import Paints from '../json/paints';

/*
função parada até achar uma api
async function fecthApi(q){
   const query = q;

   const jsonresults = await fetch(`https://www.flickr.com/services/rest/?method=flickr.test.echo&name=${query}`);
   const response = jsonresults.body;
   console.log(response)
   return response;
}
*/

async function getImages(sq){
   switch(sq.toLowerCase()){
      case "mountains":
         return Mountains;
      case "beachs":
         return Beaches;
      case "paints":
         return Paints;
      default:
         return {
            err: "não foi possivel encontrar imagens relacionadas a sua pesquisa"
         }
   }
}

export { getImages };