import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContainer}> frase do componente 1</p>
            <p className={styles.fraseContainer}> frase do componente 2</p>
        </div>
    )
}

export default Frase;