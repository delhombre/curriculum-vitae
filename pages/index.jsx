// import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default function Home() {
	return (
		<>
			<main>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				{/* <Nav /> */}
			</main>

			<footer>
				<div className="container">
					<p>Droits réservés {new Date().getFullYear()} &copy;brunodogbase</p>
				</div>
			</footer>

			<style jsx>{`
				main {
					overflowx: "hidden";
				}

				footer {
					min-height: 30vh;
					background-color: var(--second);
					clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
					position: relative;
				}

				.container {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
					color: var(--third);
					position: absolute;
					bottom: calc((20 / var(--sc)) * 1rem);
					left: 50%;
					transform: translateX(-50%);
				}

				@media screen and (max-width: 768px) {
					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}
				}
			`}</style>
		</>
	);
}
