document.body.onload = (ev) => {

  const canvas = document.querySelector<HTMLCanvasElement>("canvas#snakeGameDisplay");
  if( !canvas || canvas === null ){
    window.alert("canvas can't be loaded")
    return
  }

  const ctx = canvas.getContext("2d");
  if(!ctx){
    window.alert("context can't be loaded")
    return
  }

  

}