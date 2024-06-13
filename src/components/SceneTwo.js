// SceneTwo.js
import React from 'react';
import {Sky, Entity, Image} from 'react-aframe-ar';

export default function SceneTwo({visible, changeScene}) {
	return (
		<Entity id='SceneTwo' visible={visible}>
			<Sky src='/img/tequendama/sala2.jpg' rotation='0 0 0' />

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='2.510 0.5 -3.461'
				rotation='0 -69.238 0'
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
					click: () => changeScene('SceneOne'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>
		</Entity>
	);
}
