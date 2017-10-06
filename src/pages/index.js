import React from "react";
import Link from "gatsby-link";

import { Card, Icon, Image } from "semantic-ui-react";
const IndexPage = () => (
  <Card color="green" centered>
    <Card.Content>
      <Card.Header>Alex Lindemann</Card.Header>
      <Card.Meta>
        <span>University of West Florida 2017</span>
      </Card.Meta>
      <Card.Description>
        Alex is a graduate of University of West Florida. He earned a
        baccalaureate in Computer Science, minoring in Mathematics.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default IndexPage;
