import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Home from "./pages/Home";

const App = () => {
	return (
		<div>
			<Announcement />
			<Home />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
		</div>
	);
};

export default App;
