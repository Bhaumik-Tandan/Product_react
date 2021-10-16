import {Card} from "react-bootstrap";
import React from 'react';
import Status from "./Status/status";
import Quantity from "./Quantity/quantity";

function CustomerOrder(props) {
    const data=props.data;
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data["name"]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Order Id {data["orderId"]}</Card.Subtitle>
                    <Card.Text>
                        <center><Quantity orderId={data["orderId"]} quantity={data["quantity"]}/></center>
                    </Card.Text>
                    <Card.Text>
                        <div><b>Product Id: </b>{data["productId"]}</div>
                    </Card.Text>
                    <Card.Text>
                       <center> <Status status={data["status"]} orderId={data["orderId"]}/></center>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomerOrder;
