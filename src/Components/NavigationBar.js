import {Navbar, Nav} from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const NavigationBar = () => {
  return (
    <Navbar>
    <Navbar.Brand>Coursebook</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Menu title="Contact">
          <Nav.Item>tahmidmahin1729@gmail.com</Nav.Item>
          <Nav.Item>01632037012</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
  )
}

export default NavigationBar
