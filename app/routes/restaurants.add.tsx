import { Form, redirect } from "@remix-run/react";
import { restoNames } from "../services/db.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  restoNames.push(formData.get("resto") as string);

  throw redirect("/restaurants");
};

export default function Add() {
  return (
    <div className="font-sans p-4 bg-violet-100">
      <Form method="post" action="/restaurants/add">
        <input name="resto" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
