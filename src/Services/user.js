import { getHeaders } from "../Utils/functions";

const url = process.env.REACT_APP_URL_ENDPOINT;

export const getUser = async () => {
    const  response = await fetch(`${url}/users/validate`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const login = async (email, password) => {
    const  response = await fetch(`${url}/users/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({email, password})
    })
    const data = await response.json();
    if (data.success) {
      const token = data.token;
      localStorage.setItem('token', token);
      return data.data;
    } else {
      return null;
    }
}

