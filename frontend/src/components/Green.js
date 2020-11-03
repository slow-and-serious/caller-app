import React from 'react'
import './Green.css'
export default function Green(props){
  return <span className="GreenText">{props.text}</span>
}

// {<TableCell className = {row.user_response==='ACCEPT'? classes.green : row.user_response==='DECLINE'? classes.red : null} align="left">{row.user_response}