import '../css/illustation.css';
function Illustation({ pic }) {
    return <>
        <div className="illustration">
            <img src={pic} alt="login" />
        </div>
    </>
}
export default Illustation;