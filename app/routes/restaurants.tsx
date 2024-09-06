import { json, Link, Outlet, useLoaderData } from "@remix-run/react";
import { restoNames } from "../services/db.server";

export const loader = () => {
  const title = "Restaurants";

  const restaurants = restoNames;

  return json({ title, restaurants });
};

export default function Restaurants() {
  const { title, restaurants } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4 bg-green-100">
      <div>{title}</div>
      {JSON.stringify(restaurants)}
      <div>
        <Link to="/restaurants/add">Add</Link>
      </div>
      <Outlet />
    </div>
  );
}
