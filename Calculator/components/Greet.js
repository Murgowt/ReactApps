import React from 'react'

export default function DisplayCard(props)
{
    return(<div>
        This is The Calculator
        <h1>{props.result}</h1>
    </div>)
}