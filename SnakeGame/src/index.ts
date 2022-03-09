document.body.onload = (ev:Event) => {
  
  const canvas = document.querySelector<HTMLCanvasElement>("canvas#gameCanvas");

  if(!canvas){
    window.alert("não foi possivel carregar o jogo!")
  }

}