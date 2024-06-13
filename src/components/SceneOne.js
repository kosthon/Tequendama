import React, {useState, Suspense} from 'react';

import Modal from './Modal';
// import Plant from './ModelsComponents/Plant';
import Gun from './ModelsComponents/Gun';
import {Canvas} from '@react-three/fiber';
import {Sky, Entity, Image, Text} from 'react-aframe-ar';
import {OrbitControls, Environment} from '@react-three/drei';

import './styles/Models.css';

export default function SceneOne({visible, changeScene}) {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalOpenVideo, setModalOpenVideo] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleOpenModalVideo = () => {
		setModalOpenVideo(true);
	};

	const handleCloseModalVideo = () => {
		setModalOpenVideo(false);
	};

	const handleSceneChange = () => {
		changeScene('SceneTwo');
	};

	return (
		<Entity id='SceneOne' visible={visible}>
			<Sky src='/img/tequendama/lobby.jpg' rotation='0 -90 0' />

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='1.175 2.100 -3.764'//  '-3 2.4 2.4'
				rotation='0 -2.189 0'
				className={visible ? 'clickable' : ''}
				scale='1.13 1 0.04'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: handleOpenModal,
				}}
			>
				<Image src='/img/Options.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				material='transparent: true; visible: false'
				position='1.175 1.7500 -3.764'//  '-3 2.4 2.4''-3 2.05 2.4'
				rotation='0 -2.189 0'//'0 100 0'
				scale='0.93 0.87 0.26'
			>
				<Text value='MODELO' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='1.175 1.3 -3.764'//  '-3 2.4 2.4''-3 1.6 2.4'
				rotation='0 -2.189 0'//'0 100 0'
				className={visible ? 'clickable' : ''}
				scale='1.13 1 0.04'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: handleOpenModalVideo,
				}}
			>
				<Image src='/img/Options.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>
			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				material='transparent: true; visible: false'
				position='1.175 0.95 -3.764'//  '-3 2.4 2.4''-3 1.25 2.4'
				rotation='0 -2.189 0'//'0 100 0'
				scale='0.93 0.87 0.26'
			>
				<Text value='VIDEO' align='center' position='0 0 0.01' color='#FFFFF' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='1.497 0.275 -2.583'
				rotation='-16.587 12.599 -5.479'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: handleSceneChange,
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='1.726 0.275 2.119'
				rotation='-9.222 -76.373 -10.927'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneThree'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='2 0.275 8.110'
				rotation='-9.222 -150.519 -10.927'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneFour'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				gltf-model='/models/person/scene.gltf'
				position='-2.466 0 -4.284'
				rotation='-6.959 -19.243 2.358'
				scale='2 2 2'
				animation__postition='property: rotation; to: 0 3600 0; dir: alternate; dur: 50000; loop: true;'
			/>

			{modalOpen && (
				<Modal onClose={handleCloseModal}>
					<Canvas>
						<ambientLight />
						<OrbitControls />
						<Suspense fallback={null}>
							<Gun />
						</Suspense>
						<Environment preset='sunset' />
					</Canvas>
				</Modal>
			)}

			{modalOpenVideo && (
				<Modal onClose={handleCloseModalVideo}>
					<iframe 
						width="560"
						height="315" 
						src="https://www.youtube.com/embed/mwBA-uYNG7Q?si=P1LaaXGQCsAdtNYN" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</Modal>
			)}
		</Entity>
	);
}
