import * as React from "react";
import logo from "../../assets/images/traft.png";
import styled, { theme } from "../../assets/theme";
import { login } from "../../components/Formatic";

interface IProps {}

const Nav = styled.nav`
  background-color: ${theme.primary};
  height: 10vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.a`
  width: 200px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 12px 27px;
  font-size: 1rem;
  color: white;
  font-weight: 700;
  background-image: radial-gradient(
    circle farthest-corner at 1.2% 5.3%,
    rgba(255, 85, 166, 1) 0%,
    rgba(255, 154, 98, 1) 100.2%
  );
  cursor: pointer;
`;

const Navigation: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
        <div className="nav-img">
          <img alt={logo} src={logo} style={{ width: "157px" }} />
        </div>
        <div className="nav-items">
          <Button onClick={() => login()}>Login</Button>
        </div>
      </Nav>
      {children}
    </React.Fragment>
  );
};

export default Navigation;
