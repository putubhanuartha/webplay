import React from "react";
import { FiChevronDown } from "react-icons/fi";
import hierarchy from "../../../../assets/hierarchy.png";
import jsDomInject from "../../../../assets/js.png";
import dom from '../../../../assets/dom.png';
function Javascript() {
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	const [htmlContent, setHtmlContent] = React.useState();
	const code = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>${htmlContent} </style>
	</head>
	<body>
		
	</body>
	</html>`;
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
							What is DOM?
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
							Javascript Code
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
								indexDropdown === 1 ? "max-h-[1000px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<textarea
									name="js"
									id="js"
									cols="30"
									rows="10"
									defaultValue={`function searchTable() {
			// deklarasi variabel
			var input, filter, table, tbody, tr, td, i, txtValue;
		
			// Variabel input menyimpan objek DOM yang memiliki id (searchInput) pada variabel input
				input = document.getElementById("searchInput");
		
			// Variabel filter akan memiliki nilai dari input yang sudah di konversikan menjadi string uppercase
				filter = input.value.toUpperCase();
		
			// Variabel table akan menyimpan objek DOM yang memiliki id (siswaTable)
				table = document.getElementById("siswaTable");
		
			// Variable tbody akan menyimpan objek DOM yang ada pada hierarki table dengan tipe elemen berupa tbody dengan elemen array pertama,
				tbody = table.getElementsByTagName("tbody")[0];
		
			// Variable tr akan menyimpan objek DOM yang berada pada hierarki objek DOM  yang disimpan oleh tbody dengan tipe elemen tr
				tr = tbody.getElementsByTagName("tr");
		
			// DOM Manipulation in looping
			// Looping sebanyak jumlah baris yang ada
			  for (i = 0; i < tr.length; i++) {
			// Ambil elemen pada kolom kedua untuk setiap baris (berisi nama)
				td = tr[i].getElementsByTagName("td")[1];
			// Jika ada elemennya (tidak null || kosong), masuk pada blok if
				if (td) {
			  // Mengambil html node text (ada di dalam elemen td)
				  txtValue = td.textContent || td.innerText;
			  // Mengecek apakah textValue mengandung string filter, jika ya maka masuk pada blok if
				  if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  // Baris akan ditampilkan
					tr[i].style.display = "";
				  } else {
			  // Baris akan disembunyikan
					tr[i].style.display = "none";
				  }
				}       
			  }`}
									onChange={(e) => {
										setHtmlContent(e.target.value);
									}}
								></textarea>
								{/* <iframe
									srcDoc={code}
									frameborder="0"
								></iframe> */}
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
							Storing Javascript DOM
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
								indexDropdown === 2 ? "max-h-[1000px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Objek DOM HTML dapat disimpan dalam sebuah variabel pada
									javascript.
								</p>
								<p>
									Javascript menyediakan beberapa API atau method untuk
									mengakses elemen html sehingga bisa disimpan pada sebuah
									variabel
								</p>
								<div>
									<p>Adapun beberapa method :</p>
									<ul className="font-semibold flex flex-col gap-y-1 list-square pl-7">
										<li>getElementById()</li>
										<li>getElementsByClass</li>
										<li>getElementsByTagName</li>
										<li>querySelector</li>
										<li>querySelectorAll</li>
									</ul>
								</div>
								<p>
									Method tersebut dapat mengembalikan satu elemen ataupun dalam
									bentuk array (HTML Collection)
								</p>
								<a
									href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
									target="_blank"
									className="underline text-blue-800"
								>
									Check the documentation
								</a>
								<img
									src={jsDomInject}
									alt="hierarchy DOM"
									className="mt-5"
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
							Manipulating Javascript DOM
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
								indexDropdown === 3 ? "max-h-[1000px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Objek DOM HTML dapat dimanipulasi nilai dan state-nya dengan
									menggunakan bahasa scripting javascript.
								</p>
								<p>
									Layaknya bahasa pemrograman pada umumnya, kita dapat
									menggunakan loop, seleksi kondisi, penggunaan fungsi, serta
									operasi aritmatika
								</p>
								<img
									src={dom}
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
