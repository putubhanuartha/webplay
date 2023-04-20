import React from "react";
import { FiChevronRight } from "react-icons/fi";
function ExploreMore() {
	const [open, setOpen] = React.useState(false);

	return (
		<li className="-translate-x-4">
			<a
				onClick={() => {
					setOpen(!open);
				}}
				href="#html"
				className="text-xl flex items-center gap-x-1"
			>
				<li
					className={`${
						open ? "rotate-90" : "rotate-0"
					} duration-100 transition-all`}
				>
					<FiChevronRight />
				</li>
				Explore More
			</a>
			<ul
				className={`pl-6 border-l-[0.2px] border-gray-300 ml-3 mt-4 flex flex-col gap-y-2 ${
					open ? null : "hidden"
				}`}
			>
				<li className="list-disc ml-1">
					<a href="#html">HTML</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#css">CSS</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#javascript">Javascript</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#php">PHP</a>
				</li>
			</ul>
		</li>
	);
}

export default ExploreMore;
