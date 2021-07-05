import React from "react";

const Section4 = () => {
	return (
		<>
			<section>
				<div className="container">
					<h3>Stack technique</h3>
					<h2>Les Solutions Optimales nécessitent des Outils appropriés</h2>
					<p>{`Un apercu des technos que j'ai eu à utiliser.`}</p>
					<div className="tools">
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.container {
					margin: calc((var(--ps) / var(--sc)) * 1rem);
				}

				h3 {
					font-size: calc((40 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
					color: var(--fourth);
				}

				h2 {
					font-size: calc((60 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
				}

				.tools {
					display: grid;
					grid-template-rows: auto;
					grid-template-columns: repeat(4, 1fr);
					grid-template-areas: none;
					grid-auto-flow: initial;
					grid-auto-columns: initial;
					grid-auto-rows: initial;
					place-items: center;
					-webkit-box-align: center;
					row-gap: 60px;
				}

				.tool {
					width: calc((150 / var(--sc)) * 1rem);
					height: calc((150 / var(--sc)) * 1rem);
					background-position: center;
					background-repeat: no-repeat;
				}

				.tool:nth-child(1) {
					background-image: url(/icons/html.svg);
				}

				.tool:nth-child(2) {
					background-image: url(/icons/css.svg);
				}

				.tool:nth-child(3) {
					background-image: url(/icons/php.svg);
				}

				.tool:nth-child(4) {
					background-image: url(/icons/javascript.svg);
				}

				.tool:nth-child(5) {
					background-image: url(/icons/json.svg);
				}
			`}</style>
		</>
	);
};

export default Section4;
