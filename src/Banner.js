const Banner = (props) => {
  const bannerStyle = {
    backgroundImage: `url(${props.backgroundImage})`
  }
  return ( 
    <div className="banner" style={bannerStyle}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </div>
   );
}
 
export default Banner;