import spinner from "./gif/spinner.gif"

const Loading = ({ show }) => {
    return (
        <>
            {show &&
                <div className="position-fixed top-0 vh-100 vw-100 d-flex align-items-center justify-content-center "
                    style={{ zIndex: 100, backgroundColor: "#ccccccc0" }}>
                    <img src={spinner} alt="Loading"/> 
                    <h1>LOADING...</h1>
                </div>
            }
        </>
    );
}

export default Loading;