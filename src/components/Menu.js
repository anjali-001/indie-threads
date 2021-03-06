
import React, { useState, useEffect, Component } from 'react'
import Input from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const options = [
  { key: 'm', text: 'Consumer', value: 'Consumer' },
  { key: 'f', text: 'Business Owner', value: 'Business Owner' },
]

const Menu = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [type, setType] = useState("Consumer")

    console.log(type)

    return (
     <div>
        <div>
        <Input required label="First Name" onChange={(event) => setfirstName(event.target.value)}/>
      </div>
      <div>
        <Input required label="Last Name" onChange={(event) => setlastName(event.target.value)}/>
      </div>
      <div>
        <InputLabel id="demo-simple-select-label">Type of Consumer</InputLabel>
        <Select defaultValue="Consumer" onChange={(event) => setType(event.target.value)}>
          <MenuItem value={"Consumer"}>Consumer</MenuItem>
          <MenuItem value={"Business Owner"}>Business Owner</MenuItem>
        </Select>
      </div>
     </div>
    )
  }

export default Menu