const InfoText = ({ text }) => {
  return (
    <div className="font-mono mt-10">
      {
        text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      }

    </div>
  )
}

export default InfoText
