import { CLIENT_SECRETE, CLIENT_ID } from "./api-keys";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const [token, setToken] = useState("")

function apiToken() {

  const url = "https://accounts.spotify.com/api/token"
  const body = "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRETE;

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body,
    }).then(res => {
      return res.json()
    }).then(accessToken => {
      setToken(accessToken.access_token)
    })

  }, [])
}

export default function searchData (name="", type=[]) {
  if (name === "" && type === undefined) {
    throw Error("Name and type can't be empty");
  }

  /* Set the token state */
  apiToken();

  const {isPending, error, data} = useQuery({
    queryKey: ['musicDatas', token],
    queryFn: () => 
      fetch(`https://api.spotify.com/v1/search?q=${name}&type=${type}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }).then(res => {
        console.log(token);
        return res.json();
      }).then (value => {
        return JSON.stringify(value)
      })
  })

  console.log(data);

  return data;
}