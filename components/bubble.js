import styles from "../styles/Bubble.module.css";

export default function Bubble(name, href='#') {

    return <a href={href} className={styles.bubble}>
        <h3>
            {name}
        </h3>
    </a>
}