import Head from 'next/head'
import Container from "@mui/material/Container";

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Scene from './components/BlackholeScene';
import { Canvas } from '@react-three/fiber';


export default function Home() {
  const numStars = 200,
  colors = ['#2F302E', '#616064', '#5C4F43', '#353F4C', '#6A6151'],
  colorBlackhole = '#000000',
  colorAccretion = '#E8E6E6'

  return (
    <>
      <Head>
        <title>Mahra's Website</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main>
          <Banner />
          <div className="container">
            <Canvas gl={{ antialias: true }}>
              <ambientLight intensity={0.01} />
              <Scene
                numStars={numStars}
                colors={colors}
                colorBlackhole={colorBlackhole}
                colorAccretion={colorAccretion}
              />
            </Canvas>
          </div>

        </main>
        <Navigation />
      </Container>
    </>
  )
}
