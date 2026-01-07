import { Send } from "lucide-react";

const Newsletter = () => {
	return (
		<div className="h-[60vh] bg-gradient-to-br from-pink-50 to-rose-50 flex justify-center items-center flex-col px-4">
			<h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
				Newsletter
			</h1>
			<p className="text-lg md:text-xl font-light text-center mb-8 text-gray-600 max-w-md">
				Get timely updates from your favorite products.
			</p>
			<div className="w-full max-w-md md:max-w-lg flex rounded-lg overflow-hidden shadow-lg">
				<input
					className="flex-1 px-5 py-3 outline-none text-gray-700 placeholder-gray-400"
					type="email"
					placeholder="Your email"
				/>
				<button className="px-6 bg-teal-500 hover:bg-teal-600 text-white transition-colors duration-200 flex items-center justify-center">
					<Send size={20} />
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
