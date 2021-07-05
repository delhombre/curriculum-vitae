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
							<div className="scene">image</div>
						</div>
					</div>
					<div className="selected-works">
						<div className="projects">
							<div className="project">obscury</div>
							<div className="project">aly</div>
							<div className="project">myrtfm</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					min-height: 100vh;
					background-color: blue;
					clip-path: polygon(0 20%, 100% 10%, 100% 100%, 0 100%);
				}

				.wrapper {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem)
						calc((150 / var(--sc)) * 1rem);
					padding-top: 20%;
				}

				.container {
					grid-template-columns: repeat(2, 1fr);
					padding: 200px 0px 0px;
					min-height: 400px;
					position: relative;
					color: rgb(255, 255, 255);
					padding: 200px 16px 0px;
					min-height: 770px;
					display: grid;
					-webkit-box-align: center;
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
				}

				.icon:nth-child(1) {
					background-image: url(/icons/react.svg);
					top: 10%;
					left: 5%;
					background-color: red;
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
					border: 1px solid rgba(66, 71, 112, 0.2);
					border-radius: 8px;
					overflow: hidden;
				}

				.navigation-bar {
					position: relative;
					height: 40px;
					width: 100%;
					background: rgb(13, 22, 45);
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
					background-color: rgb(57, 78, 113);
					border-radius: 50%;
					width: 9px;
					height: 9px;
					margin: 0px 3px;
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
				}

				.arrow-right {
					background-image: url(/icons/chevron-right.svg);
					background-position: center;
					background-repeat: no-repeat;
				}

				.address {
					position: absolute;
					left: 25%;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgb(48, 61, 86);
					width: 50%;
					height: 18px;
					border-radius: 5px;
					pointer-events: none;
					font-size: 10px;
					color: rgb(75, 86, 108);
				}

				.scene {
					background: rgb(13, 22, 45);
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.selected-works {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding-bottom: 100px;
					margin-top: 20px;
				}

				.projects {
					margin: 10px 0px;
					width: 100%;
					display: grid;
					grid-template-rows: auto;
					grid-template-columns: repeat(3, 1fr);
					grid-template-areas: none;
					grid-auto-flow: initial;
					grid-auto-columns: initial;
					grid-auto-rows: initial;
					place-items: center;
					-webkit-box-align: center;
					row-gap: 20px;
					font-size: calc((30 / var(--sc)) * 1rem);
				}
			`}</style>
		</>
	);
};

export default Section3;
