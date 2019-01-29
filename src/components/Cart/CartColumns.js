import React from 'react';

export default function CartColumns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row">
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">products</p>
				</div>
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">name of product</p>
				</div>
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">price</p>
				</div>
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">quantity</p>
				</div>
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">remove</p>
				</div>
				<div class="col-10 mx-auto col-lg-2">
					<p class="text-uppercase">total</p>
				</div>
			</div>
		</div>
	);
}