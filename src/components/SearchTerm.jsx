import { useState } from "react"
import '../index.css'
export default function SearchTerm({searchText}) {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text);
        console.log(text)
    }

    const style = {
        form:{

        },
        input:{
            fontSize:'20px',
            border:'none',
            borderBottom:'1px solid gray'
        },
        btn:{
            marginLeft:'10px',
            background:'#c4c4c4'
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>

                <input
                    className="input" 
                    style={style.input}
                    placeholder="Search Term" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button style={style.btn}>Search</button>
            </form>
        </>
    )
}