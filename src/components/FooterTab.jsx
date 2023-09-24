import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CloudPath from "../assets/images/i_cloud_b.png";
import HomePath from "../assets/images/i_home_b.png";
import StarPath from "../assets/images/i_star_b.png";
import ActiveCloudPath from "../assets/images/i_cloud_g.png";
import ActiveHomePath from "../assets/images/i_home_g.png";
import ActiveStarPath from "../assets/images/i_star_g.png";

function FooterTab() {
  return (
    <Footer>
      <Tab to="/">
        <CloudIcon></CloudIcon>모든 지역
      </Tab>
      <Tab to="/my">
        <HomeIcon></HomeIcon>내 지역
      </Tab>
      <Tab to="/favorite">
        <StarIcon></StarIcon>즐겨찾기
      </Tab>
    </Footer>
  );
}

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 12px 20px #888;
`;

const Icon = styled.i`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all ease-in 0.5s;
`;

const CloudIcon = styled(Icon)`
  background-image: url(${CloudPath});
`;

const HomeIcon = styled(Icon)`
  background-image: url(${HomePath});
`;

const StarIcon = styled(Icon)`
  background-image: url(${StarPath});
`;

const Tab = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 33%;
  text-align: center;
  transition: all ease-in 0.5s;
  &::after {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: transparent;
    content: "";
  }
  &.active {
    color: #64ccc5;
    &::after {
      background-color: #64ccc5;
    }
    ${CloudIcon} {
      background-image: url(${ActiveCloudPath});
    }
    ${HomeIcon} {
      background-image: url(${ActiveHomePath});
    }
    ${StarIcon} {
      background-image: url(${ActiveStarPath});
    }
  }
`;

export default FooterTab;
