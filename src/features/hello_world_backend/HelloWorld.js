import React, { useState, useEffect } from 'react';

/*
This was our first connection to our backend

 */

const HelloWorld = () => {
  const [ ourData, setOurData] = useState("")
  useEffect((() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // this gets around cors errors
    const url = "https://pacific-atoll-67065.herokuapp.com/";
    fetch(proxyurl + url)
      .then(x => x.text()) // this is needed until we change response to json
      .then((x) => {
        setOurData(x)
      })
      .catch(x => console.log('!!! x failed',x))
  }) ,[])
  return (
    <span>{ourData}</span>
  )
}

export default HelloWorld;
