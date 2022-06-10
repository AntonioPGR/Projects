import NavMenu from './navMenu.js';
import ImagesContainer from './ImagesContainer.js'
import { StyledMain, ArticlesSection } from './main-style.js'
import { getImages } from '../../api/searchImages.js';
import React, { useState } from 'react';

import hurrycaneMap from "../../assets/hurrycaneImages/hurrycane map.jpeg"
import furacao from '../../assets/hurrycaneImages/furacao.webp'
import ondeOcorre from '../../assets/hurrycaneImages/diferenca-entre-tufoes-ciclones-furacoes.webp'
import mexico from '../../assets/hurrycaneImages/furacoes mexico.jpg'

function Main(props){ 
   const [ImagesJson, setImagesJson] = useState([])

   const searchImages = (searchQuery) => {
      getImages(searchQuery)
      .then(
         res => setImagesJson(res)
      )
   }

   return (
      <StyledMain>
         <header>
            <h1>Furacões</h1>
         </header>

         {/* <NavMenu searchImages={(sq) => searchImages(sq)} />
         
         <ImagesContainer images={ImagesJson} /> */}

         <ArticlesSection>
            <article>
               <h2>O que é o Hurricane Mapping?</h2>
               <p>O Hurricane mapping é um aplicativo pensado para alertar sobre furacões que acontecem no México, como eles ocorrem, formas de se proteger e alertar quando eles estão ocorrendo.</p>
               <div><img src={hurrycaneMap} /></div>
            </article>

            <article>
               <h2>Mas afinal o que é um furacão?</h2>
               <p>Os furacões nascem no meio dos oceanos, em locais de pouco vento e águas quentes, acima de 27 °C. Nessas áreas, a evaporação é intensa, a água do mar esquenta, vira vapor e forma grandes nuvens. É assim que começa.</p>
               <div>
                  <img alt="" src={furacao} />
               </div>
            </article>

            <article>
               <h2>Onde ocorre o furacão?</h2>
               <p>No oceano Atlântico, nas latitudes tropicais, tem a temperatura ideal para a formação de furacões por isso as regiões que estão perto como o Caribe, México e Estados Unidos sejam mais propícias para a sua formação</p>
               <div>
                  <img src={ondeOcorre} />
               </div>
            </article>

            <article>
               <h2>Aplicativo é focado em mapear qual área?</h2>
               <p>Apesar de o furacão acontecer em diversos países do mundo, nosso aplicativo é focado especialmente no México, pois acreditamos que focando em uma menor área as informações são dadas com mais precisão</p>
               <div>
                  <img src={mexico} />
               </div>
            </article>
         </ArticlesSection>

      </StyledMain>
   )
}

export default Main;