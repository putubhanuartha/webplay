import React from "react";
import { FiChevronDown } from "react-icons/fi";
function CSS() {
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	return (
		<div id="css">
			<li className="list-disc">
				<span className="font-semibold text-lg mb-2">CSS</span>
				<p className="pl-5 mb-2">
					CSS adalah sebuah Bahasa script yang digunakan untuk memberikan style
					(mempercantik tampilan) dari file HTML yang ada.
				</p>
				<p className="pl-5 mb-2">
					Sebenarnya, dengan HTML saja sudah dapat dikatakan sebagai aplikasi
					web, namun dengan tampilan yang kurang menarik, hal tersebut dapat
					mempengaruhi user experience.
				</p>
				<p className="pl-5 mb-2">
					Seperti analogi sebelumnya, CSS dapat dikatakan sebagai pakaian yang
					membungkus raga tubuh manusia.
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
							Basic Selector
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
								indexDropdown === 0 ? "max-h-[1800px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<ul className="py-5 flex flex-col gap-3 pl-5">
								<li className="list-square">
									<p className="font-semibold text-lg">Class</p>
									<p>
										Class selector akan memilih{" "}
										<span className="font-semibold">SATU ATAU BEBERAPA </span>{" "}
										elemen html berdasarkan class yang dimilikinya. Umumnya
										menggunakan tanda titik (.) diikuti dengan nama class.
									</p>
								</li>
								<li className="list-square">
									<p className="font-semibold text-lg">Id</p>
									<p>
										Id selector akan memilih{" "}
										<span className="font-semibold">SATU</span> elemen html
										berdasarkan id yang dimiliki. Umumnya menggunakan tanda
										pagar (#) diikuti dengan nama id
									</p>
								</li>
								<li className="list-square">
									<p className="font-semibold text-lg">Element</p>
									<p>
										Element selector akan memilih semua elemen html sesuai yang
										didefinisikan (dipanngil) pada file css. Umumnya langsung
										memanggil nama element html.
									</p>
								</li>
								<li className="list-square">
									<p className="font-semibold text-lg">Multi Selection</p>
									<p>
										Multi selection adalah sebuah cara untuk memilih lebih dari
										satu elemen yang akan diberikan style yang sama, ketimbang
										membuat kode css yang sama, maka multi selection dapat
										diimplementasikan untuk mengurangi tingkat redundancy
									</p>
								</li>
								<li className="h-96">
									<textarea
										className="w-full h-96"
										name="css"
										id="css"
										cols="20"
										rows="30"
										defaultValue={`// Memilih semua element html, beberapa style dapat diturunkan (inherit) 
										*{
											  box-sizing: border-box;
											  margin: 0;
											  padding: 0;
											}
										// Memilih elemen body, beberapa style dapat diturunkan (inherit)
											body {
											  font-family: Arial, sans-serif;
											  text-align: center;
											}
										// style diberikan untuk semua elemen h1
											h1 {
											  margin: 20px 0;
											}
										// style diterapkan untuk elemen table
											table {
											  width: 100%;
											  border-collapse: collapse;
											}
										// style diterapkan untuk elemen th dan td
											th, td {
											  padding: 10px;
											  text-align: left;
											  border-bottom: 1px solid #ddd;
											}
										// style diterapkan untuk elemen th
											th {
											  background-color: #f2f2f2;
											}
										// style akan diterapkan untuk elemen html yang memiliki class "photo"
											.photo {
											  max-width: 100%;
											}
										// style akan diterapkan untuk elemen input bertipe text
											input[type="text"] {
											  padding: 10px;
											  margin-bottom: 20px;
											  width: 100%;
											  border-radius: 5px;
											  border: 1px solid #ccc;
											  font-size: 16px;
											}`}
									></textarea>
								</li>
							</ul>
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
							Media query
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
									Media query adalah fitur css yang baru diperkenalkan sejak CSS
									versi 3. Media query dapat digunakan Ketika kita ingin
									mengimplementasikan style pada sebuah elemen secara dinamis
									berdasarkan keadaan tertentu.
								</p>
								<p>
									Umumnya keadaan tersebut berdasarkan orientasi perangkat
									(landscape atau portrait) ataupun ukuran lebar dari perangkat.
									Media query dapat digunakan Ketika kita ingin
									mengimplementasikan responsive design terhadap web kita.
								</p>
							</div>
							<div>
								<textarea className="w-full" name="media" id="media" cols="30" rows="10" defaultValue={`//style akan diterapkan ketika lebar media dibawah sampai 600px
								 @media (max-width: 600px) {
      .photo {
        width: 50px;
      }
    }`}></textarea>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</div>
	);
}

export default CSS;
