import { Outlet, Link } from "react-router-dom";

import { Box,
         Flex,
         Spacer,
         Heading,
         ButtonGroup,
         Button
       } 
from "@chakra-ui/react";

function Index(){
   return ( 
   <>    
           
           <Flex minWidth='max-content' alignItems='center' bg='gray.700'>
               <Box p='5' color="whiteAlpha.800">
                   <Heading size='md'><Link to="/Home">Home</Link></Heading>
               </Box>
               <Box p='5' color="whiteAlpha.800">  
                   <Heading size='md'><Link to="/About">About</Link></Heading>
               </Box>
               <Box p='5' color="whiteAlpha.800">
                   <Heading size='md'><Link to="/Contact">Contact</Link></Heading>
               </Box>
               <Spacer />
               <ButtonGroup gap='2' margin={5}>
                   <Button colorScheme='teal'>Sign Up</Button>
                   <Button colorScheme='teal'><Link to="/Login">Login</Link></Button>
               </ButtonGroup>
               
           </Flex>     
           <Outlet />

         

    </>
   )
}

export default Index;