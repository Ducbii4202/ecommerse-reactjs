import styles from '../styles.module.scss';
import { ReactComponent as FbIcon } from '@icons/svgs/fbIcon.svg';

const BoxIcon = ({ type, href }) => {
    return (
        <div className={styles.boxIcon}>
            <FbIcon />
        </div>
    );
};

export default BoxIcon;
