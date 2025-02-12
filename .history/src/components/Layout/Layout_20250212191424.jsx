import styles from './styles.module.scss';
const MainLayout = ({ children }) => {
    const { wrapLayout, container } = styles;
    return (
        <div className={wrapLayout}>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
