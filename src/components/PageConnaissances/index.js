import * as THREE from 'three'
import React, {useState, useRef, Suspense, useEffect} from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls,TransformControls } from '@react-three/drei';
import './style.scss';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Physics, usePlane, useBox } from '@react-three/cannon';




const Sol = (props) => {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[300, 300]} />
      <meshStandardMaterial color="#c5c7bf" />
    </mesh>
  )
}
const MyMesh = ({props}) => {
	/* const ref = useRef() */
	const [ref] = useBox(() => ({ mass: 1, ...props }))
	const js = useLoader(TextureLoader, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABCCAIAAACHASy8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTA5VDIwOjE5OjI3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTA5VDIwOjE5OjI3KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0wOVQyMDoxOToyNyswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2ZDNiY2Y2YS1lOTFlLTdlNDUtYmQwMS0xZTA2NWI2OTI0MzQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMmM1MmE3Yy02MTAzLWEyNGYtYjM0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')
	const [active, setActive] = useState(false)
	 useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
	 return (
	 	<mesh /* scale={active ? 1.5 : 1} onClick={() => setActive(!active)} */ ref={ref} castShadow onClick={(e) => console.log(e.object)} name="truc">
			<boxGeometry />
			<meshStandardMaterial map={js}/>
		</mesh>
	)
	}
	const MyRound = ({props}) => {
		const [ref] = useBox(() => ({ mass: 1, ...props }))
		const url = 'data:image/png;base64,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';
		/* const ref = useRef() */
		/* const { viewport } = useThree() */
		const js = useLoader(TextureLoader, url)
		const [active, setActive] = useState(false)
		 useFrame(({ gl, scene, camera/* , mouse */ }) => {
/* 			const x = (mouse.x * viewport.width) / 2
			const y = (mouse.y * viewport.height) / 2
			ref.current.position.set(x, y, 0)
			ref.current.rotation.set(-y, x, 0) */
			gl.render(scene, camera)
		}, 1)
		 return (
			
			 <mesh /* scale={active ? 1.5 : 1} onClick={() => setActive(!active)} */ ref={ref} onClick={(e) => console.log(e.object)}>
				<sphereGeometry args={[1, 200, 200]} /* color={'#333'} *//>
				<meshStandardMaterial map={js} /* overdraw='0.5' */ /* attach="material" */ /* color={'#333'} *//>
				
			</mesh>
			/* </TransformControls> */
		)
		}
	
const MonSpot = () => {
	const { viewport } = useThree()
	const myRef = useRef();
	/* const [myRef] = useBox(() => ({ mass: 1, ...props })) */
	useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    myRef.current.position.set(x, y, 0)
    myRef.current.rotation.set(-y, x, 0)
  })
	return (
		
		<mesh ref={myRef} >
			<dodecahedronBufferGeometry attach="geometry" />
		{/*  <sphereGeometry args={[1, 200, 200]}/> */}
		 <spotLight angle={-0.5} penumbra={0.5} /* position={[0,0,0]} */ castShadow />
		 <meshLambertMaterial  /* overdraw='0.5' */ /* attach="material" */ /* color={'#333'} *//>
		 
	 </mesh>
	 
 )
}
const PageConnaissances = () => {
	/* const color = new THREE.Color()
	const [hovered, setHovered] = useState(false) */
	const [ready, set] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000)
    return () => clearTimeout(timeout)
  }, [])
  return (
		<>
		<div className="connaissances" id="canvas-container" >
			<Canvas camera={{ position: [25, 15, 45], fov: 60 }} shadows >
				<ambientLight intensity={0.1} />
				<spotLight angle={0.9} penumbra={0.9} position={[10, 10, 5]} castShadow />
				{/* <directionalLight position={[10, 8, -5]} intensity={0.5}
       color="white"/> */}
				{/* <directionalLight color="yellow" /* position={[1, 1, 3, 1]} */}
				<Physics>
					<Sol />
				<Suspense fallback={null}>
					<MyMesh /* position={[0, 5, 0]} *//>
					<MyRound />
      	</Suspense>
				{ready && <Suspense /* position={[-0.45, 15, 0.25]} */ />}
				{/* {ready && <MyRound position={[-0.45, 15, 0.25]} />} */}
				
				<MonSpot/>
				</Physics>
				<OrbitControls enablePan={('Pan', true)}
            enableZoom={('Zoom', true)}
            enableRotate={('Rotate', true)}/>
			</Canvas>
		</div>
		</>
  );
}

export default PageConnaissances;