import * as THREE from "three";

export default function particles() {
	const container = document.querySelector("#container");
	const width = container.clientWidth,
		height = container.clientHeight;

	let mousePos = { x: 0.5, y: 0.5 };

	document.addEventListener("mousemove", function (event) {
		mousePos = {
			x: event.clientX / width,
			y: event.clientY / height,
		};
	});

	let phase = 0;

	const scene = new THREE.Scene();
	scene.background = new THREE.Color("rgb(23, 23, 23)");
	const camera = new THREE.PerspectiveCamera(95, width / height, 0.1, 1000);
	camera.position.z = 30;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	container.appendChild(renderer.domElement);

	const boxSize = 0.2;
	const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
	const materialGreen = new THREE.MeshBasicMaterial({
		transparent: true,
		color: new THREE.Color("rgb(218, 0, 55)"),
		opacity: 0.4,
		side: THREE.DoubleSide,
	});

	const pitchSegments = 60;
	const elevationSegments = pitchSegments / 2;
	const particles = pitchSegments * elevationSegments;
	const side = Math.pow(particles, 1 / 3);

	const radius = 16;

	const parentContainer = new THREE.Object3D();
	scene.add(parentContainer);

	function posInBox(place) {
		return (place / side - 0.5) * radius * 1.2;
	}

	//Plant the seeds, grow some trees in a grid!
	for (let p = 0; p < pitchSegments; p++) {
		const pitch = (Math.PI * 2 * p) / pitchSegments;
		for (let e = 0; e < elevationSegments; e++) {
			const elevation = Math.PI * (e / elevationSegments - 0.5);
			const particle = new THREE.Mesh(geometry, materialGreen);

			parentContainer.add(particle);

			const dest = new THREE.Vector3();
			dest.z = Math.sin(pitch) * Math.cos(elevation) * radius; //z pos in sphere
			dest.x = Math.cos(pitch) * Math.cos(elevation) * radius; //x pos in sphere
			dest.y = Math.sin(elevation) * radius; //y pos in sphere

			particle.position.x = posInBox(parentContainer.children.length % side);
			particle.position.y = posInBox(
				Math.floor(parentContainer.children.length / side) % side
			);
			particle.position.z = posInBox(
				Math.floor(parentContainer.children.length / Math.pow(side, 2)) % side
			);
			particle.userData = {
				dests: [dest, particle.position.clone()],
				speed: new THREE.Vector3(),
			};
		}
	}

	function render() {
		phase += 0.002;
		for (let i = 0, l = parentContainer.children.length; i < l; i++) {
			const particle = parentContainer.children[i];
			const dest =
				particle.userData.dests[
					Math.floor(phase) % particle.userData.dests.length
				].clone();
			const diff = dest.sub(particle.position);
			particle.userData.speed.divideScalar(1.02); // Some drag on the speed
			particle.userData.speed.add(diff.divideScalar(400)); // Modify speed by a fraction of the distance to the dest
			particle.position.add(particle.userData.speed);
			particle.lookAt(dest);
		}

		parentContainer.rotation.y = phase * 3;
		parentContainer.rotation.x = (mousePos.y - 0.5) * Math.PI;
		parentContainer.rotation.z = (mousePos.x - 0.5) * Math.PI;

		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}
	render();
}
