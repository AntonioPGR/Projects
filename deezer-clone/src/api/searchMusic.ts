import console from "console";


export function searchForMusic(qr:string):Promise<any>{

  const searchQuery = qr;
  const url = `https://api.deezer.com/search?q=track:'${searchQuery}'`;

  return fetch(url);
}