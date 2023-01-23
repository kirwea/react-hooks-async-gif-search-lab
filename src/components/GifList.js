import React from "react"

function GifList({gifs}){
    return(
        <div className="col-xs-6">
            <ul>
                {gifs.map(gif=><li key={gif.id}><img src={gif.images.original.url} alt={gif.id}/></li>)}
            </ul>
        </div>
    )
}

export default GifList