import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default function Home() {
	const section1 = useRef(null),
		section2 = useRef(null),
		section3 = useRef(null),
		section4 = useRef(null),
		section5 = useRef(null);

	const sections = useMemo(
		() => [
			{
				id: "home",
				el: section1,
			},
			{
				id: "user",
				el: section2,
			},
			{
				id: "grid",
				el: section3,
			},
			{
				id: "code",
				el: section4,
			},
			{
				id: "mail",
				el: section5,
			},
		],
		[]
	);

	const handleClick = (name) => {
		sections.forEach((section) => {
			if (section.id === name) {
				section.el.current.scrollIntoView({ behavior: "smooth" });
			}

			return;
		});
	};

	const main = useRef(null);

	const [state, setState] = useState(null);

	useEffect(() => {
		const options = {
			// root: main.current,
			// rootMargin: "0px",
			threshold: 0.6,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.6) {
					setState(entry.target.getAttribute("name"));
					console.log(entry.target.getAttribute("name"));
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section.el.current);
		});
	}, [sections]);

	return (
		<>
			<Head>
				<title>Bruno Dogbase</title>
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta
					name="description"
					content="Développeur web fullstack résidant et exerçant sur Bamako. J'accepte tous les projets en télé-travail partout dans le monde."
				/>
				<meta
					name="keywords"
					content="Bruno Dogbase Développeur web Bamako Mali"
				/>
				<meta property="og:image" content="/bruno.jpg" />
				<meta property="og:type" content="portfolio" />
				<meta
					property="og:description"
					content="Développeur web fullstack résidant et exerçant sur Bamako. J'accepte tous les projets en télé-travail partout dans le monde."
				/>
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:title" content="Bruno Dogbase" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:site"
					content="https://curriculum-vitae-brunodogbase.vercel.app"
				/>
				<meta name="twitter:creator" content="@BrruunnooD" />
				<meta name="twitter:title" content="Bruno Dogbase" />
				<meta
					name="twitter:description"
					content="Développeur web fullstack résidant et exerçant sur Bamako. J'accepte tous les projets en télé-travail partout dans le monde."
				/>
				<meta name="twitter:image" content="/bruno.jpg" />
			</Head>
			<main ref={main}>
				<Section1 reference={section1} />
				<Section2 reference={section2} />
				<Section3 reference={section3} />
				<Section4 reference={section4} />
				<Section5 reference={section5} />
				<Nav handleClick={handleClick} nav={state} />
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
				}

				@media screen and (max-width: 768px) {
					p {
						font-size: calc((20 / var(--sc)) * 1rem);
						width: calc(100% - (calc((var(--ps) / var(--sc)) * 1rem) * 2));
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
