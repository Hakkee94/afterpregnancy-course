import logo from './logo.svg';
import './App.css';
import NewLife from "./components/NewLife";
import KatyaRecovery from "./components/KatyaRecovery";
import WhoGaveBirth from "./components/WhoGaveBirth";
import NowYouMom from "./components/NowYouMom";
import MentalProblems from "./components/MentalProblems";
import Delay from "./components/Delay";
import HappyBaby from "./components/HappyBaby";
import SomethingBigger from "./components/SomethingBigger";
import PresentsForYou from "./components/PresentsForYou";
import BackToFit from "./components/BackToFit";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <NewLife/>
            <KatyaRecovery/>
            <WhoGaveBirth/>
            <NowYouMom/>
            <MentalProblems/>
            <Delay/>
            <HappyBaby/>
            <SomethingBigger/>
            <PresentsForYou/>
            <BackToFit/>
            <Footer/>
        </div>
    );
}

export default App;
