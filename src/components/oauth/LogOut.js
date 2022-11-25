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

export default function UserLogOutPageComponent(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
    dispatch(destroyToken())
    console.log('userLogOutPress')
    //const storageKey = "UserJwtToket"
    //localStorage.clear(storageKey)

    useEffect(() => {
        navigate("/")   
   },[])

    return(<></>)
  }