import React, {useState} from "react"

function GifSearch({onChangeSearch}){
    const [inputVal, setInputVal] = useState("")
    function handleSearch(){
        onChangeSearch(inputVal)
    }

    return (
        <div className="col-xs-6">
            <label>Enter a Search Term: </label>
            <input type="text" name="search" value={inputVal} onChange={e=>setInputVal(e.target.value)}></input>
            <button style={{color:"white", backgroundColor:"green"}} onClick={handleSearch}>Find Gifs</button>
        </div>
    )
}

export default GifSearch
