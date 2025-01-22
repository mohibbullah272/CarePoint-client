import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Page Not Found!</h1>
            <iframe 
                src="https://lottie.host/embed/11f7cae9-b2bf-4300-a52f-15b0e242d2b8/2oNFSiNd2q.lottie"
                className="w-96 h-96 mb-6"
                title="Not Found Animation"
                frameBorder="0"
            ></iframe>
            <Link to={'/'}>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
