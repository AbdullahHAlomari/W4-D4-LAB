import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {
    const [content, setfContent] = React.useState("")
    // const [Email, setEmail] = React.useState("")
    // const [Number, setNumber] = React.useState<any>()

    const navigator = useNavigate()

        const api = 'https://63e20921ad0093bf29c66077.mockapi.io/ToDoList'
        
    const PostData =()=>{
        if(content.length >=3){
            axios.post(api,{
                content
            }).then(res=>{
                console.log(res);
            })
            
            axios.get('https://63e20921ad0093bf29c66077.mockapi.io/ToDoList')
            navigator('/')
        }
        else{
            alert("Incorrect information")

        }
    }



  return (
    <>
    <Box width={'100vw'} height={'100vh'} bgColor={'#222222'}>
        <Input color={'white'} width={'50%'} ml={'23%'} mt={50} onChange={e=>{setfContent(e.target.value)}} placeholder='Write your task: '></Input>
        <Box>
        <Button mt={10} ml={'32%'} px={'200px'} onClick={PostData}  borderRadius={"18px"} bgColor={"#3C84AB"}>SEND</Button>
        </Box>
    </Box>
    
    </>
  )
}

export default Post
