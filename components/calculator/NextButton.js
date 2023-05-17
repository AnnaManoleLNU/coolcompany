import Button from "../Button";

const NextButton = ({currentStep, totalSteps, onNextClick}) => {
  return ( 
    <div>
      <Button buttonText={'Nästa'} onClick={onNextClick}  />
    </div>
   );
}
 
export default NextButton;