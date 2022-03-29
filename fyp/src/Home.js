import React, {useEffect, useState} from 'react';

export default function Home(){

    const [results, setResults] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'f1-news.p.rapidapi.com',
            'X-RapidAPI-Key': '0c95c310c4mshab7ea109206920dp127537jsn00aba7a3f891'
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       await fetch('https://f1-news.p.rapidapi.com/news', options)
    //       .then(response => response.text())
    //       .then(response2 => JSON.parse(response2))
    //       .then(result => setResults(result))
    //       .catch(error => console.log('error', error));
    //     };
    //     fetchData();
    // }, []);

    // setTimeout(()=> {
    //     var response = fetch(`${results[0].url}`);
    //     var data = response;
    //     console.log(data);
    // }, 3000);
    

    console.log(results);

    return(
        <div>
            {results.slice(0).reverse().map(element => {
              return (
                  <div>
                      <h1>{element.title}</h1>
                      <p>{element.url}</p>
                  </div>
              )
            })}
        </div>
    )
}

