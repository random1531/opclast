import Cookies from "js-cookie"

export default async function Loginuser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const formData = {
    email,
    password,
  };
  try {
    const res = await fetch(`http://localhost:5000/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result?.token) {
      localStorage.setItem("tokenl", result.token);
    Cookies.set('token', result.token, {
        expires: new Date(Date.now() + 60 * 60 * 1000), 
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      Cookies.set('uid', String(result.user.id), {
        expires: new Date(Date.now() + 60 * 60 * 1000), 
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      window.location.replace("/");
      
    }
    console.log(result.ok);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function RegisterUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const formData = {
    name: name,
    email: email,
    password: password,
    role: "client",
  };
  try {
    const res = await fetch(`http://localhost:5000/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
