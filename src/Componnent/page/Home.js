import Container from "../Container";
import Footer from "../Footer";
import Nav from "../Nav";
import Vedios from "../Vedios";

function Home() {
    return <>
        <Nav show="Signup" re='/signup' />
        <Container>
            <Vedios />
        </Container>
        <Footer />
    </>
}

export default Home;