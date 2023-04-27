import Article from "@/components/Article"
import Form from "@/components/Form"

/**
 * The contact page.
 *
 * @returns {HTMLElement} - Contact page.
 */
const Contact = () => {
  return (
    <div className="contact">


      <Article 
      title="Kontoret"
      content={[
        "Allel Elektrokonsult AB, Dianavägen 13, 115 42 Stockholm",
        "08-663 88 99",
        "allel@allel.se"
      ]} />

      <Article
      title="Leif Eriksson"
      content={[
        "Delägare, elingenjör, besiktningsman, autoriserad av Elektriska Nämnden",
        "070-325 73 96",
        "leif@allel.se"
      ]} />

      <Article
      title="Jonas Holmberg"
      content={[
        "Delägare, elingenjör, besiktningsman",
        "070-325 05 14",
        "jonas@allel.se"
      ]} />

      <Form />
    </div>
  )
}

export default Contact
