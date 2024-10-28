// The Barricade class

import React from "react"

interface Barrierprops{
    copylock:boolean,
    pastelock:boolean,
}

export default function Barrier(props:Barrierprops){
    return(
        <div 
        onContextMenu={(e)=>{
            e.preventDefault()
        }}
        onKeyDown={(e) => {
            if ((e.key=="c") && e.ctrlKey){
                if (props.copylock){
                    e.preventDefault()
                }
            }else if (e.key=="v" && e.ctrlKey && props.pastelock){
                e.preventDefault()
            }
        }}
        >
            
        </div>
    )
}