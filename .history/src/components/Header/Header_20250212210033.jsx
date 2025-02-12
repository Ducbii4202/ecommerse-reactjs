import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';

const Header = () => {
    const { containerBoxIcon, containerMenu, containerHeader } = styles;
    return (
        <div className={containerHeader}>
            <div>
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
            <div>Logo</div>
            <div>Khoi ben phai</div>
        </div>
    );
};

export default Header;
