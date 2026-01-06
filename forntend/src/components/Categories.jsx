import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
	return (
		<div className="flex p-5 sm:p-0 flex-col md:flex-row justify-between">
			{categories.map((item) => (
				<CategoryItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Categories;
