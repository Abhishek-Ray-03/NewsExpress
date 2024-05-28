import image from '../assets/news.jpeg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3  my-3 mx-3 px-2 py-2" style={{maxWidth:"20rem"}}>
  <img src={src?src:image} style={{height:"15rem", maxWidth:"20rem" }} className="card-img-top" alt="..."/>
  <div className="card-body mx-auto" >
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News says that something special happened.Do check it out to get some insights and stay updated!"
    } </p>
    <a href= {url} className="btn btn-primary">Read More...</a>
  </div>
</div>
  )
};
export default NewsItem;