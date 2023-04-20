import React from "react";
import { FiChevronDown } from "react-icons/fi";
import hierarchy from "../../../../assets/hierarchy.png";
function Javascript() {
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	return (
		<div id="javascript">
			<li className="list-disc">
				<span className="font-semibold text-lg mb-2">
					Clientside Scripting (Javascript)
				</span>
				<p className="pl-5 mb-2">
					Javascript adalah sebuah Bahasa pemrograman yang awalnya hanya dapat
					digunakan dalam sisi client saja (client-side scripting) sebelum
					munculnya run time environment Node Js yang dapat dijalankan pada sisi
					server.
				</p>
				<p className="pl-5 mb-2">
					Javascript sendiri berfungsi untuk menambah kemampuan web kita dalam
					berinteraksi terhadap user.
				</p>
				<p className="pl-5 mb-2">
					Dalam analogi sebelumnya, javascript dapat berfungsi layaknya perilaku
					dan kemampuan manusia seperti berjalan, berlari, dan berenang.
				</p>
				<ul className="px-5 mt-5">
					<li className="mb-2 rounded-md">
						<button
							onClick={() => {
								if (indexDropdown == 0) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(0);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							DOM Manipulation
							<i
								className={`${
									indexDropdown === 0 ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							>
								<FiChevronDown size={20} />
							</i>
						</button>
						<div
							className={`px-5 bg-gray-100 rounded-md max-h-0 overflow-hidden  ${
								indexDropdown === 0 ? "max-h-[1000px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									DOM sendiri merupakan sebuah representasi struktur halaman web
									(HTML) dalam bentuk objek yang dapat diakses dan dimanipulasi.
									Adapun manipulasi yang dilakukan juga dapat dilakukan untuk
									mengubah style dari element HTML (DOM), serta prilaku lainnya
									secara lebih bebas dan kompleks.
								</p>
								<p>
									DOM Sendiri memiliki hierarki yang dimulai dari window ,
									dimana objek window merupakan objek yang memiliki akses pada
									keseluruhan web browser API, lalu dibawahnya adalah document
									yang merujuk pada HTML dan isinya.
								</p>
								<img
									src={hierarchy}
									alt="hierarchy DOM"
                                    className="mt-5"
								/>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</div>
	);
}

export default Javascript;
