import { ShoppingCart, Search, Heart } from "lucide-react";

const Product = ({ item }) => {
	return (
		<div className="group flex-1 m-2 min-w-[280px] h-[350px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
			<div className="w-48 h-48 rounded-full bg-white absolute opacity-80 group-hover:scale-110 transition-transform duration-500" />
			<img
				src={item.img}
				alt={item.title || "Product"}
				className="h-3/4 z-10 object-contain group-hover:scale-105 transition-transform duration-500"
			/>
			<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
				<button
					className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-200 transform hover:scale-110 shadow-lg"
					aria-label="Add to cart"
				>
					<ShoppingCart size={20} />
				</button>
				<button
					className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-200 transform hover:scale-110 shadow-lg"
					aria-label="Quick view"
				>
					<Search size={20} />
				</button>
				<button
					className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110 shadow-lg"
					aria-label="Add to wishlist"
				>
					<Heart size={20} />
				</button>
			</div>
		</div>
	);
};

export default Product;
