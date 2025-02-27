import { FormValues } from "@/app/login/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch("http://localhost:5000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const loginInfo = await res.json();
  return loginInfo;
};
