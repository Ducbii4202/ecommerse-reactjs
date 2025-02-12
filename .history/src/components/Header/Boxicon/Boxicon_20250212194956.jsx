import styles from '../styles.module.scss';

const Boxicon = ({ type, href }) => {
    const { boxIcon } = styles;
    return <div className={boxIcon}>{type}</div>;
};

export default Boxicon;
