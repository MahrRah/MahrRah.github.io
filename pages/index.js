import Head from 'next/head'
import Container from "@mui/material/Container";
import Startup from './components/Startup';
import Navigation from './components/Navigation';
import Banner from './components/Banner';


export default function Home() {

  return (
    <>
      <Head>
        <title>Mahra's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main>
          <Banner />
          <Startup />
          
        </main>
        <Navigation />
      </Container>
    </>
  )
}
