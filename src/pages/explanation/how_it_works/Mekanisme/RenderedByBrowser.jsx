import React from "react";

function RenderedByBrowser() {
	return (
		<div id="rendered-by-browser">
			<li
				id="apa-itu-client"
				className="list-disc"
			>
				<span className="font-semibold text-lg mb-2">Rendered by Browser</span>
				<p className="pl-5 mb-2">
					Semua konten yang diterima, awalnya hanya berupa script (kode)
					kemudian akan diproses oleh engine pada browser untuk kemudian dapat
					ditampilkan kepada user.
				</p>
			</li>
		</div>
	);
}

export default RenderedByBrowser;
