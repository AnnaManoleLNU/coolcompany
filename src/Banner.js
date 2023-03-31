const Banner = (props) => {
  return ( 
    <div className="banner">
      <h1 className="logo">{props.title}</h1>
      <h2>{props.description}</h2>
      </div>
   );
}
 
export default Banner;