import Nav from "../components/Nav";
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
				<Nav />
			</main>

			<footer>
				<p>
					<span>Droits réservés </span>
					<span>{new Date().getFullYear()} &copy;brunodogbase</span>
				</p>
			</footer>

			<style jsx>{`
				main {
					overflowx: "hidden";
				}

				footer {
					min-height: 50vh;
					background-color: var(--second);
					clip-path: polygon(0 20%, 100% 10%, 100% 100%, 0 100%);
					position: relative;
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
					color: var(--third);
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -30%);
					width: calc(100% - (calc((var(--ps) / var(--sc)) * 1rem) * 2));
				}

				@media screen and (max-width: 768px) {
					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					p span {
						display: block;
						text-align: center;
					}
				}
			`}</style>
		</>
	);
}
