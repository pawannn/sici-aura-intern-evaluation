import './style/app.scss'
import Header from './components/Header';
import Introduction from './components/introduction/Introduction';
import Jobs from './components/Jobs';
import Footer from './components/Footer';

const App = () => {
    return(
        <div className = "container">
            <Header />
            <Introduction />
            <Jobs />
            <Footer />
        </div>
    )
}

export default App;