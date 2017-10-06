import React from "react";
import { Item } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
const items = [
  {
    image: "",
    header: (
      <Header as="a" href="http://github.com/a-ns/trivianation" target="_blank">
        TriviaNation
      </Header>
    ),
    description:
      "Education game where students form teams, answer questions to claim tiles.",
    extra: "C# / Javascript / Node "
  },
  {
    image: "",
    header: (
      <Header as="a" href="http://github.com/a-ns/andante" target="_blank">
        Andante{" "}
      </Header>
    ),
    description:
      "Musical education game developed in a weekend at the university's first hackathon. Andante is multiple choice game learning about musical concepts such as pitches, notes, keys, etc.",
    extra: "Java"
  }
];
const Projects = () => <Item.Group items={items} />;

export default Projects;
