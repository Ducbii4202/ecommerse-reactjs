import './App.css';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';

const App = () => {
    return (
        <>
            <MainLayout>
                <Header />
                <Footer />
            </MainLayout>
        </>
    );
};

export default App;
