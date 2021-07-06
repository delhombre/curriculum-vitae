const Section5 = () => {
	return (
		<>
			<section>
				<div className="container">
					<h3>Contact</h3>
					<h2>Comment et où me retrouver ?</h2>
					<div className="boxes">
						<div className="box">
							<h3 style={{ color: "var(--fourth)" }}>Par Mail</h3>
							<p>
								Contactez-moi directement en utilisant le button ci-dessous.
								Vous recevrez une réponse dans les prochaines heures.
							</p>
							<a href="mailto:brunodogbase@gmail.com" className="mail">
								brunodogbase@gmail.com
							</a>
						</div>
						<div className="box">
							<h3 style={{ color: "var(--fourth)" }}>Mes réseaux</h3>
							<ul>
								<li>
									<a
										href="https://www.github.com/delhombre"
										target="_blank"
										rel="noopener noreferrer"
										className="social github"
									></a>
								</li>
								<li>
									<a
										href="https://wa.me/22375604137"
										target="_blank"
										rel="noopener noreferrer"
										className="social whatsapp"
									></a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/brunodogbase"
										target="_blank"
										rel="noopener noreferrer"
										className="social facebook"
									></a>
								</li>
								<li>
									<a
										href="https://twitter.com/BrruunnooD"
										target="_blank"
										rel="noopener noreferrer"
										className="social twitter"
									></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
				}

				.container {
					margin: 0 calc((var(--ps) / var(--sc)) * 1rem);
				}

				h3 {
					font-size: calc((40 / var(--sc)) * 1rem);
					margin-bottom: calc((20 / var(--sc)) * 1rem);
					color: var(--main);
				}

				h2 {
					font-size: calc((60 / var(--sc)) * 1rem);
					margin-bottom: calc((30 / var(--sc)) * 1rem);
				}

				p {
					font-size: calc((40 / var(--sc)) * 1rem);
					margin-bottom: calc((30 / var(--sc)) * 1rem);
				}

				.boxes {
					display: flex;
					justify-content: space-between;
				}

				.box {
					max-width: 49%;
					width: 49%;
					padding: calc((20 / var(--sc)) * 1rem);
					box-shadow: 0 10px 10px #ff00001f, 0 1px 2px #f200003d;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
				}

				.mail {
					font-size: calc((30 / var(--sc)) * 1rem);
					padding: calc((20 / var(--sc)) * 1rem);
					color: var(--third);
					background-color: var(--main);
					border-radius: 8px;
					text-transform: uppercase;
					width: min-content;
				}

				ul {
					display: flex;
					justify-content: space-between;
					list-style-type: none;
					flex-wrap: wrap;
					font-size: calc((40 / var(--sc)) * 1rem);
				}

				.social {
					display: block;
					width: calc((100 / var(--sc)) * 1rem);
					height: calc((100 / var(--sc)) * 1rem);
					background-position: center;
					background-repeat: no-repeat;
					background-size: 90%;
				}

				.github {
					background-image: url(/icons/github.svg);
				}

				.whatsapp {
					background-image: url(/icons/whatsapp.svg);
				}

				.facebook {
					background-image: url(/icons/facebook.svg);
				}

				.twitter {
					background-image: url(/icons/twitter.svg);
				}

				@media screen and (max-width: 768px) {
					h3 {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					h2 {
						font-size: calc((25 / var(--sc)) * 1rem);
						margin-bottom: calc((20 / var(--sc)) * 1rem);
					}

					p {
						font-size: calc((20 / var(--sc)) * 1rem);
					}

					.boxes {
						flex-direction: column;
					}

					.box {
						width: 100%;
						max-width: 100%;
						padding: calc((10 / var(--sc)) * 1rem);
					}

					.box:nth-child(2) {
						margin-top: calc((20 / var(--sc)) * 1rem);
					}

					.mail {
						font-size: calc((15 / var(--sc)) * 1rem);
						padding: calc((5 / var(--sc)) * 1rem);
						border-radius: 3px;
					}

					.social {
						width: calc((50 / var(--sc)) * 1rem);
						height: calc((50 / var(--sc)) * 1rem);
						background-size: 90%;
					}
				}
			`}</style>
		</>
	);
};

export default Section5;
