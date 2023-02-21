import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
