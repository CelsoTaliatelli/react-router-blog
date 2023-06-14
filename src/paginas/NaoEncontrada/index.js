import styles from "./NaoEncontrado.module.css";
import erro404 from "../../assets/erro_404.png";
import BotaoPrincipal from "../../componentes/BotaoPrincipal";
import { useNavigate } from "react-router";

const NaoEncontrada = () => {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}></span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Agurade uns instantes e recarregue a página, ou volte para página inicial.
                </p>
                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>{/*-1 retorna para pagina anterior "/" retorna para pagina inicial*/}
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>
                <img 
                    className={styles.imagemCachorro} 
                    src={erro404}
                    alt="cachorro de oculos vestido com humano"
                />
            </div>
            <div className={ styles.espacoEmBranco }></div>
        </>
        
    );
}

export default NaoEncontrada;