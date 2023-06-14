import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css";

const SobreMim = () => {
    return(
            <PostModelo 
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Celso
            </h3>
            <img 
                src="https://github.com/celsoTaliatelli.png" 
                alt="Foto de Celso"
                className={styles.fotoSobreMim}
                />
            <p className={styles.paragrafo}>...</p>
            </PostModelo>
    );
}

export default SobreMim