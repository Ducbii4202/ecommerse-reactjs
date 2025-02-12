import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';

const Header = () => {
    const { containerBoxIcon, containerMenu } = styles;
    return (
        <div>
            <div>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map(item => {
                        // eslint-disable-next-line react/jsx-key
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.map(item => {
                        return <Menu />;
                    })}
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Header;
