import { CLIENT_SECRETE, CLIENT_ID } from "./api-keys";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function searchData (name="", type=[]) {
  if (name === "" && type === undefined) {
    throw Error("Name and type can't be empty");
  }

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