import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="box content has-text-centered is-medium my-6">
            <h2 className="title">Not Found</h2>
            <p>This route is not defined</p>
            <Link>Go to Home</Link>
        </div>
    );
}
