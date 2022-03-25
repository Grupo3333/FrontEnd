import React from 'react'
import { isTemplateTail } from 'typescript';

function Lista() {
    var prog = [
        { name: "Html"},
        { name: "CSS"},
        { name: "Java"},
        { name: "Typescript"}
    ]

    return (
        <>
            {
                prog.map(function(item) {
                    return(
                        <h1>{ item.name }</h1>
                    )
                })
            }
        </>
    )
}

export default Lista;