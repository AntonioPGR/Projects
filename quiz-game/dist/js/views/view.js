export class View {
    /**
     * Creates a new instance of view class
     * @param renderLocal a HTMLElement where the view will be render
     */
    constructor(renderLocal) {
        this.renderLocal = renderLocal;
    }
    /**
     * renderiza o template do elemento na classe mostrada
     * @param informations informações a serem usadas no template
     */
    render(informations) {
        const local = this.renderLocal;
        const template = this.template(informations);
        local.innerHTML = template;
    }
}
