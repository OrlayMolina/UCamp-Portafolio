import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";

export default function Inicio() {
    return (
        <>
            <Header />
            <Jumbotron />
            <Projects />
            <About />
            <Services />
            <Footer />
        </>
    )
}
