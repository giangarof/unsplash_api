import { useState } from "react"

export default function TextBox({desc, user, likes}) {
    const style = {
        outer:{
            // width:'400px',
            display:'flex', 
            flexDirection:'column',
            // alignItems:'start',
            margin:'10px'
        },
        innerhigh:{
            // width:'100%',
            textWrap:'wrap'
        },
        
        innerlow:{
            display:'flex'
        }
    }
    return(
        <>
            <div style={style.outer}>
                <div style={style.innerhigh}>
                    {desc}
                </div>
                <div style={style.innerlow}>
                    User: {user} - Likes: {likes}
                </div>
            </div>
        </>
    )
}