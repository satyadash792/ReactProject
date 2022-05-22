import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
// import SearchBar from "material-ui-search-bar";
const axios = require('axios');




const Filter = () => {
    const clients=["satya1","satya2","satya3"]
    const service=["satya4","satya5","satya6"]
    const task=["satya7","satya8","satya9"]
    // const [clients,setClients]=useState(["satya1","satya2","satya3"])
    // const [service,setService]=useState(["satya4","satya5","satya6"])
    // const [task,setTask]=useState(["satya7","satya8","satya9"])
 
    return (
    <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
         <Autocomplete
            disablePortal
            id="clients"
            options={clients}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="Clients" />}
         />

         <Autocomplete
            disablePortal
            id="service"
            options={service}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="service" />}
         />

         <Autocomplete
            disablePortal
            id="task"
            options={task}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="task" />}
         />

         {/* <SearchBar/> */}
      </Stack>
    );
};


export default Filter;