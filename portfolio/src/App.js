import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<About />
			<Project />
			<Contact />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
