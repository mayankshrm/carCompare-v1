 import React, { useEffect, useState } from "react";
import "./Card.css"
import axios from "axios";
import CarData from "../CarData/CarData";
import { BackBtn } from "../Btn/BackBtn";


export function Card(props) {
  const[list,setlist]=useState([]);
  const[optns,setOptns]=useState();
  const[singleCar,setSingleCar]=useState([]);
  
  

  var data = JSON.stringify({
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzIiwicGFzc3dvcmQiOiIxMjMiLCJ3ZWJzaXRlIjoid3d3Lm15ZmFrZWFwaS5jb20iLCJpYXQiOjE1NzM1NDMzNjcsImV4cCI6MTU3MzU0NTE2N30.95fFJcUIOsTVLrTNxSVdk4loPQnwWx9tBGJIb19o65"
  });
  
  var config = {
    method: 'get',
    url: 'https://myfakeapi.com/api/cars/',
    headers: { 
      
    },
    data : data
  };
  

  useEffect(()=>{
    CarData1();
  },[]);

  const CarData1  = ()=>{
    axios(config)
.then(function (response) {
  setlist((response.data.cars));
})
.catch(function (error) {
  console.log(error);
});
  }

  const handleChange=(event)=>{
      setOptns(event.target.value);
      var config = {
        method: 'get',
        url: 'https://myfakeapi.com/api/cars/'+event.target.value,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setSingleCar((response.data.Car));
        console.log((singleCar));
      })
      .catch(function (error) {
        console.log(error);
      });
      
   }
   const clear=()=>{
    setOptns();
    setSingleCar([]);
   }

  return (
    <>
      <div className="card" style={{ width: "16rem" }}>
      
      
        <h3 style={{textAlign:"center"}}>Cars</h3>
      
        <div className="card-body">
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">
              Cars
            </label>
            <select  value={optns} onChange={handleChange} className="form-select" id="inputGroupSelect01">
              <option value="0">Choose...</option>
              {list.map((lists)=>
              <option key={lists.id} value={lists.id} >{lists.car}</option>
              )}
            </select>
          </div>
        </div>
        <BackBtn onClick2={clear} />
        <br/>
      </div>
      <br/>
      <CarData 
              year={singleCar.car_model_year}
              make={singleCar.car}
              model={singleCar.car_model}
              colour={singleCar.car_color}
              price={singleCar.price}
       />
     </>
  );
}
