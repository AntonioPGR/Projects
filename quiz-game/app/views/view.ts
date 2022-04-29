export abstract class View<T>{

  /**
   * Creates a new instance of view class
   * @param renderLocal a HTMLElement where the view will be render
   */
  constructor(
    private renderLocal : HTMLElement
  ){}

  /**
   * renderiza o template do elemento na classe mostrada
   * @param informations informações a serem usadas no template
   */
  public render(informations:T){

    console.log('render')
    const local = this.renderLocal;
    const template = this.template(informations)
    local.innerHTML = template;

  } 

  /**
   * Retorna o código html do template
   * @param model informações a serem usadas para a criação do template
   */
  protected abstract template(model:T) : string

}