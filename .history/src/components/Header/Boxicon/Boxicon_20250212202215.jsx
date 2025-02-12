import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import igIcon from '@icons/svgs/igIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;

    const handleRenderIcon = () => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'fb':
                return fbIcon;
            case 'fb':
                return fbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={fbIcon} alt={type} />
        </div>
    );
};

export default BoxIcon;
