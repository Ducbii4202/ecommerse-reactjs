import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/logo1.png';

const Header = () => {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map(item => {
                        // eslint-disable-next-line react/jsx-key
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map(item => {
                        // eslint-disable-next-line react/jsx-key
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
            <div>
                <img
                    src={Logo}
                    alt='Logo'
                    style={{
                        width: '153px',
                        height: '53px'
                    }}
                />
            </div>
            <div>
                <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.place).map(item => {
                        // eslint-disable-next-line react/jsx-key
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
