import Loader from "./Loader"
import '../Styles/Loader.css';

const LoaderPage = () => {
    return (
        <div className="loader-page">
            <Loader size={80} />
        </div>
    )
}

export default LoaderPage;