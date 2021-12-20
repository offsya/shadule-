import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row style={{fontSize: 24, font: 'bolt', width: 1000}}>
                <Col md={4}>
                    <h1 className="mt-5 ml-r">Информация</h1>
                    {device.info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 0 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            <span>Тип: {info.title}</span>
                            <span>Преподаватель: {info.description}</span>
                            <h3>Время: {device.price}.</h3>
                        </Row>
                    )}
                </Col>
                <Col md={4}>
                    <Card
                        className="ml-5 d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '0px solid lightgray'}}
                    >

                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
            </Row>
        </Container>
    );
};

export default DevicePage;
