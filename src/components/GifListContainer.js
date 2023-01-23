import React, {useEffect, useState} from "react"
import GifSearch from "./GifSearch"
import GifList from "./GifList"
const apiKey = "PSVNGTn5VaYxZgA10gyqI04gu3Wz8i6F"

function GifListContainer(){
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g"`)
            .then(r=>r.json())
            .then(data=>setGifs(data.data.slice(0,3)))
    },[search])

    return (
        <div className="row">
            <GifList gifs={gifs}/>
            <GifSearch search={search} onChangeSearch={setSearch}/>
        </div>
    )
}

export default GifListContainer