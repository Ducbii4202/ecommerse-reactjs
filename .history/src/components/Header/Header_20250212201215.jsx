import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon } from './constant';

const Header = () => {
    return (
        <div>
            <div>
                <div>
                    {dataBoxIcon.map(item => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Header;
