import React from "react";

const Section3 = ({ reference }) => {
	return (
		<>
			<section ref={reference}>
				<div className="top-icons">
					<div className="icon"></div>
					<div className="icon"></div>
					<div className="icon"></div>
				</div>
				<div className="container">
					<div className="works">
						<h3>Projets</h3>
						<h2>Quels sont les projets réalisés jusque là ?</h2>
						<p>
							Une sélection non exhaustive de quelques sites web réalisés jusque
							là. Ces projets répresentent une varieté de thème dont {`j'ai`} eu
							à traiter avec les clients. De la plateforme de lecture et de de
							téléchargement de contenus multimédias (streaming), au design
							créatif du portfolio de photographe en passant par la web radio,
							la satisfaction des clients a été au coeur de la réalisation de
							ces projets. Technologies utilisées: Symfony/PHP, Bulma, Next.js,
							Three.js, Pixi.js, Javascript, MySql...
						</p>
					</div>
					<div className="display">
						<div className="navigation-bar">
							<div className="dots">
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
							</div>
							<div className="arrows">
								<span className="arrow"></span>
								<span className="arrow"></span>
							</div>
							<div className="address">https://www.website.com</div>
						</div>
						<div className="scene">
							<p>
								<a href="#" target="_blank" rel="noopener noreferrer">
									https://obscury.heroku.com
								</a>
							</p>
							<p>
								<a
									href="https://aly-traore.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
								>
									https://aly-traore.vercel.app
								</a>
							</p>
							<p>
								<a
									href="http://myrtfm.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									http://myrtfm.com/
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="bottom-icons">
					<div className="icon"></div>
					<div className="icon"></div>
				</div>
			</section>

			<style jsx>{`
				section {
					background-color: var(--second);
					color: var(--third);
					clip-path: polygon(0 20%, 100% 10%, 100% 100%, 0 100%);
					min-height: 100vh;
					padding-top: 20%;
				}

				.top-icons,
				.bottom-icons {
					position: relative;
					height: calc((300 / var(--sc)) * 1rem);
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
				}

				.bottom-icons {
					padding-bottom: calc((300 / var(--sc)) * 1rem);
				}

				.icon {
					position: absolute;
					background-position: center;
					background-repeat: no-repeat;
					width: calc((150 / var(--sc)) * 1rem);
					height: calc((150 / var(--sc)) * 1rem);
					background-color: rgb(34 31 31);
					border-radius: 15px;
					background-size: 80%;
				}

				.top-icons .icon:nth-child(1) {
					background-image: url(/icons/react.svg);
					top: 30%;
					left: 5%;
				}

				.top-icons .icon:nth-child(2) {
					background-image: url(/icons/symfony.svg);
					top: 5%;
					left: 44.5%;
				}

				.top-icons .icon:nth-child(3) {
					background-image: url(/icons/nextjs.svg);
					top: 15%;
					left: 90%;
				}

				.bottom-icons .icon:nth-child(1) {
					background-image: url(/icons/material-ui.svg);
					top: 15%;
					left: 0;
				}

				.bottom-icons .icon:nth-child(2) {
					background-image: url(/icons/framer-motion.svg);
					top: 30%;
					left: 30%;
				}

				.container {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
					height: 100%;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					align-items: center;
				}

				.works {
					width: 85%;
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
				}

				.display {
					position: relative;
					width: 100%;
					border-radius: calc((20 / var(--sc)) * 1rem);
					overflow: hidden;
				}

				.navigation-bar {
					position: relative;
					border-bottom: 1px solid rgba(68, 68, 68, 0.4);
					height: calc((40 / var(--sc)) * 1rem);
					width: 100%;
					background: var(--third);
					display: flex;
					align-items: center;
				}

				.dots {
					display: flex;
					align-items: center;
					position: absolute;
					left: calc((20 / var(--sc)) * 1rem);
				}

				.dot {
					border-radius: 50%;
					width: calc((25 / var(--sc)) * 1rem);
					height: calc((25 / var(--sc)) * 1rem);
					margin: 0 calc((10 / var(--sc)) * 1rem);
				}

				.dot:nth-child(1) {
					background: rgba(255, 0, 0, 0.5);
				}

				.dot:nth-child(2) {
					background: rgba(255, 255, 0, 0.5);
				}

				.dot:nth-child(3) {
					background: rgba(0, 128, 0, 0.5);
				}

				.arrows {
					position: absolute;
					left: 17%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.arrow {
					background-position: center;
					background-repeat: no-repeat;
					background-size: 90%;
					width: calc((25 / var(--sc)) * 1rem);
					height: calc((25 / var(--sc)) * 1rem);
				}

				.arrow:nth-child(1) {
					background-image: url(/icons/chevron-left.svg);
				}

				.arrow:nth-child(2) {
					background-image: url(/icons/chevron-right.svg);
				}

				.address {
					position: absolute;
					left: 25%;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgb(0, 0, 0, 0.25);
					width: 50%;
					height: calc((25 / var(--sc)) * 1rem);
					border-radius: calc((10 / var(--sc)) * 1rem);
					pointer-events: none;
					font-size: calc((18 / var(--sc)) * 1rem);
					color: var(--third);
				}

				.scene {
					background: var(--third);
					display: flex;
					align-items: center;
					justify-content: center;
					color: var(--second);
					flex-direction: column;
					border-bottom-left-radius: calc((20 / var(--sc)) * 1rem);
					border-bottom-right-radius: calc((20 / var(--sc)) * 1rem);
					height: calc((500 / var(--sc)) * 1rem);
				}

				.scene p {
					padding: calc((20 / var(--sc)) * 1rem) 0;
					font-family: "SF Pro Display", sans-serif;
					text-transform: lowercase;
					color: var(--main);
					font-size: calc((50 / var(--sc)) * 1rem);
				}

				p a:hover {
					text-decoration: underline;
				}

				@media screen and (max-width: 768px) {
					section {
						padding-top: 30%;
						clip-path: polygon(0 10%, 100% 5%, 100% 100%, 0 100%);
					}

					.top-icons,
					.bottom-icons {
						height: calc((120 / var(--sc)) * 1rem);
					}

					.bottom-icons {
						padding-bottom: calc((25 / var(--sc)) * 1rem);
					}

					.icon {
						width: calc((50 / var(--sc)) * 1rem);
						height: calc((50 / var(--sc)) * 1rem);
						background-color: rgb(34 31 31);
						border-radius: 5px;
						background-size: 60%;
					}

					.bottom-icons .icon:nth-child(1) {
						background-image: url(/icons/material-ui.svg);
						top: 5%;
					}

					.container {
						grid-template-rows: repeat(2, 1fr);
						grid-template-columns: auto;
					}

					.works {
						width: 100%;
					}

					h3 {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					h2 {
						font-size: calc((25 / var(--sc)) * 1rem);
					}

					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					.display {
						border-radius: calc((10 / var(--sc)) * 1rem);
					}

					.navigation-bar {
						height: calc((30 / var(--sc)) * 1rem);
					}

					.dots {
						left: calc((10 / var(--sc)) * 1rem);
					}

					.dot {
						width: calc((10 / var(--sc)) * 1rem);
						height: calc((10 / var(--sc)) * 1rem);
						margin: 0 calc((5 / var(--sc)) * 1rem);
					}

					.arrows {
						left: 20%;
					}

					.arrow {
						background-size: 90%;
						width: calc((15 / var(--sc)) * 1rem);
						height: calc((15 / var(--sc)) * 1rem);
					}

					.address {
						left: 30%;
						height: calc((15 / var(--sc)) * 1rem);
						border-radius: calc((3 / var(--sc)) * 1rem);
						font-size: calc((10 / var(--sc)) * 1rem);
					}

					.scene {
						border-bottom-left-radius: calc((10 / var(--sc)) * 1rem);
						border-bottom-right-radius: calc((10 / var(--sc)) * 1rem);
						height: calc((300 / var(--sc)) * 1rem);
					}

					.scene p {
						padding: calc((10 / var(--sc)) * 1rem) 0;
						font-size: calc((25 / var(--sc)) * 1rem);
					}
				}
			`}</style>
		</>
	);
};

export default Section3;
