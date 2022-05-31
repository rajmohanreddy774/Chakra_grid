import { useState } from 'react'

import './App.css'
import {Box, Center, Flex,Grid, GridItem } from "@chakra-ui/react"


function App() {
  const [count, setCount] = useState(0)

  return (
    
     
    <Grid
    h='200px'
    templateRows='repeat(1, 1fr)'
    templateColumns='repeat(3, 1fr)'
   
    
    width={[
      '25%', 
      '50%', 
      '100%', 
       
    ]}
    gap={4}
  >
    <GridItem rowSpan={1}   bg='orange' >box1</GridItem>
    <GridItem colSpan={1}  bg='purple' >box2</GridItem>

    <GridItem colSpan={1}   bg='tomato' >box3</GridItem>
  </Grid>
    
   
 
    
  )
}

export default App
