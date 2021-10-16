import React, { useState } from "react";

function SearchBox () {

    const url='https://fr.wikipedia.org/w/api.php?&origin=*&action=query&limit=5&list=search&exsentences=1&format=json&srsearch='
    
    const [search,setSearch]=useState('')
    const [result,setResult]=useState([])
    
    const deleteBalise = (sentence)=>{
        /*élimination des balises HTML*/
        let newSentence=sentence.replace(/<[^>]+>/g, '')                  
        /* retourne la 1ère phrase avec une majuscule*/
        return newSentence[0].toUpperCase()+newSentence.slice(1)+'...'
    }

    const WikiSearch = (event)=>{

        if  (event.charCode === 13){                   
            fetch(`${url}${search}`)
            .then((response)=>response.json())
            .then(async (dataJson) => {   
            setResult(await dataJson.query.search)   
            setSearch('')                                 
            })                   
            .catch(console.error)
        }
    }    
    
    return(
        <div>
            <div className="container-fluid m-4 text-center searchBoxInput">                       
                <input                
                id="search"
                onKeyPress={WikiSearch}
                value={search}
                onChange={event=>setSearch(event.target.value)}               
                placeholder="Saisir ici la recherche..."/>  
            </div>

            {result!==''&&
                    <div id="resultBox" className="container mx-2">
                        {result.map((data,index)=>(
                            <ul key ={index}>
                                <div className="resultArea m-1 p-1">
                                <a className="result_a" href={`https://fr.wikipedia.org/?curid=${data.pageid}`}>
                                    <h5 className="resultTitle mx-4">{data.title}</h5>
                                    <p className="resultText mx-4">{deleteBalise(data.snippet)}</p>
                                </a>  
                                </div>
                            </ul>                            
                        ))}
                    </div>
                }
        </div>    
    )
}

export default SearchBox