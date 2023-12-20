import Head from 'next/head'
import LangeIsologo from '/public/graphics/lange_isologo.svg'
import MuestraLogo from '/public/graphics/logo_muestra.svg'
import Gracias from '/public/graphics/gracias.svg'
import DottedLine from '/public/graphics/dotted_line.svg'
import LangeLogo from '/public/graphics/lange_logo.svg'
import IconLocation from '/public/graphics/icon_location.svg'
import IconPhone from '/public/graphics/icon_phone.svg'
import IconWeb from '/public/graphics/icon_web.svg'
import IconEmail from '/public/graphics/icon_email.svg'
import IconInstagram from '/public/graphics/icon_instagram.svg'
import Coreo from '/components/coreo.js'

export default function Home() {

  return (
    <div>
      <Head>
        <title>L&apos;ange | Muestra de Fin de Año 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'flex items-center justify-center'}>
        <div className={'w-11/12 max-w-sm sm:w-96'}>
          <LangeIsologo className={'mt-16 mb-10 mx-auto'} />
          <MuestraLogo className={'my-10 mx-auto'} />

          <div className={'mt-12'}>
          <div className={'mt-10 text-center'}>
              <div className={'lg-bg-grey rounded-md shadow-md my-4 p-6'}>
                <p className={'text-4xl font-medium uppercase lg-text-gold'}>Bella Durmiente</p>
                <p className={'text-2xl font-extralight lg-text-grey'}>La Suite</p>
              </div>
            </div>
            <Coreo
              number='1'
              title='Caperucita Roja y El Lobo'
              profesor='Lorena Gallo.'
              interpretes='Jorgelina Foglia, Raiquen Silequi.'
            />
            <Coreo
              number='2'
              title='Precious Stones'
              profesor='Lorena Gallo.'
              interpretes='Guadalupe Iglesias, María Florencia Bernardez, Anabella Vázquez.'
            />
            <Coreo
              number='3'
              title='Hada Fleur de Farine'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='María Florencia Bernardez.'
            />
            <Coreo
              number='4'
              title='Hada del Temperamento'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='Anabella Vázquez.'
            />
            <Coreo
              number='5'
              title='Hada Lila'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='Guadalupe Iglesias.'
            />
            <Coreo
              number='6'
              title='El Gato con Botas'
              profesor='Lorena Gallo.'
              interpretes='Graciela Rodríguez, Raiquen Silequi.'
            />
            <Coreo
              number='7'
              title='Bodas de Aurora '
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='María Florencia Bernardez.'
            />
            <div className={'py-4 px-2'}>
              <div className={'border border-b border-gray-400 border-dashed'}></div>
            </div>
            <Coreo
              number='8'
              title='Polka'
              profesor='Paula Monteagudo.'
              interpretes='Maite Durán Rodríguez, Luana Moreira Duarte, Rocío Paunovich, Brisa Paunovich.'
            />
            <Coreo
              number='9'
              title='Los del Espacio'
              profesor='Alexandra Brown.'
              interpretes='Lorenzo Alvarez Sorrentino, Francesca Szeitner, Olivia Foti, Delfina María Álvarez, Valentina Kullahian, Victoria Belén Rodríguez, Lupe San Martín, Isabella Curell.'
            />
            <Coreo
              number='10'
              title='Reflejo & Arrancacorazones'
              profesor='Lucila Iglesias.'
              interpretes='Victoria Can Vega, Milena Durán Rodríguez.'
            />
            <Coreo
              number='11'
              title='Napoli'
              profesor='Nelda Pavanello.'
              interpretes='Laura Nazareth Rojas García, Johanna Ciliberto.'
            />
            <Coreo
              number='12'
              title='Dance Magical'
              profesor='Paula Monteagudo.'
              interpretes='Julieta Colimodio, Martina Giménez Figueroa, Antonella Gómez Finucci, Luna Cazaux Lattemann, Francesca Ficarra Koziner, Olivia Boim, Rafaella Argüello.'
            />
            <Coreo
              number='13'
              title='Latinas (Técnica Femenina - Ballroom ABC)'
              profesor='Agustina Méndez.'
              interpretes='Analía Laborato, Antonella Ortiz, Daniela Lencina, Marina Godoy, Martina Padin, Tatiana Bengochea.'
            />
            <Coreo
              number='14'
              title='Raymonda - Variación Acto 3'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='Anabella Vázquez.'
            />
            <Coreo
              number='15'
              title='Clasical Ballet Dúo'
              profesor='Lorena Gallo.'
              interpretes='María Florencia Bernardez, Guadalupe Iglesias.'
            />
            <Coreo
              number='16'
              title='Vals Harry Potter'
              profesor='Paula Monteagudo.'
              interpretes='Julieta Colimodio, Martina Giménez Figueroa, Vera Spaciuk, Luna Cazaux Lattemann, Francesca Ficarra Koziner, Olivia Boim, Rafaella Argüello.'
            />
            <Coreo
              number='17'
              title='Rosa Pastel & Al Fin'
              profesor='Lucila Iglesias.'
              interpretes='Julieta Boquin, Guillermina Laigle Sola.'
            />
            <Coreo
              number='18'
              title='El puntazo de Juan D&apos;sarienzo.'
              profesor='.'
              interpretes='Mariela Curia, José Salinas.'
            />
            <Coreo
              number='19'
              title='Dances of the Dolls'
              profesor='Lorena Gallo.'
              interpretes='Candela Mateo, Jazmín Cazaux Latteman, María de la Paz Ford, Trinidad Movilla, Gisella Cabrera, Carla Cremonese, Johana Ciliberto.'
            />
            <Coreo
              number='20'
              title='Trío'
              profesor='Lorena Gallo.'
              interpretes='Candela Mateo, Jazmín Cazaux Latteman, María de la Paz Ford.'
            />
            <Coreo
              number='21'
              title='Cuarteto'
              profesor='Lorena Gallo.'
              interpretes='Gisella Cabrera, Carla Cremonese, Emilia Mulic, Johana Ciliberto.'
            />
            <Coreo
              number='22'
              title='Solo'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='María de la Paz Ford.'
            />
            <Coreo
              number='23'
              title='Final'
              profesor='Lorena Gallo.'
              interpretes='Carla Cremonese, Candela Mateo, Jazmín Cazaux Latteman, María de la Paz Ford, Gisella Cabrera, Johana Ciliberto, Emilia Mulic.'
            />
            <Coreo
              number='24'
              title='Urban'
              profesor='Alexandra Brown.'
              interpretes='Martina Giménez Figueroa, Milena Durán Rodríguez, Catalina Almendra Paura, Bianca Ornella Guadagnini, María Paula Giardino, Fiorella Logarzo Macarof, Ariana Rainone.'
            />
            <Coreo
              number='25'
              title='Oscuras (Técnico Coreográfico Femenino de Latin)'
              profesor='Agustina Méndez.'
              interpretes='Analía Laborato, Camila Bustos, Cecilia Martinez, Daniela Lencina, Graciela Rodríguez, Julia Fontana, Mariela Curia, Martina Padín, Rosana Yznardo, Salomé Sarabia, Tatiana Bengochea, Victoria Pereira.'
            />
            <Coreo
              number='26'
              title='Kitri - Variación (Don Quijote)'
              profesor='Lorena Gallo.'
              solista='si'
              interpretes='María Florencia Bernardez.'
            />
            <Coreo
              number='27'
              title='Chipolino'
              profesor='Lorena Gallo.'
              interpretes='Anabella Vázquez, Trinidad Movilla.'
            />
            <Coreo
              number='28'
              title='Mix Kpop'
              profesor='Alexandra Brown.'
              interpretes='Catalina Neudeck D&apos;saniello, Martina Giménez Figueroa, Francesca Baldoni, Milena Durán Rodríguez, Catalina Almendra Paura, Bianca Ornella Guadagnini, Coral Casado Brown, Ariana Rainone, Indiana Paz Baglioni, Azul Nailah Sorsaia Franco.'
            />
            <Coreo
              number='29'
              title='Vives en Mi & Acróstico'
              profesor='Lucila Iglesias.'
              interpretes='Micaela Rocío Fonquerny, Melissa Logarzo.'
            />
            <Coreo
              number='30'
              title='Exhibición de Alumnos de Ballroom Dance'
              profesor=' Agustina Méndez.'
              interpretes='Analia Laborato, Antonella Ortiz, Camila Bustos, Cecilia Martínez, Daniela Lencina, Graciela Rodríguez, José
              Salinas, Julia Fontana, Mariela Curia, Marina Godoy, Martina Padin, Raiquen Silecki, Rosana Yznardo, Salomé Sarabia, Tatiana Bengochea,Victoria Pereira, Rocio Monteros, Silvana Cáceres, Silvina Monti Silvina Prette.'
            />
          </div>

          <div className={'my-10'}>
            <Gracias className={'w-7/12'} />
            <p className={'font-light'}>A todos los profesores, alumnos y familias por el apoyo y la confianza de
siempre!</p>
            <p className={'mt-3'}>Lorena.</p>
          </div>

          <DottedLine className="w-full my-2" />

          <footer className={'my-10'}>
            <LangeLogo className={'my-6'}/>
            <ul className={'space-y-3'}>
              <li className={'flex items-center space-x-2'}>
                <IconLocation />
                <a href="https://goo.gl/maps/1LcFcz1BL6PVAY7V6" target='_blank' rel='noreferrer' className= {'font-light lg-text-darkgrey'}>Pedro Lozano 4205, Buenos Aires.</a>
              </li>
              <li className={'flex items-center space-x-2'}>
                <IconPhone />
                <a href="tel:01145687365" className= {'font-light lg-text-darkgrey'}>011.4568.7365</a>
              </li>
              <li className={'flex items-center space-x-2'}>
                <IconWeb />
                <a href="https://www.estudiolange.com.ar" target='_blank' rel='noreferrer' className= {'font-light lg-text-darkgrey'}>www.estudiolange.com.ar</a>
              </li>
              <li className={'flex items-center space-x-2'}>
                <IconEmail />
                <a href="mailto:info@estudiolange.com.ar" className= {'font-light lg-text-darkgrey'}>info@estudiolange.com.ar</a>
              </li>
              <li className={'flex items-center space-x-2'}>
                <IconInstagram />
                <a href="https://www.instagram.com/estudiolange/" target='_blank' rel='noreferrer' className= {'font-light lg-text-darkgrey'}>instagram.com/estudiolange</a>
              </li>
            </ul>
          </footer>

        </div>
      </main>


    </div>
  )
}
