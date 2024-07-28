
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Navigation() {
  return (
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

      <Button variant="text"><Link href="/about">About</Link></Button>
      <Button variant="text"><Link href="https://dev.to/mahrrah">Blog</Link></Button>
    </Box>
  );
}