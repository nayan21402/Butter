import MyComponent from './MyComponent/main';
import {Routes, Route } from 'react-router-dom';
import Warehouse from './MyComponent/components/Warehouse';
import { table, tbody, thead, Navbar, Nav, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Warehouse_login from './MyComponent/components/Warehouse_login';
import Shop_login from './MyComponent/components/Shop_login';
import Learn_more from './MyComponent/components/Learn_more';
import '../src/nav.css';
function App() {
  return (
    <>
      <Navbar >
        <Navbar.Brand href="#home"> ButterMeUp</Navbar.Brand>
        <Nav id="navv">
          <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link href="#warehouse"><Link to='/warehouse'>Warehouse</Link></Nav.Link>
          <Nav.Link href="#store"><Link to='/store'>Store</Link></Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path='/' element={<MyComponent />}></Route>;
        <Route path='/warehouse' element={<Warehouse_login />}></Route>
        <Route path='/store' element={<Shop_login />}></Route>
        <Route path='/learn_more' element={<Learn_more />}></Route>

      </Routes>
    </>
    
  );
}


export default App;
