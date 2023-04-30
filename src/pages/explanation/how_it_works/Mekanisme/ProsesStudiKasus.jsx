import React from "react";
import request from "../../../../assets/request.png";
import { FiChevronDown } from "react-icons/fi";
import serverProcess from "../../../../assets/server-process.png";
import browserRender from "../../../../assets/browser-render.png";
import compare from "../../../../assets/compare.png";
function ProsesStudiKasus() {
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	return (
		<div id="proses-studi-kasus">
			<li
				id="apa-itu-client"
				className="list-disc"
			>
				<span className="font-semibold text-lg mb-2">Study Case HTTP Process</span>
				<p className="pl-5 mb-2">
					Setelah memahami cara kerja aplikasi web secara umum, mari kita lihat
					prosesnya dari studi kasus sebelumnya.
				</p>
				<p className="mb-2 pl-5">
					Pada kasus tersebut, perlu diketahui terlebih dahulu bahwa browser dan
					server berada pada satu sistem komputer yang sama. Server yang
					dijalankan berupa local server dengan menggunakan web server apache.
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
							HTTP Request
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
								indexDropdown === 0 ? "max-h-[600px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Tahap pertama, user akan melakukan request dengan alamant url
									yang dituliskan http://localhost/uts artinya permintaan
									tersebut menggunakan protocol jaringan http, pada server
									localhost dengan route uts.{" "}
								</p>
								<img
									src={request}
									alt="request http"
									className="w-[100%] mx-auto rounded-md overflow-clip mt-3"
								/>
								<p className="mt-3">
									Alamat yang dituliskan “localhost” akan dikonversikan menjadi
									alamat IP server local secara default “127.0.0.1” oleh DNS
									local yang telah dikonfigurasikan oleh perangkat kita.
								</p>
							</div>
						</div>
					</li>
					<li className="mb-2 rounded-md">
						<button
							onClick={() => {
								if (indexDropdown == 1) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(1);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							Server Processing
							<i
								className={`${
									indexDropdown === 1 ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							>
								<FiChevronDown size={20} />
							</i>
						</button>
						<div
							className={`px-5 bg-gray-100 rounded-md max-h-0 overflow-hidden  ${
								indexDropdown === 1 ? "max-h-[600px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Permintaan tersebut akan diolah oleh server berdasarkan logic
									yang telah dituliskan , dalam kasus diatas menggunakan script
									server menggunakan bahasa pemrograman php seperti ditunjukan
									pada gambar di bawah.
								</p>
								<img
									src={serverProcess}
									alt="server proses"
									className="w-[90%] mx-auto rounded-md overflow-clip mt-3"
								/>
							</div>
						</div>
					</li>
					<li className="mb-2 rounded-md">
						<button
							onClick={() => {
								if (indexDropdown == 2) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(2);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							Browser Rendering
							<i
								className={`${
									indexDropdown === 2 ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							>
								<FiChevronDown size={20} />
							</i>
						</button>
						<div
							className={`px-5 bg-gray-100 rounded-md max-h-0 overflow-hidden  ${
								indexDropdown === 2 ? "max-h-[600px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Setelah permintaan kita diproses oleh server, maka konten akan
									dikirimkan oleh server dan diterima oleh browser kita untuk
									ditampilkan. Konten yang dikirimkan berupa gambar, css, icon,
									javascript, html (dapat dilihat di gambar di bawah)
								</p>
								<img
									src={browserRender}
									alt="browser render"
									className="w-[100%] mx-auto rounded-md overflow-clip mt-3"
								/>
							</div>
						</div>
					</li>
					<li className="mb-2 rounded-md">
						<button
							onClick={() => {
								if (indexDropdown == 3) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(3);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							Client Side Rendering vs Server Side Rendering
							<i
								className={`${
									indexDropdown === 3 ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							>
								<FiChevronDown size={20} />
							</i>
						</button>
						<div
							className={`px-5 bg-gray-100 rounded-md max-h-0 overflow-hidden  ${
								indexDropdown === 3 ? "max-h-[600px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Perlu diketahui bahwa script php , html, js, dan css berada
									dalam satu file, namun yang dikirimkan pada browser hanya
									script js, html, dan css
								</p>
								<img
									src={compare}
									alt="compare"
									className="w-[100%] mx-auto rounded-md overflow-clip mt-3"
								/>
								<p className="font-semibold">
									Kiri : Kode pada script index.php || Kanan : Kode yang
									diterima oleh browser{" "}
								</p>
								<p>
									Dapat dilihat diatas bahwa pada file index.php, terdapat
									script php yang ditandai dengan tag php, namun Ketika
									ditampilkan di browser script tersebut tidak ditampilkan,
									melainkan hanya elemen yang telah diolah sebelumnya pada
									server, seperti injeksi elemennya, bukan kode script php nya
								</p>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</div>
	);
}

export default ProsesStudiKasus;
