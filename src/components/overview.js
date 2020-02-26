import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rate, Icon } from 'antd';
<<<<<<< HEAD
import "./overview.scss"
const Overview = (props)=>{
  return(
    <div className="overviewBoxWithTabs">
    
      <br/>
=======
const Overview = (props) => {
  return (
    <div>
      <br />
>>>>>>> 43546ec867b57b86456867f49100cace1aa55289
      <Row>
        <Col sm={2}>
          <b>Highlight : </b>
        </Col>
        <Col >
          {props.restaurant.highlights.join(', ')}
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <b>Price range :</b>
        </Col>
        <Col md="4">
          <Rate disabled character='$' color='#08c' defaultValue={props.restaurant.price_range} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <b>Average cost for two persons : </b>
        </Col>
        <Col md="4">
          {props.restaurant.average_cost_for_two} $
      </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <b>Total Reviews : </b>
        </Col>
        <Col md="4">
          {props.restaurant.all_reviews_count}
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <b>Total Rate : </b>
        </Col>
        <Col md="auto" icon="star" >
          {props.restaurant.user_rating.aggregate_rating} <Rate disabled character={<Icon theme="filled" type="star" />} allowHalf defaultValue={props.restaurant.user_rating.aggregate_rating} />
        </Col>
      </Row>
      <br />
      <br />
    </div>

  )
}

export default Overview;