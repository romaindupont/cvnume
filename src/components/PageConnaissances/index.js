import * as THREE from 'three'
import React, {useState, useRef, Suspense, useEffect} from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Reflector, Html } from '@react-three/drei';
/* import { EffectComposer, Outline } from '@react-three/postprocessing' */
import './style.scss';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { logoPhp, logoRedux, logoCss, logoJs, logoReact, logoHtml,logoLaravel, logoLumen, logoMySql, logoPsql, logoPython, logoSass, logoSqlLite, logoThreeJs, logoWebpack } from '../../utils/logo';



const Sol = (props) => {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh receiveShadow ref={ref}>
			<Reflector resolution={1024} args={[300, 300]} {...props}>
      	{(Material, props) => <Material color="#f0f0f0" metalness={0.2} normalScale={[0.6, 0.6]} {...props} />}
    	</Reflector>
			
  </mesh>
		
  )
}
const ImageJs = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.2,0,0], ...props }))
	const js = useLoader(TextureLoader, logoJs())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
	 useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
	 return (
	 	<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
		
			<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
        <div className="content">
          Javascript
        </div> 
				</Html>)}
		</mesh>
	)
	}

const ImageCss = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0], ...props }))
	const image = useLoader(TextureLoader, logoCss())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
        <div className="content">
          CSS
        </div> 
				</Html>)}
		</mesh>
	)
	}

const ImageReact = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0.1], ...props }))
	const url = logoReact();
	const js = useLoader(TextureLoader, url)
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
		<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
			<sphereGeometry args={[0.8, 200, 200]} />
			<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
        <div className="content">
          React
        </div> 
				</Html>)}
		</mesh>
	)
	}
const ImagePhp = ({props}) => {
const [ref] = useBox(() => ({ mass: 1, position: [0.3,0,0.2], ...props }))
const url = logoPhp();
const js = useLoader(TextureLoader, url)
const [active, setActive] = useState(false)
const [hovered, setHover] = useState(false)
	useFrame(({ gl, scene, camera }) => {
	gl.render(scene, camera)
}, 1)
	return (
		<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
			<sphereGeometry args={[0.8, 200, 200]} />
			<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#B0B3D6'}/>
			{hovered && (<Html distanceFactor={10}>
        <div className="content">
          PHP
        </div> 
				</Html>)}
		</mesh>
)
}
const ImageRedux = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1, position: [0.1,0,0.2], ...props }))
	const url = logoRedux();
	const js = useLoader(TextureLoader, url)
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
					<boxGeometry /* args={[1, 1.5, 1]} *//>
				<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
				{hovered && (<Html distanceFactor={10}>
					<div className="content">
						Redux
					</div> 
					</Html>)}
			</mesh>
	)
	}
	const ImageWebpack = ({props}) => {
		const [ref] = useBox(() => ({ mass: 1, position: [0.1,0,0.2], ...props }))
		const url = logoWebpack();
		const js = useLoader(TextureLoader, url)
		const [active, setActive] = useState(false)
		const [hovered, setHover] = useState(false)
			useFrame(({ gl, scene, camera }) => {
			gl.render(scene, camera)
		}, 1)
			return (
				<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
					<sphereGeometry args={[0.8, 200, 200]} />
					<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
					{hovered && (<Html distanceFactor={10}>
						<div className="content">
							Webpack
						</div> 
						</Html>)}
				</mesh>
		)
		}
const ImageSass = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1, position: [0.3,0,0.2], ...props }))
	const url = logoSass();
	const js = useLoader(TextureLoader, url)
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
					<sphereGeometry args={[0.8, 200, 200]} />
				<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
				{hovered && (<Html distanceFactor={10}>
					<div className="content">
						Sass/Scss
					</div> 
					</Html>)}
			</mesh>
	)
	}
const ImagePsql = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1, position: [0.3,0,0.2], ...props }))
	const url = logoPsql();
	const js = useLoader(TextureLoader, url)
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
	useFrame(({ gl, scene, camera }) => {
	gl.render(scene, camera)
	}, 1)
return (
	<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
			<boxGeometry /* args={[1, 1.5, 1]} *//>
		<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
		{hovered && (<Html distanceFactor={10}>
			<div className="content">
				PostGreSql
			</div> 
			</Html>)}
	</mesh>
)
}
const ImageThreeJs = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1, position: [0.3,0,0.2], ...props }))
	const url = logoThreeJs();
	const js = useLoader(TextureLoader, url)
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
	return (
		<mesh scale={active ? 1.5 : 1} ref={ref} onClick={(e) => console.log(e.object) & setActive(!active)} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
	
				<sphereGeometry args={[0.8, 200, 200]} />
			<meshStandardMaterial map={js} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					ThreeJs
				</div> 
				</Html>)}
		</mesh>
)
}
const ImageHtml = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0], ...props }))
	const image = useLoader(TextureLoader, logoHtml())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					HTML
				</div> 
				</Html>)}
		</mesh>
)	
}
const ImageLaravel = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0], ...props }))
	const image = useLoader(TextureLoader, logoLaravel())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					Laravel
				</div> 
				</Html>)}
		</mesh>
)	
}
const ImageLumen = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0], ...props }))
	const image = useLoader(TextureLoader, logoLumen())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					Lumen
				</div> 
				</Html>)}
		</mesh>
)	
}
const ImagePython = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.1,0,0], ...props }))
	const image = useLoader(TextureLoader, logoPython())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					Python
				</div> 
				</Html>)}
		</mesh>
)	
}
const ImageSqLite = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.2,0,0], ...props }))
	const image = useLoader(TextureLoader, logoSqlLite())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					SqlLite3
				</div> 
				</Html>)}
		</mesh>
)	
}
const ImageMySql = ({props}) => {
	const [ref] = useBox(() => ({ mass: 1,position:[0.2,0,0], ...props }))
	const image = useLoader(TextureLoader, logoMySql())
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
		useFrame(({ gl, scene, camera }) => {
		gl.render(scene, camera)
	}, 1)
		return (
			<mesh scale={active ? 1.5 : 1} ref={ref} castShadow onClick={(e) => console.log(e.object) & setActive(!active)} name="js" onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} >
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial map={image} color={hovered ? 'yellow' : '#fff'}/>
			{hovered && (<Html distanceFactor={10}>
				<div className="content">
					MySql
				</div> 
				</Html>)}
		</mesh>
)	
}
const MonSpot = () => {
	const { viewport } = useThree()
	const myRef = useRef();
	useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    myRef.current.position.set(x, y, 0)
    myRef.current.rotation.set(-y, x, 0)
  })
	return (
		<mesh ref={myRef} >
			<sphereGeometry args={[1, 32, 21]} />
			<spotLight angle={-0.5} penumbra={0.5} castShadow />
			<meshBasicMaterial  color={'#ECD006'} />
	  </mesh>	 
 )
}
const PageConnaissances = () => {
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
				<Physics gravity={[0, -8, 0]} defaultContactMaterial={{ restitution: 0.5 }}>
					<Sol />
					<Suspense fallback={null}>
						<ImageJs />
						<ImageReact />
						<ImageCss />
						<ImagePhp />
						<ImageRedux />
						<ImageHtml />
						<ImageLaravel />
						<ImageLumen />
						<ImagePython />
						<ImageSqLite />
						<ImageMySql />
						<ImageWebpack />
						<ImageSass />
						<ImagePsql />
						<ImageThreeJs />
					</Suspense>
					{ready && <Suspense />}			
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