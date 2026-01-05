import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets"; // استيراد الصور من ملف assets

// بيانات السلايدر - يمكنك تخصيص الصور من مجلد assets الخاص بك
const sliderItems = [
	{
		id: 1,
		img: assets.hero_img,
		title: "SUMMER SALE",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "f5fafd",
	},
	{
		id: 2,
		img: "https://i.ibb.co/cXFnLLV/3.png",
		title: "AUTUMN COLLECTION",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "fcf1ed",
	},
	{
		id: 3,
		img: "https://i.ibb.co/DG69bQ4/2.png",
		title: "WINTER COLLECTION",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "fbf0f4",
	},
];

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
		} else {
			setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
		}
	};

	return (
		<div className="w-full h-screen flex relative overflow-hidden md:flex hidden">
			{/* Left Arrow */}
			<div
				className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-2.5 my-auto cursor-pointer opacity-70 z-10 hover:opacity-100 transition-opacity shadow-lg"
				onClick={() => handleClick("left")}
			>
				<ChevronLeft size={28} className="text-gray-800" />
			</div>

			{/* Wrapper */}
			<div
				className="h-full flex transition-all duration-[1500ms] ease-in-out"
				style={{ transform: `translateX(${slideIndex * -100}vw)` }}
			>
				{sliderItems.map((item) => (
					<div
						key={item.id}
						className="w-screen h-screen flex items-center"
						style={{ backgroundColor: `#${item.bg}` }}
					>
						{/* Image Container */}
						<div className="h-full flex-1 flex items-center justify-center">
							<img
								src={item.img}
								alt={item.title}
								className="h-4/5 object-contain"
							/>
						</div>

						{/* Info Container */}
						<div className="flex-1 p-12 flex flex-col justify-center">
							<h1 className="text-7xl font-bold mb-6">{item.title}</h1>
							<p className="my-12 text-xl font-medium tracking-[3px] text-gray-700">
								{item.desc}
							</p>
							<button className="px-8 py-3 text-xl bg-black text-white cursor-pointer border-2 border-black hover:bg-white hover:text-black transition-all duration-300 w-fit font-semibold">
								SHOP NOW
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Right Arrow */}
			<div
				className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center absolute top-0 bottom-0 right-2.5 my-auto cursor-pointer opacity-70 z-10 hover:opacity-100 transition-opacity shadow-lg"
				onClick={() => handleClick("right")}
			>
				<ChevronRight size={28} className="text-gray-800" />
			</div>
		</div>
	);
};

export default Slider;
