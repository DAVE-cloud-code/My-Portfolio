import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react"; // For animations

// Keyframe animation to slide in from top
const slideInFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure animations replay when the section is revisited
    threshold: 0.2, // Trigger animations when 20% of the section is in view
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        position: "relative",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Left Section with Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            animation: inView ? `${slideInFromTop} 1.5s ease-out` : "none",
            order: { xs: 0, md: 1 }, // Stack image on top for mobile
          }}
        >
          <Box
            component="img"
            src="/assets/coding.jpg" // Replace with your image URL
            alt="About Me"
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", md: "100%" },
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Grid>

        {/* Right Section with Text and Button */}
        <Grid
          item
          xs={12}
          md={6}
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "left", md: "left" }, // Left alignment on all screens
            padding: { xs: "1rem", md: "2rem" }, // Reduced padding on mobile
            animation: inView ? `${slideInFromTop} 1.5s ease-out` : "none",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem" },
              textAlign: { xs: "center", md: "center" }, // Centered on desktop
              animation: inView ? `${slideInFromTop} 1.5s ease-out` : "none",
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.8,
              animation: inView ? `${slideInFromTop} 2s ease-out` : "none",
              textAlign: { xs: "left", md: "left" }, // Consistently aligned left
              paddingRight: { xs: "1rem", md: "1rem" }, // Reduced space on the right
              paddingLeft: { xs: "1rem", md: "1rem" }, // Reduced space on the left
            }}
          >
            As a proficient Software Engineer, I bring a wealth of experience and
            expertise in building dynamic, efficient, and scalable web applications.
            My technical acumen spans across frontend development, where I excel in
            crafting user-friendly interfaces, and backend engineering, where I design
            robust, secure, and efficient server-side solutions. I am particularly
            adept at working with modern frameworks and libraries, leveraging
            technologies such as React, MongoDB, Firebase, and Material-UI to deliver
            seamless and responsive user experiences.
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-start" }, // Align the button left
              paddingLeft: { xs: "1rem", md: "2rem" }, // Padding adjustment
            }}
          >
            <Button
              component="a"
              href="mailto:daviduche161@gmail.com?subject=Contact%20from%20Your%20Website&body=Hello%20there%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
              variant="contained"
              sx={{
                backgroundColor: "#f50057",
                padding: "10px 20px",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#ff4081", transform: "scale(1.05)" },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
