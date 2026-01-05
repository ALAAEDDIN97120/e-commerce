import { assets } from "../assets/assets";

const Navbar = () => {
	return (
		<nav className="h-[60px] border-b">
			<div className="px-3 sm:px-5 py-2 flex items-center justify-between h-full gap-2 sm:gap-4">
				{/* Language & Search */}
				<div className="flex items-center gap-2 sm:gap-3">
					<button className="text-xs sm:text-sm hover:text-gray-600 transition-colors">
						EN
					</button>
					<div className="flex items-center border border-gray-300 rounded px-2 sm:px-3 py-1 gap-1 sm:gap-2">
						<img src={assets.search_icon} alt="Search" className="w-4 h-4" />
						<input
							type="text"
							placeholder="Search..."
							className="text-xs sm:text-sm outline-none w-20 sm:w-32 md:w-40"
						/>
					</div>
				</div>

				{/* Logo */}
				<div className="flex-shrink-0">
					<h1 className="font-bold text-base sm:text-xl">ALADINN.</h1>
				</div>

				{/* Auth & Cart */}
				<div className="flex items-center gap-2 sm:gap-4 md:gap-6">
					<button className="hidden sm:block text-xs sm:text-sm hover:text-gray-600 transition-colors">
						Registration
					</button>
					<button className="text-xs sm:text-sm hover:text-gray-600 transition-colors">
						Sign in
					</button>
					<button className="hover:opacity-70 transition-opacity">
						<img
							src={assets.cart_icon}
							alt="Cart"
							className="w-5 h-5 sm:w-6 sm:h-6"
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
