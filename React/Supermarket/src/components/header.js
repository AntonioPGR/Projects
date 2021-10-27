import '../css/header.css';

export default function Header(){
    // retorna o cabeçalho da pagina
    return(
        <header id="page_header">
            <div id="logo_conteiner">
                <picture>
                    <img src="./img/original-logo.png" alt="logo do site" width="50px" height="50px"/>
                </picture>
            </div>
            <h1 id="supermarket_name">Supermarket Name</h1>
        </header>
    )
}