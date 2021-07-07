import React from "react";

const Section4 = ({ reference }) => {
	return (
		<>
			<section ref={reference} name="code">
				<div className="container">
					<h3>Stack technique</h3>
					<h2>Les Solutions Optimales nécessitent des Outils appropriés</h2>
					<p>{`Un aperçu de quelques technos que j'utilise.`}</p>
					<div className="tools">
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
						<div className="tool"></div>
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
					color: var(--main);
				}

				h2 {
					font-size: calc((60 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
					margin-bottom: calc((40 / var(--sc)) * 1rem);
				}

				.tools {
					display: grid;
					grid-template-rows: auto;
					grid-template-columns: repeat(4, 1fr);
					grid-template-areas: none;
					place-items: center;
					row-gap: calc((100 / var(--sc)) * 1rem);
				}

				.tool {
					width: calc((150 / var(--sc)) * 1rem);
					height: calc((150 / var(--sc)) * 1rem);
					background-position: center;
					background-repeat: no-repeat;
					background-size: 90%;
				}

				.tool:nth-child(1) {
					background-image: url(/icons/nextjs.svg);
				}

				.tool:nth-child(2) {
					background-image: url(/icons/react.svg);
				}

				.tool:nth-child(3) {
					background-image: url(/icons/symfony.svg);
				}

				.tool:nth-child(4) {
					background-image: url(/icons/apiplatform.svg);
				}

				.tool:nth-child(5) {
					background-image: url(/icons/json.svg);
				}

				.tool:nth-child(6) {
					background-image: url(/icons/javascript.svg);
				}

				.tool:nth-child(7) {
					background-image: url(/icons/rest-api.svg);
				}

				.tool:nth-child(8) {
					background-image: url(/icons/mysql.svg);
				}

				.tool:nth-child(9) {
					background-image: url(/icons/php.svg);
				}

				.tool:nth-child(10) {
					background-image: url(/icons/framer-motion.svg);
				}

				.tool:nth-child(11) {
					background-image: url(/icons/material-ui.svg);
				}

				.tool:nth-child(12) {
					background-image: url(/vercel.svg);
				}

				@media screen and (max-width: 768px) {
					h3 {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					h2 {
						font-size: calc((25 / var(--sc)) * 1rem);
					}

					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					.tools {
						grid-template-columns: repeat(3, 1fr);
						row-gap: calc((50 / var(--sc)) * 1rem);
					}

					.tool {
						width: calc((100 / var(--sc)) * 1rem);
						height: calc((100 / var(--sc)) * 1rem);
						background-size: 90%;
					}
				}
			`}</style>
		</>
	);
};

export default Section4;
