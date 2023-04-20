import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import HowItWorks from "./how_it_works/HowItWorks";
import ApaItuServer from "./how_it_works/ApaItuServer";
import ApaItuClient from "./how_it_works/ApaItuClient";
import ProtokolKomunikasi from "./how_it_works/ProtokolKomunikasi";
import Mekanisme from "./how_it_works/Mekanisme/Mekanisme";
import StartFromClient from "./how_it_works/Mekanisme/StartFromClient";
import ServedByServer from "./how_it_works/Mekanisme/ServedByServer";
import RenderedByBrowser from "./how_it_works/Mekanisme/RenderedByBrowser";
import ProsesStudiKasus from "./how_it_works/Mekanisme/ProsesStudiKasus";
import ExploreMore from "./how_it_works/explore_more/ExploreMore";
import HTML from "./how_it_works/explore_more/HTML";
import CSS from "./how_it_works/explore_more/CSS";
import Javascript from "./how_it_works/explore_more/Javascript";
import PHP from "./how_it_works/explore_more/PHP";
function Explanation() {
	return (
		<>
			<div className="container mx-auto max-w-4xl py-10">
				<p className="mb-2 text-2xl font-semibold">Lets learn !</p>
				<div className="flex gap-x-5">
					<div className="w-[30%]">
						<ul className="fixed">
							<DropDown />
						</ul>
					</div>
					<div className="w-[70%] border-l-[0.2px] border-gray-300 pl-5 flex flex-col gap-y-8">
						<HowItWorks />
						<ApaItuServer />
						<ApaItuClient />
						<ProtokolKomunikasi />
						<StartFromClient />
						<ServedByServer />
						<RenderedByBrowser />
						<ProsesStudiKasus />
						<HTML />
						<CSS />
						<Javascript/>
						<PHP/>
					</div>
				</div>
			</div>
			<Link
				to={"/"}
				className="cursor-pointer block w-fit -translate-x-20 hover:translate-x-0 fixed bottom-5 rounded-md border-[0.5px] border-gray-300 p-4 hover:border-gray-400 hover:border-[0.7px] hover:shadow-[0px_0px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300"
			>
				<h4 className="font-semibold text-lg">Back to home</h4>
			</Link>
		</>
	);
}
function DropDown() {
	const [open, setOpen] = useState(false);
	return (
		<li>
			<div
				onClick={() => {
					setOpen(!open);
				}}
				className="text-xl flex items-center gap-x-1 cursor-pointer"
			>
				<li
					className={`${
						open ? "rotate-90" : "rotate-0"
					} duration-100 transition-all`}
				>
					<FiChevronRight />
				</li>
				How it works
			</div>
			<ul
				className={`pl-6 border-l-[0.2px] border-gray-300 ml-3 mt-4 flex flex-col gap-y-2 ${
					open ? null : "hidden"
				}`}
			>
				<li className="list-disc ml-1">
					<a href="#apa-itu-server">Apa itu server</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#apa-itu-client">Apa itu client</a>
				</li>
				<li className="list-disc ml-1">
					<a href="#protokol-komunikasi">Protokol Komunikasi</a>
				</li>
				<Mekanisme />
				<ExploreMore />
			</ul>
		</li>
	);
}

export default Explanation;
