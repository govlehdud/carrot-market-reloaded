"use server";

import { redirect } from "next/navigation";

export async function handleForm(prevState: any, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
}
