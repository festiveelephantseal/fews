const ArticleCard = ({ title, link, pic }) => {
  return (
    <div className="articlecard">
      <img src={pic} alt="cover" />
      <h2>{title}</h2>
    </div>
  );
};

export default ArticleCard;
