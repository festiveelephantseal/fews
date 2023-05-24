const ArticleCard = ({ title, link, pic, width, height }) => {
  return (
    <div className="articlecard">
      <img src={pic} alt="cover" />
      <a href={link}>
        <h2>{title}</h2>{" "}
      </a>
    </div>
  );
};

export default ArticleCard;
