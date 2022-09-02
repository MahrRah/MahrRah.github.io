import Head from 'next/head'
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Image from './bg.png'; // Import using relative path


export default function Home() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`
    }
  };
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
              Comming soon 
            </Typography>
          </Box>

        </main>
        <Box
          component="footer"
          textAlign='center'
          style={styles.paperContainer}
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
