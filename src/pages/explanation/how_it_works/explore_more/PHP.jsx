import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import arrayPhp from "../../../../assets/array.png";
import conditional from "../../../../assets/conditional.png";
import loopPhp from "../../../../assets/looping.png";
function PHP() {
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	const [injectPhp, setInjectPhp] = useState();
	const code = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		${injectPhp}
	</body>
	</html>`;
	return (
		<div id="php">
			<li className="list-disc">
				<span className="font-semibold text-lg mb-2">
					Serverside Scripting (PHP)
				</span>
				<p className="pl-5 mb-2">
					PHP adalah sebuah Bahasa pemrograman yang berada pada sisi server.
					Tidak seperti javascript, PHP umumnya berperan dalam pengaksesan data
					yang tersimpan di database untuk diberikan kepada user.
				</p>
				<p className="pl-5 mb-2">
					Seperti beberapa Bahasa pemrograman lainnya, terdapat konsep dasar
					yang perlu diketahui terlebih dahulu. Kali ini kita hanya akan
					membahas beberapa konsep berdasarkan studi kasus diatas
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
							PHP Code
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
								<textarea
									name="php"
									id="php"
									cols="30"
									rows="10"
									defaultValue={`<?php
	// Membuat array data siswa
	$siswa = array(
	  array("001", "Agus", "001.jpg", 80, 75, 70),
	  array("002", "Budi", "002.jpg", 73, 72, 70),
	  array("003", "Citra", "003.jpg", 84, 87, 91),
	);

	// Menampilkan data siswa menggunakan looping for
	for ($i=0; $i<count($siswa); $i++) {
	  echo "<tr>";
	  echo "<td>".$siswa[$i][0]."</td>";
	  echo "<td>".$siswa[$i][1]."</td>";
	  echo "<td><img src='images/".$siswa[$i][2]."' width='50'></td>";
	  echo "<td>".$siswa[$i][3]."</td>";
	  echo "<td>".$siswa[$i][4]."</td>";
	  echo "<td>".$siswa[$i][5]."</td>";
	  $rata_rata = ($siswa[$i][3] + $siswa[$i][4] + $siswa[$i][5]) / 3;
	  echo "<td>".round($rata_rata,2)."</td>";
	  if ($rata_rata >= 75) {
		echo "<td>Lulus</td>";
	  } else {
		echo "<td>Tidak Lulus</td>";
	  }
	  echo "</tr>";
	}
	?>`}
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
								if (indexDropdown == 1) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(1);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							Variable
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
									Variabel dapat dikatakan sebagai tempat untuk menyimpan sebuah
									nilai. Variabel dalam php dapat dideklarasikan dengan
									menggunakan symbol ($) diikuti dengan nama variable yang
									diinginkan
								</p>
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
							Array
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
									Array adalah sebuah struktur data yang mana dapat menyimpan
									banyak data dengan tipe data apapun
								</p>
								<p>
									Dalam contoh kasus, terdapat implementasi array dalam bentuk
									dua dimensi, dimana sebuah array dapat menyimpan beberapa
									array lainnya
								</p>
								<p>
									Array $siswa di bawah menyimpan objek array siswa, dan tiap
									objek tersebut memiliki array lain yang memiliki nilai
									layaknya attribut dalam sebuah objek, dimana tiap baris
									tersebut memiliki{" "}
									<span className="font-semibold">
										nomor, nama, foto, nilai tugas, uts, uas, rata-rata,
										keterangan
									</span>
								</p>
								<img
									src={arrayPhp}
									alt="array php"
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
							Conditional Branching
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
									Percabangan dalam paradigma pemrograman adalah sebuah konsep
									dimana sebuah program dapat memilih tindakan berdasarkan
									kondisi tertentu, umumnya kondisi tersebut bernilai benar atau
									salah
								</p>
								<p>
									Pada contoh kasus, terdapat deklarasi $rata-rata dimana
									variabel tersebut akan menyimpan nilai rata-rata siswa
								</p>
								<p>
									Nilai siswa tersebut diambil dari nilai tugas, uts, uas
									ditandai dengan pengambilan nilai array pada index ke 3, 4,
									dan 5
								</p>
								<p>
									Nilai rata-rata itu kemudian dibulatkan dan dimasukkan pada
									kolom ke 7 pada tampilan
								</p>
								<p>
									Kemudian terdapat pengecekan kondisi untuk memberikan
									keterangan apakah lulus atau tidak
								</p>
								<p className="font-semibold">
									Lulus jika nilai rata-rata lebih dari sama dengan 75
								</p>
								<p className="font-semibold">
									Tidak lulus jika nilai rata-rata kurang dari 75
								</p>
								<img
									src={conditional}
									alt="conditional function"
								/>
							</div>
						</div>
					</li>
					<li className="mb-2 rounded-md">
						<button
							onClick={() => {
								if (indexDropdown == 4) {
									setIndexDropdown(-1);
								} else {
									setIndexDropdown(4);
								}
							}}
							type="button"
							className="items-center justify-between px-4 flex bg-gray-600 text-gray-200 w-full rounded-md py-4 font-inter font-semibold hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] transition-all duration-200 border-[0.5px] border-gray-300"
						>
							Loop
							<i
								className={`${
									indexDropdown === 4 ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							>
								<FiChevronDown size={20} />
							</i>
						</button>
						<div
							className={`px-5 bg-gray-100 rounded-md max-h-0 overflow-hidden  ${
								indexDropdown === 4 ? "max-h-[600px] mt-3" : "max-h-0"
							} transition-all duration-300`}
						>
							<div className="py-5 flex flex-col gap-3">
								<p>
									Looping adalah sebuah konsep dimana program dapat mengeksekusi
									blok secara berulang selama sebuah kondisi terpenuhi
								</p>
								<p>
									Pada studi kasus, looping dilakukan untuk mencetak elemen pada
									table untuk setiap baris sesuai dengan data pada array yang
									telah dibuat
								</p>
								<p>
									Looping juga dilakukan dengan perhitungan sederhana untuk menghitung nilai rata-rata dan mencetak keterangan lulus-tidaknya siswa
								</p>
								<img
									src={loopPhp}
									alt="looping php"
								/>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</div>
	);
}

export default PHP;
