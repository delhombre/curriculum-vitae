import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home() {
	return (
		<>
			<main style={{ overflowX: "hidden" }}>
				<Section1 />
				<Section2 />
				<Section3 />
				<Nav />
			</main>
		</>
	);
}
