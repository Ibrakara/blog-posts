import React from "react";
import { Col } from "@canonical/react-components";

function CardComp(props) {
  const topic =
    props.data._embedded["wp:term"][2][0] === undefined
      ? "Not found"
      : props.data._embedded["wp:term"][2][0].name;
  const imgUrl = props.data.featured_media;
  const articleLink = props.data.link;
  const articleHeading = props.data.title.rendered;
  const articleAuthorName = props.data._embedded.author[0].name;
  const articleAuthorLink = props.data._embedded.author[0].link;
  const articleDate = Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  }).format(new Date(props.data.date));
  return (
    <Col className="p-card" size={4}>
      <h5 className="p-card__title p-muted-heading">{topic}</h5>
      <div className="p-card__content">
        <a className="" href={articleLink}>
          <img src={imgUrl} height="185" alt="thumb nail" />
        </a>
        <h4 className="p-heading--four">
          <a href={articleLink}>{articleHeading}</a>
        </h4>
        <em>
          By <a href={articleAuthorLink}>{articleAuthorName}</a> on{" "}
          {articleDate}
        </em>
      </div>
      <p className="footer p-card__footer">Article</p>
    </Col>
  );
}

export default CardComp;
