import Box from './Box';

const BoxContainer = () => {
  return ( 
    <div className="box-container">
      <Box 
        backgroundImage="../img/project.jpg"
        title="Kv Skalman & Sparvel"
       />
      <Box 
      backgroundImage = "../img/farsta.jpg"
      title = "Farsta Sim- och Idrottshall"
      />
      <Box
        backgroundImage="../img/tofsingedalen.jpg"
        title="Kv Töfsingdalen"
       />
    </div>
   );
}
 
export default BoxContainer;