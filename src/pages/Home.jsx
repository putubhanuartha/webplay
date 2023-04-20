import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div className="flex w-screen h-screen">
			<div className="m-auto flex flex-col gap-y-10">
				<div>
					<h1 className="font-bold text-7xl">Pemrograman Web Dasar</h1>
					<p className="font-bold text-7xl text-center mt-3">
						Featuring{" "}
						<span>
							<TypeAnimation
								sequence={[
									"HTML",
									1000,
									"CSS",
									1000,
									"Javascript",
									1000,
									"PHP",
									1000,
								]}
								repeat={Infinity}
								speed={30}
							/>
						</span>
					</p>
				</div>
				<div className="flex justify-evenly">
					<Link
						target="_blank"
						to={"https://phpliveuts.000webhostapp.com/"}
						className="cursor-pointer rounded-md border-[0.5px] border-gray-300 p-4 w-80 hover:shadow-[0px_0px_2px_4px_rgba(0,0,0,0.1)] hover:bg-white hover:border-gray-400 hover:border-[0.7px] transition-all duration-300"
					>
						<h4 className="font-semibold text-2xl">Live Website</h4>
						<p className="text-gray-500">
							Aplikasi web sesuai dengan studi kasus
						</p>
					</Link>
					<Link
						to={"/explanation"}
						className="cursor-pointer rounded-md border-[0.5px] border-gray-300 p-4 w-80 hover:border-gray-400 hover:border-[0.7px] hover:shadow-[0px_0px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300"
					>
						<h4 className="font-semibold text-2xl">Eksplanasi</h4>
						<p className="text-gray-500">
							Penjelasan mengenai studi kasus yang telah diberikan
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
