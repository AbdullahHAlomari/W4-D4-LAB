import React from 'react'
import axios from 'axios'
import { Box, ListItem, UnorderedList,Text, Button } from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'
// import 

function effect() {
    const navigate = useNavigate()

    // const retrive = ()=>{
    //     navigate('/Signup')
    // }


    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get("https://63e20921ad0093bf29c66077.mockapi.io/ToDoList").then(res=>{
            console.log("-----------------")
            console.log(res.data)
            console.log("-----------------")
            setData(res.data)
        })

    }, [])


    const DeleteItem=(id:string)=>{
        console.log(id);

        axios.delete(`https://63e20921ad0093bf29c66077.mockapi.io/ToDoList/${id}`).then(res=>{
            data.filter((del:any)=>{
                console.log(res);
                return del.id !=id
            })
        })        
    }

  return (

    <>
    <Box height={'100vh'} width={"100vw"} backgroundColor={'#222222'}>
    <Button p={10} ml={'40%'} mt={'50px'} onClick={()=>{navigate("/CreateBlog")}}>Add new task</Button>
        {/* <button onClick={()=>{navigate("/CreateBlog")}}>SEND DATA</button> */}
        {data.map((item:any)=>
                <UnorderedList mt={10} >

                    <ListItem ml={'40%'} color={'white'}>
                    { "Your task is: " + item.content}
                    
                    </ListItem>
                    <Button ml={'35%'} mt={10} p={10} bgColor={"#eee"} onClick={()=> {DeleteItem(item.id)}} >Delete</Button>
                    <Link to='/UpdateData'>
                    <Button mt={10} p={10} ml={10} bgColor={"#eee"} onClick={()=> localStorage.setItem('id', item.id)} > Update</Button>
                    </Link>

                </UnorderedList>
                
                // <ul>
                //     <li color='white' key={item.id}>
                //         { "Your task is: " + item.content}
                //     </li>
                //     <Button mt={10} p={10} bgColor={"#eee"} onClick={()=> {DeleteItem(item.id)}} >Delete</Button>
                //     <Link to='/UpdateData'>
                //     <Button mt={10} p={10} bgColor={"#eee"} onClick={()=> localStorage.setItem('id', item.id)} > Update</Button>
                //     </Link>

                // </ul>      
        )}
                </Box>  

          </>
  )
}

export default effect
