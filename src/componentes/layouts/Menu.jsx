import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu(props) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary mt-02 mb-02">
            <Container>
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clintes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Categorias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Usuários</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Venda</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Estoque</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Compras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Sobre</Nav.Link>
                        <Nav.Link href="#home">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}