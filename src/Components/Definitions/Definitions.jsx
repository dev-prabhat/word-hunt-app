import React from 'react'
import './Definitions.css'

const Definitions = ({word, category, meanings}) => {
    return (
        <div className='meanings'>
            {/* {
                meanings[0] && word && category === "en" && (
                    <audio
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                    style={{backgroundColor:"#fff" , borderRadius: "10px"}} controls>
                       Your Browser doesn't support audio element
                    </audio>
                )
            } */}
            {
                word===""? (<span className='subtitle'>Start by typing a word</span>) : (
                    meanings.map((mean)=>(
                        mean.meanings.map((item)=>(
                            item.definitions.map((def,index)=>(
                                <div key={index} className="singleMean" style={{backgroundColor:"white", color:"black"}}>
                                    <b>{def.definition}</b>
                                    <hr style={{backgroundColor:"black", width:"100%"}}/>
                                    {
                                        def.example && (
                                            <span>
                                                <b>Example :- </b><strong>{def.example}</strong>
                                            </span>
                                        )
                                    }
                                    {
                                        def.synonyms && (
                                            <span>
                                                <b>Synonyms :- </b>
                                                <strong>{def.synonyms.map((s)=>`${s},`)}</strong>
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    )
}

export default Definitions
