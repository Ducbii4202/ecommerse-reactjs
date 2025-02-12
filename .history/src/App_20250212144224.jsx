import './App.css';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import MyButton from './components/Button/Button';

const App = () => {
    return (
        <>
            <MainLayout>
                {/* <Header />
                Content 
                <Footer /> */}
                <MyButton />
            </MainLayout>
        </>
    );
};

export default App;
