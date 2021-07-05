import React from "react";

const Section3 = () => {
	return (
		<>
			<section>
				<div className="wrapper">
					<div className="container">
						<div className="icons">
							<div className="icon"></div>
							<div className="icon"></div>
							<div className="icon"></div>
							<div className="icon"></div>
							<div className="icon"></div>
						</div>
						<div className="works-description">
							<h3>Quelques projets</h3>
							<h2>Obscury</h2>
							<p>
								Obscury est une plateforme de lecture et de téléchargement de
								contenus multimédias. Lancé initialement sous le domaine
								obscury.com, le projet a finalement été rapatrié sur heroku.
								Avec son design épuré et unique, la plateforme est 100%
								responsive. Technologies utilisées: Symfony, Bulma, etc...
							</p>
							<div>
								<a href="#"></a>
							</div>
						</div>
						<div className="display">
							<div className="navigation-bar">
								<div className="dots">
									<div className="dot"></div>
									<div className="dot"></div>
									<div className="dot"></div>
								</div>
								<div className="arrows">
									<span className="arrow-left"></span>
									<span className="arrow-right"></span>
								</div>
								<div className="address">https://obscury.heroko.com</div>
							</div>
							<div className="scene">
								<p>Obscury</p>
								<p>Aly</p>
								<p>Myrtfm</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					min-height: 100vh;
					width: 100vw;
					background-color: var(--second);
					clip-path: polygon(0 20%, 100% 10%, 100% 100%, 0 100%);
					position: relative;
				}

				.wrapper {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
					padding-top: 20%;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				}

				.container {
					grid-template-columns: repeat(2, 1fr);
					height: 100%;
					position: relative;
					color: var(--third);
					display: grid;
					align-items: center;
				}

				.icons {
					position: absolute;
					width: 100%;
					height: 100%;
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

				.icon:nth-child(1) {
					background-image: url(/icons/react.svg);
					top: 10%;
					left: 5%;
				}

				.icon:nth-child(2) {
					background-image: url(/icons/symfony.svg);
					top: 5%;
					left: 44.5%;
				}

				.icon:nth-child(3) {
					background-image: url(/icons/nextjs.svg);
					top: 15%;
					left: 90%;
				}

				.icon:nth-child(4) {
					background-image: url(/icons/material-ui.svg);
					bottom: 5%;
					left: 0;
				}

				.icon:nth-child(5) {
					background-image: url(/icons/framer-motion.svg);
					bottom: 2%;
					left: 30%;
				}

				.works-description {
					width: 80%;
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
					max-width: calc((1000 / var(--sc)) * 1rem);
				}

				.display {
					position: relative;
					width: 100%;
					border: 1px solid var(--third);
					border-radius: 8px;
					overflow: hidden;
				}

				.navigation-bar {
					position: relative;
					height: 40px;
					width: 100%;
					background: var(--third);
					display: flex;
					align-items: center;
					border-radius: 8px 0px 0px;
				}

				.dots {
					display: flex;
					align-items: center;
					position: absolute;
					left: 10px;
				}

				.dot {
					border-radius: 50%;
					width: 9px;
					height: 9px;
					margin: 0px 3px;
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
					left: 13%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.arrow-left {
					background-image: url(/icons/chevron-left.svg);
					background-position: center;
					background-repeat: no-repeat;
					width: 16px;
					height: 16px;
					background-size: 80%;
				}

				.arrow-right {
					background-image: url(/icons/chevron-right.svg);
					background-position: center;
					background-repeat: no-repeat;
					width: 16px;
					height: 16px;
					background-size: 80%;
				}

				.address {
					position: absolute;
					left: 25%;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgb(0, 0, 0, 0.25);
					width: 50%;
					height: 18px;
					border-radius: 5px;
					pointer-events: none;
					font-size: 10px;
					color: var(--third);
				}

				.scene {
					background: var(--third);
					backdrop-filter: blur(1rem);
					display: flex;
					align-items: center;
					justify-content: center;
					color: var(--second);
					flex-direction: column;
				}

				@media screen and (max-width: 768px) {
					.wrapper {
						padding-top: 30%;
					}

					.container {
						display: flex;
						flex-direction: column;
					}

					.icon {
						width: calc((50 / var(--sc)) * 1rem);
						height: calc((50 / var(--sc)) * 1rem);
						border-radius: 5px;
						background-size: 60%;
					}

					.works-description {
						width: 100%;
						margin-top: calc((150 / var(--sc)) * 1rem);
						margin-bottom: calc((30 / var(--sc)) * 1rem);
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
						border: 1px solid var(--third);
						border-radius: 5px;
					}

					.navigation-bar {
						border-radius: 5px 0px 0px;
					}

					.dots {
						display: flex;
						align-items: center;
						position: absolute;
						left: 10px;
					}

					.dot {
						border-radius: 50%;
						width: 9px;
						height: 9px;
						margin: 0px 3px;
					}

					.arrows {
						left: 22%;
					}

					.address {
						left: 35%;
						height: 15px;
						border-radius: 5px;
						font-size: 7px;
					}

					.scene {
						background: var(--third);
						backdrop-filter: blur(1rem);
						display: flex;
						align-items: center;
						justify-content: center;
						color: var(--second);
						flex-direction: column;
					}

					.scene p {
						padding: 0 calc((10 / var(--sc)) * 1rem);
					}
				}
			`}</style>
		</>
	);
};

export default Section3;
