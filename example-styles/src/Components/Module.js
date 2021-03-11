import styles from './Module.module.scss';

function Module(props){
    return(
        <div className={styles.Module}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur vehicula quam, a tincidunt erat porta nec.</p>
            <ul className={styles.list}>
                <li className={styles.item}>Donec malesuada venenatis tellus in ultricies.</li>
                <li className={styles.item}>Nullam suscipit nisl odio, vitae consequat purus dapibus vel.</li>
                <li className={styles.item}>Fusce sem elit, iaculis id posuere sed, fringilla vel metus.</li>
            </ul>
        </div>
    )
}

export default Module;