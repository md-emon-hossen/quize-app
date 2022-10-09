import '../css/container.css';

function Container({ children }) {
    return <>
        <main className="main">
            <div className="container">
                {children}
            </div>
        </main>
    </>
}
export default Container;