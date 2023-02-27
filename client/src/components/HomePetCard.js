import React from 'react'
import pic from "../assets/bg2.jpg"
import {BsSuitHeart} from "react-icons/bs"
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {changeCurrPet} from "../actions/index"
import { useNavigate } from 'react-router-dom'

function HomePetCard(props) {
  const myUser=useSelector((state)=>
  state.changeUser
  );

  const history = useNavigate()
  const dispatch = useDispatch()


  const change = () => {
    dispatch(changeCurrPet(props?.id));
    console.log("hi")
    history("/petinfo")
  }

  const handleClick = async (e) => {
    e.preventDefault();
      const pet = {
        user_id: myUser?._id,
        pet_id:"kal",
        breed:"Labu",
        pet_name:"Dee Dee", 
        city:"Jaipur",
        image:"GHu",
        is_available:true
      };
      try {
        await axios.post("/api/favourite/create", pet);
        window.alert("Added To Favourites")
      } catch (err) {
        window.alert("Oops!! Something went wrong.")
      }
  };




  return (
    <div className='mb-4 cursor-pointer ml-1 mr-1 shadow-lg border-2 hover:animate-pulse hover:scale-105 rounded-lg' style={{ position: "relative" }} >
        {/* <BsSuitHeart onClick={handleClick} className='bg-white p-2 h-10 w-10 rounded-3xl cursor-pointer text-purple-800' style={{ position: "absolute", top: "10px" , right:"10px" }}/> */}
        <div onClick={change}>
        <img src={props?.img ||pic} className="h-56 w-full rounded-t-lg" alt="Error"/>
        <div className='flex p-2 sm:pt-4 pt-3 sm:pb-4 pb-3 rounded-b-lg text-purple-900 text-lg font-semibold bg-white flex-row justify-center'>
        <div className='text-lg'>{props?.name}</div>
        </div>
        </div>
    </div>
  )
}

export default HomePetCard