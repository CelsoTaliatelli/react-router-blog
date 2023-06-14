import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png"

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Texto de boas vindas
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} alt=""
                    aria-hidden="true"
                ></img>
                <img 
                    className={styles.minhaFoto} 
                    src="https://github.com/celsoTaliatelli.png"
                    alt="Foto do Celso Henrique Taliatelli"
                ></img>
            </div>
        </div>
    );
}

export default Banner;

