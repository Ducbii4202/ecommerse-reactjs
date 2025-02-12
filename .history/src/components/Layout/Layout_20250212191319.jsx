import styles from './styles.module.scss';
const MainLayout = ({ children }) => {
    return (
        <div className='main-layout'>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
