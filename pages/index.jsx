import { useEffect, useRef } from "react";
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

	const sections = [
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
	];

	const handleClick = (name) => {
		sections.forEach((section) => {
			if (section.id === name) {
				section.el.current.scrollIntoView({ behavior: "smooth" });
			}

			return;
		});
	};

	const main = useRef(null);

	useEffect(() => {
		const options = {
			// root: main.current,
			rootMargin: "0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section.el.current);
		});
	}, [sections]);

	return (
		<>
			<main ref={main}>
				<Section1 reference={section1} />
				<Section2 reference={section2} />
				<Section3 reference={section3} />
				<Section4 reference={section4} />
				<Section5 reference={section5} />
				<Nav handleClick={handleClick} />
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
