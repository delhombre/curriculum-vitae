const icons = ["home", "user", "grid", "code", "mail"];

const Nav = ({ handleClick, nav }) => {
	return (
		<>
			<nav>
				<ul>
					{icons.map((icon, index) => (
						<li key={index}>
							<a
								className={`${nav === icon ? "active" : ""}`}
								style={{ backgroundImage: `url(/icons/${icon}.svg)` }}
								onClick={() => handleClick(icon)}
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
					border-radius: calc((35 / var(--sc)) * 1rem);
					backdrop-filter: blur(1rem);
					z-index: 1100;
					background-color: rgb(35, 55, 63, 0.25);
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
					cursor: pointer;
				}

				a.active {
					background-color: var(--main);
					border-radius: calc((25 / var(--sc)) * 1rem);
					animation: animate 0.5 ease;
				}

				@keyframes animate {
					from {
						tranform: translateX(-100%);
					}
					to {
						transform: translateY(0);
					}
				}

				@media screen and (max-width: 768px) {
					nav {
						border-radius: calc((10 / var(--sc)) * 1rem);
						width: calc(100% - calc((var(--ps) / var(--sc)) * 1rem));
						margin: initial;
						background-color: rgb(35, 55, 63, 0.25);
						/*rgb(135, 206, 235, 0.25)*/
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
