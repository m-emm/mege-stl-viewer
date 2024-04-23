"use client";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import Stats from "three/examples/jsm/libs/stats.module";

import { useEffect, useRef } from "react";

function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(5));

    const light = new THREE.SpotLight();
    light.position.set(500, 500, 500);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);

    directionalLight2.position.set(1, 1, 1);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.4);

    directionalLight3.position.set(0, -1, 0);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.4);

    directionalLight4.position.set(-1, -1, 0);
    scene.add(directionalLight4);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.z = -1000;
    camera.zoom = 0.1;

    // light
    var pointLight = new THREE.PointLight(0xffffff, 0.9);
    camera.add(pointLight);

    scene.add(camera);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;

    var cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xd0d0ff });

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.25,
      roughness: 0.1,
      opacity: 1.0,
      transparent: false,
      transmission: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.25,
    });

    const loader = new STLLoader();
    loader.load(
      "picogrill_box.stl",
      function (geometry) {
        console.log("loaded geometry ***");
        const mesh = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(mesh);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube = new THREE.Mesh(geometry, cubeMaterial);
    // scene.add(cube);

    // window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    const stats = new Stats();

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    //var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    camera.position.set(200, 200, 500);

    camera.lookAt(new THREE.Vector3(200, 200, 0));

    var animate = function () {
      requestAnimationFrame(animate);

      controls.update();

      render();

      stats.update();
    };

    function render() {
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div ref={refContainer}></div>;
}

export default MyThree;
