const icons = [
	{
		name: "home",
		description: "Icône de maison répresentant l'onglet accueil",
	},
	{
		name: "user",
		description: "Icône d'utilisateur répresentant l'onglet à propos",
	},
	{
		name: "grid",
		description: "Icône de grille répresentant l'onglet projets",
	},
	{
		name: "code",
		description:
			"Icône de balise html répresentant l'onglet compétences techniques",
	},
	{ name: "mail", description: "Icône de mail répresentant l'onglet contact" },
];

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					{icons.map((icon, index) => (
						<li key={index}>
							<a
								className={`${index === 0 ? "active" : ""}`}
								href="#"
								style={{ backgroundImage: `url(/icons/${icon.name}.svg)` }}
							></a>
						</li>
					))}
				</ul>
			</nav>

			<style jsx>{`
				nav {
					position: fixed;
					left: 50%;
					transform: translate(-50%);
					bottom: calc((var(--ph) / var(--sc)) * 1rem);
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
					width: 100%;
					max-width: calc((1000 / var(--sc)) * 1rem);
					background-color: rgb(135, 206, 235, 0.25);
					border-radius: calc((50 / var(--sc)) * 1rem);
					backdrop-filter: blur(1rem);
					z-index: 1100;
				}

				ul {
					display: flex;
					list-style-type: none;
					align-items: center;
					justify-content: space-between;
					padding: calc((30 / var(--sc)) * 1rem);
				}

				li > a {
					display: block;
					width: calc((100 / var(--sc)) * 1rem);
					height: calc((100 / var(--sc)) * 1rem);
					background-position: center;
					background-repeat: no-repeat;
				}

				a.active {
					background-color: red;
					border-radius: calc((25 / var(--sc)) * 1rem);
				}

				@media screen and (max-width: 768px) {
					nav {
						border-radius: calc((20 / var(--sc)) * 1rem);
						width: calc(100% - calc((var(--ps) / var(--sc)) * 1rem));
						margin: initial;
						background-color: rgb(68, 68, 68, 0.6);
					}

					ul {
						padding: calc((15 / var(--sc)) * 1rem);
					}

					li > a {
						width: calc((35 / var(--sc)) * 1rem);
						height: calc((35 / var(--sc)) * 1rem);
						padding: calc((25 / var(--sc)) * 1rem);
						background-size: 90%;
					}

					a.active {
						border-radius: calc((10 / var(--sc)) * 1rem);
					}
				}
			`}</style>
		</>
	);
};

export default Nav;
