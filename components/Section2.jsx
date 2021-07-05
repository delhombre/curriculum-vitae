import Head from "next/head";

const Section2 = () => {
	return (
		<>
			<Head>
				<link
					href="http://fonts.cdnfonts.com/css/cascadia-mono"
					rel="stylesheet"
				/>
			</Head>
			<section>
				<div className="container">
					<div className="about">
						<h3>Qui suis-je ?</h3>
						<h2>
							{"Votre couteau suisse en développement d'applications web"}
						</h2>
						<p>
							{`J'ai maintenu, développé et mis en production plusieurs projets à partir de
							zéro, en prenant en charge l'aspect design ainsi que l'aspect technique. Ma panoplie d'outils actuel comprend React.js, Symfony, Next.js, Framer motion, Material-ui, Gsap, Pixi.js et d'autres frameworks, bibliothèques et technologies qui leur sont
							liés.`}
						</p>
					</div>
					<div className="code">
						<div className="code-content">
							<code>
								<div className="numbers">
									{Array.from(new Array(11)).map((el, index) => (
										<span key={index}>{index + 1}</span>
									))}
								</div>
								<div className="typist">
									<span>
										<span className="purplish">const </span>
										<span className="bluish">project </span>
										<span className="purplish">= </span>
										<span className="aqua">new </span>
										<span className="bluish">Project</span>
										<span className="yellowish">()</span>
										<span className="whitish">;</span>
									</span>

									<span>
										<span className="purplish">let </span>
										<span className="whitish">isProjectFinished </span>
										<span className="purplish">= </span>
										<span className="redish">false</span>
										<span className="whitish">;</span>
									</span>

									<span style={{ paddingTop: "calc((70 / var(--sc)) * 1rem)" }}>
										<span className="purplish">while </span>
										<span className="yellowish">(</span>
										<span className="purplish">!</span>
										<span className="whitish">isProjectFinished</span>
										<span className="yellowish">)</span>
										<span className="yellowish">{`{`}</span>
										<span
											style={{
												display: "block",
												paddingTop: "calc((20 / var(--sc)) * 1rem)",
												paddingLeft: "calc((20 / var(--sc)) * 1rem)",
											}}
										>
											<span className="whitish">project</span>
											<span className="purplish">.</span>
											<span className="bluish">includeAwesomeEngineer</span>
											<span className="purplish">()</span>
											<span className="whitish">;</span>
										</span>
										<span
											style={{
												display: "block",
												paddingTop: "calc((20 / var(--sc)) * 1rem)",
											}}
										>
											<span className="yellowish">{`}`}</span>
										</span>
									</span>

									<span
										style={{
											paddingTop: "calc((70 / var(--sc)) * 1rem)",
										}}
									>
										<span className="whitish">project</span>
										<span
											style={{
												display: "block",
												paddingTop: "calc((20 / var(--sc)) * 1rem)",
												paddingLeft: "calc((20 / var(--sc)) * 1rem)",
											}}
										>
											<span className="purplish">.</span>
											<span className="bluish">finish</span>
											<span className="yellowish">()</span>
										</span>
										<span
											style={{
												display: "block",
												paddingTop: "calc((20 / var(--sc)) * 1rem)",
												paddingLeft: "calc((20 / var(--sc)) * 1rem)",
											}}
										>
											<span className="purplish">.</span>
											<span className="bluish">then</span>
											<span className="yellowish">(</span>
											<span className="purplish">() </span>
											<span className="purplish">{`=> `}</span>
											<span className="whitish">project</span>
											<span className="purplish">.</span>
											<span className="bluish">getUsers</span>
											<span className="purplish">()</span>
											<span className="yellowish">)</span>
										</span>
										<span
											style={{
												display: "block",
												paddingTop: "calc((20 / var(--sc)) * 1rem)",
												paddingLeft: "calc((20 / var(--sc)) * 1rem)",
											}}
										>
											<span className="purplish">.</span>
											<span className="bluish">catch</span>
											<span className="yellowish">(</span>
											<span className="purplish">() </span>
											<span className="purplish">{`=> `}</span>
											<span className="whitish">project</span>
											<span className="purplish">.</span>
											<span className="bluish">iterate</span>
											<span className="purplish">()</span>
											<span className="yellowish">)</span>
											<span className="whitish">;</span>
										</span>
									</span>
								</div>
							</code>
							<div className="status-bar">
								<div className="status-bar-left">
									<div className="edit-mode">Normal</div>
									<div className="filename">index.js</div>
								</div>
								<div className="status-bar-right">
									<div className="code-info">
										<span className="utf">utf-8</span>
										<span className="git">
											<span className="git-branch"></span>
											<span>master</span>
										</span>
									</div>
									<button>Run Code</button>
								</div>
							</div>
							<div className="console">
								<div className="container">
									<div className="node">
										<span>$</span>
										<span>node index.js</span>
									</div>
									<div>
										<span>{`> fetch requirements...`}</span>
										<br />
										<span>
											<span>[</span>
											<span>200</span>
											<span>]</span>
											<span>project requirements.collected</span>
										</span>
										<br />
										<span>
											<span>[</span>
											<span>200</span>
											<span>]</span>
											<span>project completed</span>
										</span>
										<br />
										<span>
											<span>[</span>
											<span>200</span>
											<span>]</span>
											<span>project succedeed</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.container {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
					min-height: calc((500 / var(--sc)) * 1rem);
					display: grid;
					align-items: center;
					grid-template-columns: repeat(2, 1fr);
				}

				.about {
					display: grid;
					grid-template-rows: auto;
					grid-template-columns: minmax(0px, 1fr);
					grid-template-areas: none;
					grid-auto-flow: initial;
					grid-auto-columns: initial;
					grid-auto-rows: initial;
					width: 80%;
				}

				h3 {
					font-size: calc((40 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
					color: var(--fourth);
				}

				h2 {
					font-size: calc((60 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
				}

				.code {
					font-family: "Cascadia Mono", "Montserrat", sans-serif;
					font-size: calc((35 / var(--sc)) * 1rem);
				}

				.code-content {
					position: relative;
					border-radius: calc((10 / var(--sc)) * 1rem);
					background: var(--pln-background);
					overflow: hidden;
					user-select: none;
				}

				code {
					display: flex;
					font: inherit;
					position: relative;
				}

				.numbers {
					display: flex;
					align-items: flex-end;
					position: sticky;
					min-width: calc((40 / var(--sc)) * 1rem);
					text-align: right;
					flex-direction: column;
					color: var(--pln-comment);
					padding: calc((10 / var(--sc)) * 1rem) 0;
					user-select: none;
				}

				.numbers span {
					padding: calc((10 / var(--sc)) * 1rem) calc((10 / var(--sc)) * 1rem);
				}

				.typist {
					display: table;
					position: relative;
					padding: calc((10 / var(--sc)) * 1rem) calc((15 / var(--sc)) * 1rem);
				}

				.typist > span {
					padding: calc((10 / var(--sc)) * 1rem) 0;
					display: block;
				}

				.whitish {
					color: var(--pln-whitish);
				}

				.redish {
					color: var(--pln-redish);
				}

				.yellowish {
					color: var(--pln-yellowish);
				}

				.bluish {
					color: var(--pln-bluish);
				}

				.purplish {
					color: var(--pln-purplish);
				}

				.aqua {
					color: var(--pln-aqua);
				}

				.status-bar {
					display: flex;
					height: calc((50 / var(--sc)) * 1rem);
					justify-content: space-between;
					background-color: var(--pln-status-bar);
					margin-top: auto;
					width: 100%;
				}

				.status-bar-left {
					display: flex;
					align-items: center;
				}

				.edit-mode {
					color: var(--third);
					background-color: var(--pln-foreground);
					text-transform: uppercase;
					font-size: calc((25 / var(--sc)) * 1rem);
					padding: calc((3 / var(--sc)) * 1rem) calc((10 / var(--sc)) * 1rem);
					position: relative;
				}

				.edit-mode::after {
					content: "";
					position: absolute;
					top: 0px;
					right: 0px;
					transform: translateX(100%);
					width: 0px;
					height: 0px;
					border-width: 9px 0px 10px 8px;
					border-style: solid;
					border-color: transparent transparent transparent
						var(--pln-foreground);
				}

				.filename {
					font-size: calc((25 / var(--sc)) * 1rem);
					margin-left: calc((30 / var(--sc)) * 1rem);
					color: var(--pln-foreground);
				}

				.status-bar-right {
					display: flex;
					align-items: center;
				}

				.code-info {
					display: flex;
					align-items: center;
					margin-right: calc((30 / var(--sc)) * 1rem);
					color: var(--fourth);
				}

				.utf {
					margin: 0 calc((15 / var(--sc)) * 1rem);
					font-size: calc((25 / var(--sc)) * 1rem);
					text-transform: uppercase;
				}

				.git {
					margin: 0 calc((15 / var(--sc)) * 1rem);
					font-size: calc((25 / var(--sc)) * 1rem);
					display: flex;
					align-items: center;
				}

				.git-branch {
					background: url(/icons/git-branch.svg) center no-repeat;
					color: #fff;
					display: block;
					width: 16px;
					height: 16px;
				}
			`}</style>
		</>
	);
};

export default Section2;
