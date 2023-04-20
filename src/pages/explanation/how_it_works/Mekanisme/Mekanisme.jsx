import React from "react";
import { FiChevronRight } from "react-icons/fi";
function Mekanisme() {
	const [open, setOpen] = React.useState(false);
	return (
		<li className="-translate-x-4">
			<a
				onClick={() => {
					setOpen(!open);
				}}
				href="#start-from-client"
				className="text-xl flex items-center gap-x-1"
			>
				<li
					className={`${
						open ? "rotate-90" : "rotate-0"
					} duration-100 transition-all`}
				>
					<FiChevronRight />
				</li>
				Mekanisme
			</a>
			<ul
				className={`pl-6 border-l-[0.2px] border-gray-300 ml-3 mt-4 flex flex-col gap-y-2 ${
					open ? null : "hidden"
				}`}
			>
				<li className="list-disc ml-1">
					<a href="#start-from-client">Start from client</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#served-by-server">Served by server</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#rendered-by-browser">Rendered by browser</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#proses-studi-kasus">Proses pada studi kasus</a>
				</li>
			</ul>
		</li>
	);
}

export default Mekanisme;
