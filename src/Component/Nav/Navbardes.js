import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbardes() {
  return (
    <>
      <Navbar className='navBar' >
        <Container>
          <Nav className="me-auto">
            <Link className='link' to="/">Login</Link>
            <Link className='link' to="/quizStart">QuizStart</Link>
            {/* <Link className='link' to="/htmlQuiz">HtmlQuestion</Link> */}
            <Link className='link' to="/cssQuiz">cssQuestion</Link>
          
            <Link className='link' to="/finalPage">Final</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbardes;