import * as THREE from './three.js/build/three.module.js';
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js';







/**
 * @description: 鼠标旋转纹理立方体
 */
function main () {
	// 创建场景
	const scene = new THREE.Scene();
	// 创建相机
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// 添加立方体
	const geometry = new THREE.BoxGeometry();
	const loader = new THREE.TextureLoader();
	const material = new THREE.MeshBasicMaterial({
		map: loader.load('../../images/sky.jpg'),
	});
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', animate); // use if there is no animation loop
	controls.minDistance = 2;
	controls.maxDistance = 10;
	controls.target.set(0, 0, - 0.2);
	controls.update();

	// 动起来
	function animate () {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	animate();
}

/**
 * @description: 画线：注意相机位置设置的影响
 */
function main () {
	// 创建场景
	const scene = new THREE.Scene();
	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// 相机
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
	camera.position.set(0, 0, 50);
	camera.lookAt(0, 0, 0);


	// 添加立方体
	const points = [];
	points.push(new THREE.Vector3(- 10, 0, 0));
	points.push(new THREE.Vector3(0, 10, 0));
	points.push(new THREE.Vector3(10, 0, 0));

	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
	const line = new THREE.Line(geometry, material);

	scene.add(line);
	renderer.render(scene, camera);

}

/**
 * @description: 旋转立方体
 */
function main () {
	// 创建场景
	const scene = new THREE.Scene();
	// 创建相机
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// 添加立方体
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	// 动起来
	function animate () {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	animate();
}
