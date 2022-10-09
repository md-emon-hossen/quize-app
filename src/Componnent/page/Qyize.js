import Container from "../Container";
import Footer from "../Footer";
import Nav from "../Nav";
import QCom from '../QComponent';
function Quize() {
    return <>
        <Nav re='/login' show='LogOut' />
        <Container>
            <QCom />
        </Container>/>
        <Footer />

    </>
}
export default Quize;