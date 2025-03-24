import './App.css';
// import Footer from '@components/Footer/Footer';

import MainLayout from '@components/Layout/Layout';
import Header from './components/Header/Header';

const App = () => {
    return (
        <>
            <MainLayout>
                <Header />
                {/* Content
                <Footer /> */}
            </MainLayout>
        </>
    );
};

export default App;
