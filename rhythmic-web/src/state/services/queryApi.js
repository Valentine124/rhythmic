import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CLIENT_ID, CLIENT_SECRETE } from "../../utils/api-keys";

const useSearchdata = (key, searchName, searchType) => {

  const [token, setToken] = useState('');

  useEffect(() => {
    const url = "https://accounts.spotify.com/api/token"
    const body = "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRETE;
  
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body,
    }).then(res => {
      return res.json()
    }).then(accessToken => {
      let tk = accessToken.access_token;
      setToken(tk);
    })
  }, [])

  const { data, error, isLoading } = useQuery({
    queryKey: [key, token],
    queryFn: () =>
      fetch(`https://api.spotify.com/v1/search?q=${searchName}&type=${searchType}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(res => {
        return res.json();
      }).then(response => {
        return JSON.stringify(response);
      })
  })

  return { data, error, isLoading };
}

export default useSearchdata;