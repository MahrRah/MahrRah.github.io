import Head from 'next/head'
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Startup from './Startup';




export default function Home() {

 
  return (
    <>
      <Head>
        <title>Mahras Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
            <Typography className="title">
              Coming soon 
            </Typography>
          </Box>

          <Startup />

        </main>
        <Box
          component="footer"
          textAlign='center'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >

          <Button variant="text">About</Button>
          <Button variant="text">Blog</Button>
          {/* <Button variant="text">Rhys</Button>
          <Button variant="text">Contact</Button> */}
        </Box>
      </Container>
    </>
  )
}
