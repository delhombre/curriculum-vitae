// import { useEffect } from "react";
// import particles from "../utils/particle";

const Section1 = () => {
	// useEffect(() => {
	// 	particles();
	// }, []);

	return (
		<>
			<section id="container">
				<div className="presentation">
					<h2>
						Bonjour, <span className="iam">Je suis Bruno Dogbase...</span>
					</h2>
					<h1>Développeur web fullstack</h1>
					<p>
						Je conçois et réalise des applications web du front au back — chaque
						aspect pris en compte. {`Qu'il s'agisse`} de concevoir des
						interfaces utilisateurs <span className="main">interactives</span>{" "}
						ou des solutions back-end{" "}
						<span className="main">évolutives et fiables</span>, en tant que{" "}
						<span className="main">partenaire</span>, nous créerons ensemble la
						solution la mieux adaptée à votre business.
					</p>
				</div>
			</section>

			<style jsx>{`
				section {
					height: 100vh;
					width: 100vw;
					background: var(--second);
					clip-path: polygon(0 0, 100% 0, 100% 80%, 0 90%);
					position: relative;
				}

				.presentation {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					color: var(--third);
				}

				h2 {
					font-size: calc((60 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
				}

				h1 {
					font-size: calc((80 / var(--sc)) * 1rem);
					text-transform: uppercase;
					font-weight: 900;
					-webkit-text-stroke: 2px var(--main);
					-webkit-text-fill-color: transparent;
					font-family: "Inter", sans-serif;
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
					max-width: calc((1000 / var(--sc)) * 1rem);
					margin-top: calc((20 / var(--sc)) * 1rem);
				}

				.main {
					color: var(--main);
				}

				@media screen and (max-width: 768px) {
					h2 {
						font-size: calc((25 / var(--sc)) * 1rem);
					}

					h1 {
						font-size: calc((30 / var(--sc)) * 1rem);
						-webkit-text-stroke: 1px var(--main);
					}

					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					.iam {
						display: block;
					}
				}
			`}</style>
		</>
	);
};

export default Section1;
