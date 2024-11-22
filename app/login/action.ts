"use server";

export async function handleForm(prevState: any, data: FormData) {
  return {
    errors: ["wrong password", "password too short"],
  };
}
