import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button } from "@mui/material";
import styled from "styled-components";
import Students from "../assets/students.svg";


import { LightPurpleButton } from "../components/buttonStyles";

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
        <img
            src={Students}
            alt="students"
            style={{ width: "100%" }}
            className="animate__animated animate__slower animate__delay-3s animate__fadeIn"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle className="animate__animated animate__slower animate__backInLeft">
              Welcome to
              <br />
              ClassMaster
              <br />
            </StyledTitle>
            <StyledText className="animate__animated animate__slower animate__backInLeft">
            Streamline daily tasks, manage student records, track academic progress, 
            and communicate effortlessly with parents and staff. Empowering schools 
            to focus on what truly matters: educating the next generation. <br/>

            Effortlessly manage your school tasks and focus on a education centric development of your students.

            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <LightPurpleButton
                  className="animate__animated animate__slower animate__delay-3s animate__fadeIn"
                  variant="contained"
                  fullWidth
                >
                  Login
                </LightPurpleButton>
              </StyledLink>
              <StyledLink
                className="animate__animated animate__slower animate__delay-3s animate__fadeIn"
                to="/chooseasguest"
              >
                <Button
                  id="home-btn"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mt: 2,
                    mb: 3,
                    color: "#7f56da",
                    borderColor: "#7f56da",
                  }}
                >
                  Login as Guest
                </Button>
              </StyledLink>
              <StyledText>
                Don't have an account?{" "}
                <Link to="/Adminregister" style={{ color: "#000080" }}>
                <b>Sign up</b>
                </Link>
              </StyledText>
            </StyledBox>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
