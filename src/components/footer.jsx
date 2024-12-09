import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#24243e",
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* Social media links */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/david-uche-5782a5325"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/DAVE-cloud-code"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/Ultimatedee123?t=Uk3d6WT3FhjhM6WQEQEDnQ&s=09"
          target="_blank"
          aria-label="Twitter"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.facebook.com/profile.php?id=61550021660068"
          target="_blank"
          aria-label="Facebook"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/+2349029956760"
          target="_blank"
          aria-label="WhatsApp"
          sx={{ color: 'white' }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
