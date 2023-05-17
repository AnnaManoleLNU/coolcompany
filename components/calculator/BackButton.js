import Button from "../Button";

const BackButton = ({onBackClick}) => {

  return ( 
    <div>
      <Button buttonText={'Tillbaka'} onClick={onBackClick} />
    </div>
   );
}
 
export default BackButton;