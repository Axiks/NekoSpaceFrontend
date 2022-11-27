import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    redirect,
    useNavigate,
    Link as LinkRouter
  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateToken, destroyToken } from '../../features/oauth/tokenSlice'
import { isUserLogged, selectUser, updateUser } from '../../features/oauth/userSlice'

export default function UserLogOutPageComponent(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
    dispatch(destroyToken())
    dispatch(updateUser())
    console.log('userLogOutPress')
    //const storageKey = "UserJwtToket"
    //localStorage.clear(storageKey)

    useEffect(() => {
        navigate("/")   
   },[])

    return(<></>)
  }