/*
Billionaire salaries
rate = million / year
*/
import React from "react"
import {
  // FaDemocrat,
  // FaRepublican
  FaPlay,
  FaPause,
  FaAmazon,
  FaFacebook,
 } from "react-icons/fa"

const icons = {}
icons.pol = {}
// icons.pol.dem = <FaDemocrat/>
// icons.pol.rep = <FaRepublican/>
icons.pol.dem = <FaPlay/>
icons.pol.rep = <FaPause/>

const list = {
    "Jeff Bezos":{
      company: "Amazon",
      rate: 23826816000,
      workers: 28000,
      icons:{
        brand: <FaAmazon/>,
      }
    },
    "Warren Buffet":{
      company: "tmp",
      rate: 516,
      icons:{
      }
    },
    "Sam Walton":{
      company: "Walmart",
      rate: 420,
      icons:{
      }
    },
    "Charles Koch":{
      company: "tmp",
      rate: 912,
      icons:{
      }
    },
    "David Koch":{
      company: "tmp",
      rate: 912,
      icons:{
      }
    },
    "Howard Schultz":{
      company:"Starbucks",
      rate:41500000,
      icons:{
      }
    },
    "Mark Zuckerberg":{
      company:"Facebook",
      rate:41.5,
      icons:{
        brand:<FaFacebook/>,
      }
    },
}

export default list
