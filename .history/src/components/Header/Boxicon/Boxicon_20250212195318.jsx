import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;
    return (
        <div className={boxIcon}>
            <img src={fbIcon} alt='' />
        </div>
    );
};

export default BoxIcon;
