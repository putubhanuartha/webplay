import React from "react";

function StartFromClient() {
	return (
		<div id="start-from-client">
			<h1 className="font-semibold text-3xl mb-2">HTTP Communication Process</h1>
			<li
				className="list-disc"
			>
				<span className="font-semibold text-lg mb-2">Starts from clients</span>
				<p className="pl-5 mb-2">
					Semua diawali dari pengguna yang melakukan request kepada server
					melalui alamat url yang tuliskan di browser. 
				</p>
                <p className="mb-2 pl-5">Alamat url tersebut umumnya berbentuk tulisan yang dapat dibaca dan
					diingat dengan mudah oleh manusia seperti google.com, twitter.com, dan
					youtube.com. </p>
				<p className="pl-5">
					Alamat url tersebut kemudian harus dikonversikan ke dalam
					bentuk alamat IP dengan bantuan DNS, sehingga selanjutnya dapat
					diproses oleh sistem komputer (server).
				</p>
			</li>
		</div>
	);
}

export default StartFromClient;
