import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer"; 
import { keyframes } from "@emotion/react"; // For animations

// Keyframe animation to slide in from top
const slideInFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Keyframe animation to slide in from left
const slideInFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Keyframe animation to slide in from right
const slideInFromRight = keyframes`
  0% { opacity: 0; transform: translateX(100px); }
  100% { opacity: 1; transform: translateX(0); }
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
      {/* Background Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: { xs: "150px", lg: "300px" },
          height: { xs: "150px", lg: "300px" },
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
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
          ref={ref}
          sx={{
            animation: inView ? `${slideInFromLeft} 1.5s ease-out` : "none",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              margin: "auto",
              overflow: "hidden",
              border: "10px solid",
              borderImage: "linear-gradient(145deg, #0f0c29, #302b63, #24243e) 1",
              padding: "10px",
            }}
          >
            <img
              src="./assets/about.jpg"
              alt="About Picture"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* Right Section with Text and Button */}
        <Grid item xs={12} md={6} ref={ref}>
          {/* Animated Typography for the Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem" },
              animation: inView ? `${slideInFromTop} 1.5s ease-out` : "none",
            }}
          >
            About Me
          </Typography>

          {/* Animated Body Text */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.8,
              borderLeft: "3px solid #6200ea",
              paddingLeft: "1rem",
              animation: inView ? `${slideInFromTop} 2s ease-out` : "none",
            }}
          >
As a proficient Software Engineer, I bring a wealth of experience and expertise in building dynamic, efficient, and scalable web applications. My technical acumen spans across frontend development, where I excel in crafting user-friendly interfaces, and backend engineering, where I design robust, secure, and efficient server-side solutions. I am particularly adept at working with modern frameworks and libraries, leveraging technologies such as React, MongoDB, Firebase, and Material-UI to deliver seamless and responsive user experiences.
My background includes designing and implementing complex application features, including interactive user interfaces, authentication workflows, and data management systems. I am skilled in using RESTful APIs, handling real-time data, and integrating third-party services to enhance application functionality. I prioritize clean, maintainable code and advocate for best practices in development.
My experience is enriched by working on real-world projects, such as developing eCommerce platforms and creating dynamic user management dashboards. I am passionate about ensuring the integrity of data, focusing on secure user authentication, and integrating cloud storage solutions such as Firebase and MongoDB efficiently.

With a hands-on approach and a problem-solving mindset, I thrive in collaborative environments where innovation and attention to detail are paramount. I am committed to delivering impactful software solutions that drive results and enhance user experiences.
          </Typography>

          {/* Animated Button */}
          <Button
  component="a" 
  href="mailto:nnorompeace14@gmail.com?subject=Contact%20from%20Your%20Website&body=Hello%20there%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you." 
  variant="contained"
  sx={{
    backgroundColor: "#f50057",
    padding: "10px 20px",
    fontSize: "1rem",
    animation: inView ? `${slideInFromRight} 2.5s ease-out` : "none",
    "&:hover": { backgroundColor: "#ff4081", transform: "scale(1.05)" },
  }}
>
  Contact Me
</Button>

        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
