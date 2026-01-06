const CategoryItem = ({ item }) => {
	return (
		<div className="relative flex-1 m-1 h-[70vh] sm:h-[50vh] overflow-hidden group cursor-pointer">
			<img
				src={item.img}
				alt={item.title}
				className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
			/>

			<div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center z-10">
				<h1 className="text-white text-2xl sm:text-3xl font-bold mb-5 text-center px-4">
					{item.title}
				</h1>
				<button className="px-6 py-3 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wide">
					SHOP NOW
				</button>
			</div>
		</div>
	);
};

export default CategoryItem;
