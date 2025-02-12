import styles from './styles.module.scss';
const MyButton = () => {
    return (
        <div>
            <button className={styles.btn}>M</button>
            <button className={styles.btn}>X</button>
        </div>
    );
};

export default MyButton;
