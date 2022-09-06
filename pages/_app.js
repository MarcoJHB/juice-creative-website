import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={'app-container'}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
