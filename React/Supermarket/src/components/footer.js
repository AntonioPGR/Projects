import '../css/footer.css';

export default function Footer(props){

    // exibe as ancoras passadas como children e o nome do produtor do código no rodapé da pagina
    return (
        <footer>
            <nav id="links">
                {props.children}
            </nav>
            <p id="credits">Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/AntonioPGR">Antonio Pacheco</a></p>
        </footer>
    )
}