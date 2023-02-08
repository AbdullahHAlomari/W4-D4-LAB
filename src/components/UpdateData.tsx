import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UpdateData() {

    const [content, setContent] = React.useState("")
    // const [Email, setEmail] = React.useState("")
    // const [Number, setNumber] = React.useState<any>()
    const [id, setId] = React.useState<any>()

    React.useEffect(()=>{
        setId(localStorage.getItem('id'))
    })



    const navigator = useNavigate()

        const api = `https://63e20921ad0093bf29c66077.mockapi.io/ToDoList/${id}`
        
    const Update =()=>{
        if(content.length){
            axios.put(api,{
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
    <Box>
        <Input onChange={e=>{setContent(e.target.value)}} placeholder='Update your task: '></Input>
        {/* <Input onChange={e=>{setEmail(e.target.value)}} placeholder='Email: '></Input>
        <Input onChange={e=>{setNumber(e.target.value)}} placeholder='Number: '></Input> */}
        <Button onClick={Update} p={4} borderRadius={"18px"} bgColor={"#3C84AB"}>SEND</Button>
    </Box>
  )
}

export default UpdateData
