import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Link to="/restaurants">Go to Restaurants</Link>
    </div>
  );
}
