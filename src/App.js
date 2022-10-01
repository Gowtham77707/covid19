import React,{useState,useEffect} from 'react'
import { NavItem } from 'react-bootstrap'
import { json } from 'react-router-dom'

const App = () => {

const [data,setDate] = useState([])

useEffect(()=>{

  fetch('https://data.covid19india.org/data.json').then(
    res => res.json()
  ).then(
    json =>(setDate(json.statewise))
  )
})


  return (
    <div>
      <center>
      <h2>Covid-19 DashBoard</h2>
      </center>

      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th>state</th>
            <th>active</th>
            <th>confirmed</th>
            <th>deaths</th>
            <th>recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map(covids =>{
             return(

              <tr>
                <td>{covids.state}</td>
                <td>{covids.active}</td>
                <td>{covids.confirmed}</td>
                <td>{covids.deaths}</td>
                <td>{covids.recovered}</td>
              </tr>
             )

          
          })}
            
          
        </tbody>
      </table>
    </div>
  )
}

export default App
