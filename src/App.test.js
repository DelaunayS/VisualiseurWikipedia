import { act } from 'react-dom/test-utils';
import React from 'react'
import ReactDOM from 'react-dom';
import AleatoireWiki from './components/aleatoireWiki'
import SearchBox from './components/searchBox'

let container

beforeEach ( ()=>{
  container= document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it ("afficher l'élément AleatoireWiki", () => {
  // Teste l'affichage de l'élément AléatoireWiki
  act (()=>{
    ReactDOM.render(<AleatoireWiki/>, container)
  })

})

it ("afficher l'élément SearchBox", () => {
  // Teste l'affichage de l'élément SearchBox
  act (()=>{
    ReactDOM.render(<SearchBox/>, container)
  })

})