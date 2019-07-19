import * as React from "react";
import { BOXES } from "../../assets/helper";
import styled from "../../assets/theme";
import Navigation from "../Navigation";

interface IAuthProps {}

const Header = styled.div`
  text-align: center;
  padding: 60px 0;
  p {
    padding-top: 1.4rem;
    color: gray;
    font-weight: 700;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Box = styled.div`
  ${props => props.about};
  width: 250px;
  height: 250px;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    padding-top: 25px;
    max-width: 160px;
    text-align: center;
  }
`;

const Authentication: React.FC<IAuthProps> = props => {
  return (
    <Navigation>
      <Header>
        <h1>Welcome to Traft a React Demo using Fortmatic's api</h1>
        <p>By using a simple smart contract you can...</p>
      </Header>
      <Container>
        {BOXES.map(({ title, logo, id, image }) => {
          return (
            <Box key={id} about={image}>
              <img
                alt={logo}
                src={logo}
                style={{
                  width: "56px"
                }}
              />
              <h4>{title}</h4>
            </Box>
          );
        })}
      </Container>
    </Navigation>
  );
};

export default Authentication;
