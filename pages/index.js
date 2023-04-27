import Hero from '../components/Hero'
import Article from '../components/Article'


/**
 * Home page.
 *
 * @returns {HTMLElement} - Home page.
 */
export default function Home() {
  return (
    <>
      <Hero heading='Allel Elektrokonsult AB' message='En kostnadseffektiv el-konsult i Stockholm med anor' />

      {/* <Article
        title='Projektering'
        content={['Vi projekterar och har erfarenhet av det mesta nyproduktion som ombyggnad till renoveringar. Allt från enklare "pekjobb" till hela bostadskvarter, skolor, badanläggningar, idrottsanläggningar. Vi räds inget och glädjer oss åt nya utmaningar!']}
      />
      <Article
        title='Kostnadseffektiv'
        content={['Tack vare vår platta organisation, högpresterande personal med bred kompetens och minimala omkostnader kan vi erbjuda ett av marknadens bästa priser på våra tjänster!']}
      />
      <Article
        title='Kontrolluppdrag'
        content={['Vi har lång erfarenhet av kontrolluppdrag och elbesiktningar. Alla typer av entreprenader och även projekteringar kan vi ha kontroll över. Vi utför både förbesiktningar och slutbesiktningar och levererar enkla och tydliga protokoll. Vi kan granska fakturor och äta-arbeten, vi vet vad saker ska kosta!']}
      /> */}
    </>
  )
}
