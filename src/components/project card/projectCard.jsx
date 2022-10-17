import classes from "./projectCard.module.css";

import React from "react";

const ProjectCard = (props) => {
  return (
    <article className={classes.container}>
      <picture className={classes.card_img}>
        <img src={props.img} alt="img" />
      </picture>
      <section className={classes.card_detail}>
        <h3 className={classes.card_title}>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <a href={props.web} className={classes.card_link} target="_blank" rel="noreferrer">
          Visit
        </a>
        {/* <a href={props.web2} className={classes.card_link} target="_blank" rel="noreferrer">
          Code
        </a> */}
      </section>
    </article>
  );
};

export default ProjectCard;
