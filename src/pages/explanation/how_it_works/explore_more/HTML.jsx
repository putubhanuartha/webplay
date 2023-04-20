import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
function HTML() {
	const [input, setInput] = useState();
	const [indexDropdown, setIndexDropdown] = React.useState(-1);
	const [html, setHtml] = useState(`<!-- change code here --> 
	<table id="siswaTable">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Foto</th>
        <th>Nilai Tugas</th>
        <th>UTS</th>
        <th>UAS</th>
        <th>Rata-rata</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>
		<tr><td>001</td><td>Agus</td><td><img src='images/001.jpg' width='50'></td><td>80</td><td>75</td><td>70</td><td>75</td><td>Lulus</td></tr><tr><td>002</td><td>Budi</td><td><img src='images/002.jpg' width='50'></td><td>73</td><td>72</td><td>70</td><td>71.67</td><td>Tidak Lulus</td></tr><tr><td>003</td><td>Citra</td><td><img src='images/003.jpg' width='50'></td><td>84</td><td>87</td><td>91</td><td>87.33</td><td>Lulus</td></tr>    </tbody>
  </table> 
`);
	const docs = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>tes</title>
		</head>
		<body>
			${html}
		</body>
		</html>
	`;
	useEffect(() => {
		console.log(html);
	}, [html]);
	return (
		<div id="html">
			<h1 className="font-semibold text-3xl mb-2">More Exploration</h1>
			<li className="list-disc">
				<span className="font-semibold text-lg mb-2">HTML</span>
				<p className="pl-5 mb-2">
					HTML adalah sebuah Bahasa markup yang digunakan untuk Menyusun
					kerangka dan struktur dari web. Komponen apa saja yang ada dalam
					sebuah web akan didefinisikan melalui HTML, anggaplah HTML sebagai
					raga tubuh manusia.
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
							HTML Document
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
									Dokumen HTML adalah sebuah file yang menampung seluruh elemen
									html yang akan ditampilkan pada tampilan browser atau hanya
									berupa meta data dari file html tersebut. Dokumen HTML ini
									dapat dibaca oleh berbagai browser seperti Chrome, Opera,
									Mozilla Firefox, Microsoft Edge, dll.
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
							HTML Element
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
									Elemen HTML adalah bagian dasar dari Bahasa markup HTML yang
									digunakan untuk membangun halaman web. Umumnya setiap elemen
									HTML akan dibungkus dengan tag html (&lt;&gt;)
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
							Table
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
									Table adalah salah satu elemen html yang akan menampilkan data
									dalam representasi baris dan kolom. Elemen table umumnya
									memiliki child elemen berupa
								</p>
								<p>
									Elemen &lt;tr&gt; akan merepresentasikan bagian baris dari
									table, Elemen &lt;th&gt; akan merepresentasikan bagian nama
									kolom, &lt;tr&gt; merepresentasikan baris (arah horizontall),
									dan &lt;td&gt; yang mepresentasikan isi dari tiap cell.
								</p>
							</div>
							<div>
								<div className="flex flex-col">
									<label htmlFor="htmlInput">HTML</label>
									<textarea
										defaultValue={html}
										name="htmlInput"
										id="htmlInput"
										rows="5"
										cols={40}
										onChange={(e) => {
											setHtml(e.target.value);
										}}
									></textarea>
								</div>
								<div>
									<iframe
										srcDoc={docs}
										sandbox="allow-scripts"
										frameborder="0"
									></iframe>
								</div>
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
							Input
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
									Input juga merupakan elemen dari HTML yang fungsinya adalah
									menangani input dari pengguna. Input umumnya diletakkan di
									dalam elemen form yang selanjutnya dapat diolah oleh browser
									ataupun dikirimkan ke server.
								</p>
								<form
									method="post"
									onSubmit={(e) => {
										e.preventDefault();
										alert("your input " + input);
									}}
								>
									<input
										type="text"
										placeholder="Input here try !!"
										value={input}
										onChange={(e) => {
											setInput(e.target.value);
										}}
										className="px-3 py-2"
									/>
									<input
										type="submit"
										placeholder="submit"
										className="px-3 py-2 ml-3 bg-slate-500 text-white cursor-pointer"
									/>
								</form>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</div>
	);
}

export default HTML;
