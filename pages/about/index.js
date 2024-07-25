
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Blackhole from '../components/BlackholeStatic';

export default function About() {
    return (
      <Box sx={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
        <Blackhole status="static" />
        <Typography className="title" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          asdasdasd
        </Typography>
      </Box>
    );
}