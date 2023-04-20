import React from "react";
import httpImage from "../../../../assets/http.png";
function ServedByServer() {
	return (
		<div id="served-by-server">
			<li
				className="list-disc"
			>
				<span className="font-semibold text-lg mb-2">Served by server</span>
				<p className="pl-5 mb-2">
					Setelah server menerima permintaan dan melewati pemeriksaaan{" "}
					<span>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
							target="_blank"
							className="underline text-blue-700"
						>
							CORS {""}
						</a>
					</span>
					<span className="italic">(Cross-Origin Resource Sharing)</span> ,
					server akan mengolah permintaan berdasarkan query, parameter, dan
					method yang ada pada header package yang dikirimkan client.
				</p>
			</li>

			<a
				href=" https://discuss.codecademy.com/t/whats-the-difference-between-req-params-and-req-query/405705"
				target="_blank"
				className="underline text-blue-700 pl-5"
			>
				Baca tentang : perbedaan query dan params{" "}
			</a>
			<p className="pl-5 mt-3">
				Setelah server mengolah permintaan dengan menggunakan database (jika ada
				keperluan permintaan data), server akan mengirimkan response kepada
				client berupa header dan body. Header berisi pesan apakah konten
				berhasil dikirimkan atau tidak, jika berhasil maka body akan memiliki
				konten tertentu.
			</p>
			<p className="pl-5 mt-2 mb-3">
				Lalu, apa isi dari konten body tersebut? Umumnya yang dikirimkan adalah
				semua resources yang dibutuhkan oleh browser seperti script HTML, CSS,
				JAVASCRIPT, serta file gambar, video, dan suara.
			</p>
			<img
				src={httpImage}
				alt="http image"
				className="w-[80%] pl-5"
			/>
			<a
				href="https://www.cleantutorials.com/html/format-of-http-request-response-header-and-body-with-example"
				target="_blank"
				className="underline text-blue-700 pl-5"
			>
				Baca tentang : HTTP Header and HTTP body format
			</a>
		</div>
	);
}

export default ServedByServer;
