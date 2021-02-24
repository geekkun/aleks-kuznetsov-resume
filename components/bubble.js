import styles from "../styles/Bubble.module.css";

export default function Bubble(name, big=false, href='#',) {
    if (name.length > 6) {
        big = true
    }

    if (big) {
        return <a href={href} className={styles.bubble_big}>
            <h3>
                {name}
            </h3>
        </a>
    }
    else {
        return <a href={href} className={styles.bubble}>
            <h3>
                {name}
            </h3>
        </a>
    }
}