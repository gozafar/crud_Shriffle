import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {setDataUser,setShow,setUser} from '../redux/userData'
import { useDispatch,useSelector } from 'react-redux';
import EditUser from '../components/EditUser';
const Home = () => {
const dispatch=useDispatch()

useEffect(()=>{
  AllUserData()
},[])
const userDataAll= useSelector((state)=>state?.user?.userData)
const AllUserData=async()=>{
try{
  const response= await axios.get("https://dummyjson.com/users")
  if(response?.status===200){
    dispatch(setDataUser(response?.data?.users))
  }
  else{
    console.log("something went wrong")
  }
}
catch(err){
  return err;
}
}

const handleDelete=async(id)=>{
  const response=await axios.delete(`https://dummyjson.com/users/${id}`)
  console.log(response)
  if(response?.status===200){
    AllUserData()
  }
  else{
    console.log("something went wrong")
  }
}


const handleUpdate=(dataUser,value)=>{
  dispatch(setShow(value))
dispatch(setUser(dataUser))

}

  return (
    <div style={{"display":"flex","justifyContent":"space-evenly","display":"inherit"}}>
      {userDataAll.length>0?
      userDataAll.map((item)=>{
        return(
<Card style={{ width: '18rem' }} key={item?.id}>
     <Card.Img variant="top" src={item?.image} />
     <Card.Body>
       <Card.Title>UserName:{item?.username}</Card.Title>
       <Card.Title>DOB:{item?.birthDate}</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
       <Button variant="primary" onClick={()=>handleUpdate(item,true)}>Update</Button>
       <Button variant="primary" onClick={()=>handleDelete(item?.id)}>Delete</Button>
     </Card.Body>
   </Card>
        )
      })
     
   :"NO Data found"  
    
    
    
    }
       

<EditUser/>

    </div>
  )
}

export default Home