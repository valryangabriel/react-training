import React, {useEffect, useState} from 'react';

export function FetchData() {
  const [name, setName] = useState({
    title : "",
    first : "",
    last : ""
  });

  const getService1 = async () => {
    const res = await fetch("https://randomuser.me/api/");
  
    const json = await res.json();

    setName(json.results[0].name);
  }
  useEffect(async () => {
    getService1();
  }, []);

  return (
    <div>
      {`The person name is : ${name.title} ${name.first} ${name.last}`}
    </div>
  )
}