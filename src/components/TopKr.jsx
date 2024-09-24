import React, { useEffect, useState } from 'react';
import axios from 'axios';

// news api kr 지원 X - naver news api 테스트 진행 중
export default function TopKr() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/news');
                setItems(response.data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>News Articles</h1>
            {items.map(item => (
                <div key={item.link}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                    <p><strong>Published at:</strong> {item.pubDate}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}