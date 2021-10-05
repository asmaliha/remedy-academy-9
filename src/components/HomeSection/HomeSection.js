import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './HomeSection.css'

const HomeSection = () => {
    const [section, setSection] = useState([]);

    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setSection(data));
    }, [])

    return (
        <div className="section">
            {section.map(info =>
                <Card>
                    <Card.Img className="top" src={info.img} fluid />
                    <Card.Body>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>
                            Price: {info.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>)}

        </div>
    );
};

export default HomeSection;