import React, {useEffect, useState} from 'react';
import './Home.css';
import {Card} from 'react-bootstrap';

export default function Home(){

    const [search, setSearch] = useState("Formula1");
    const [results, setResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': '0c95c310c4mshab7ea109206920dp127537jsn00aba7a3f891'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${search}&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
            .then(response => response.json())
            .then(result => setResults(result.value))
            .catch(err => console.error(err));
        };
        fetchData();
    }, []);

    // setTimeout(()=> {
    //     var response = fetch(`${results[0].url}`);
    //     var data = response;
    //     console.log(data);
    // }, 3000);

    // .slice(0).reverse()

    console.log(results);

    return(
        <div>
            <br></br>
            {results.map(element => {
              return (
                <Card className='card' border="danger">
                    <Card.Img className='img' variant="top" style={{ height: "20%", width: "20%"}} src={element.image.thumbnail.contentUrl}/>
                    <Card.Body>
                        <Card.Title key={element.name}>
                            {element.name}
                        </Card.Title>
                        <Card.Text key={element.description}>
                            {element.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
              )
            })}
        </div>
    )
}

