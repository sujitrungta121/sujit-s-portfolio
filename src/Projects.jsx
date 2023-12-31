import React from "react";
import { H2, H3, H6 } from "./common/ui/Headings";
import styled from "styled-components";
import FlexBox from "./common/ui/FlexBox";
import expenseTracker from "./assets/expense-tracker.jpg";
import githubUser from "./assets/github-userfinder.jpg";
import weatherApp from "./assets/Weather application.jpg";
import musicApp from "./assets/music-app.jpg";
const Container = styled(FlexBox)`
  width: 100%;
  padding-top: 10px;
  height: 54.925rem;
  overflow: hidden;
  background-color: blue;
  flex-direction: column;
`;
const Img = styled.img`
  width: 25rem;
  height: 21rem;
`;

const Body = styled(FlexBox)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  column-gap:20px;
  padding-top: 50px;
`;
const Project = styled(FlexBox)`
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
`;
const Projects = () => {
  return (
    <Container>
      <H2 color="white" textAlign="center">
        PROJECTS
      </H2>
      <Body>
      <Project>
          <Img src={expenseTracker} alt="no image" width="40px" height="40px" />
          <H6>Expense Tracker</H6>
        </Project>
        <Project>
          <Img src={githubUser} alt="no image" width="40px" height="40px" />
          <H6>Github User</H6>
        </Project>
        <Project>
          <Img src={musicApp} alt="no image" width="40px" height="40px" />
          <H6>Music App</H6>
        </Project>
        <Project>
          <Img src={weatherApp} alt="no image" width="40px" height="40px" />
          <H6>Weather Application</H6>
        </Project>

      </Body>
    </Container>
  );
};
export default Projects;
