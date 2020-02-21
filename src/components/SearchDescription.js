import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { Rate } from "antd";
import "./SearchDescription.scss";
import axios from "axios";
import restaurant from "../data/resdatabase";
import { Container } from "react-bootstrap";
// import { bounce } from "react-animations";
// import { styled, keyframes } from 'styled-components';


 

const divStyle = {
  padding: "0.5em"
};
// const Bounce = styled.div `animation : 2s ${keyframes `${bounce}`} infinite`;

const SearchDescription = props => {
  return (
    // <Bounce>
    <Container>
    <div className="search-container-style">
    <div className="search-container" style={divStyle}>
      <div class="clearfix float-my-children">
        <Image src={props.thumb} fluid />
      </div> 

      <div className="clearfix search-name">
        <h1>{props.name}</h1>
      </div>

      <div className="clearfix search-desc">
        <Row>
          <Col>
            <p>
              <b>Cuisine: </b>
              {props.cuisine}
            </p>
            <p>
              <b>Hours: </b>
              {props.hours}
            </p>
            <p>
              <b>Cost for two persons: </b>
              {props.averageCost} $
            </p>
            <p>
              <b>Address: </b>
              {props.address}
            </p>
            </Col>
          </Row>
      </div>
      
      <div className="clearfix search-rating">
        <Row>
          <Col md="auto">
            <Rate 
              disabled
              allowHalf
              defaultValue={Number(props.avgRating)}
            />
          </Col>
          <Col md="auto">
            <b>
              {Number(props.avgRating)}
            </b>
          </Col>
          <Col md="auto">
            <b>
            </b>
          </Col>
        </Row>
      </div>
    </div>
    </div>
    </Container>
    // </Bounce>

  );
};

export default SearchDescription;
