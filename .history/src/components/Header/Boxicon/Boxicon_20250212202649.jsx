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
            case 'ig':
                return igIcon;
            case 'ytb':
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
