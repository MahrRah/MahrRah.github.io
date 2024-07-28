import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Banner() {
    return (
        <Box sx={{ display:"flex", alignItems: 'center',justifyContent:'center' }}>
        <Typography className="title">
          Coming soon...
        </Typography>
      </Box>
    );
}