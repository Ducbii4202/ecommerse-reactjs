import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';

const BoxIcon = ({ type, href }) => {
    return (
        <div className={boxIcon}>
            <img src={fbIcon} alt={type} />
        </div>
    );
};

export default BoxIcon;
