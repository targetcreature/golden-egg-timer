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
      rateType: "year",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{
        brand: <FaAmazon/>,
      }
    },
    "Mark Zuckerberg":{
      company:"Facebook",
      rate:1712328,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{
        brand:<FaFacebook/>,
      }
    },
    "Alice Walton":{
      company: "Walmart",
      rate: 1392694,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{
      }
    },
    "Warren Buffet":{
      company: "Berkshire Hathaway",
      rate: 958904,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{
      }
    },
    "Larry Page":{
      company: "Google",
      rate: 924657,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{},
    },
    "Elon Musk":{
      company: "Tesla",
      rate: 684931,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{},
    },
    "Bill Gates":{
      company: "Microsoft",
      rate: 456621,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons: {},
    },
    "Jack Dorsey":{
      company: "Twitter",
      rate: 205479,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{},
    },
    "Meg Whitman":{
      company: "Hewlett-Packard",
      rate: 102739,
      rateType: "hour",
      source: "https://www.businessinsider.com/how-much-money-billionaires-celebrities-make-per-hour-2018-8",
      icons:{},
    },
    "Howard Schultz":{
      company:"Starbucks",
      rate:9659,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons:{},
    },
    "Larry Merlo":{
      company: "CVS",
      rate: 13914,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons:{},
    },
    "Leslie Wexner":{
      company: "L Brands",
      rate: 13062,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons:{},
    },
    "Douglas McMillon":{
      company: "Walmart",
      rate: 9323,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons: {},
    },
    "Stephen Easterbrook":{
      company: "McDonald's",
      rate: 3803,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons: {},
    },
    "Robert Niblock":{
      company: "Lowe's",
      rate: 6325,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons:{},
    },
    // "Montgomery Moran":{
    //   company: "Chipotle",
    //   rate: 6520,
    //   rateType: "hour",
    //   source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
    //   icons:{},
    // },
    // "Stephen Ells":{
    //   company: "Chipotle",
    //   rate: 6653,
    //   rateType: "hour",
    //   source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
    //   icons: {},
    // },
    "Hubert Joly":{
      company: "Best Buy",
      rate: 6220,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons: {},
    },
    "Thomas Folliard":{
      company: "CarMax",
      rate: 5623,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons: {},
    },
    "Terry Lundgren":{
      company: "Macy's",
      rate: 5623,
      rateType: "hour",
      source: "https://www.usatoday.com/story/money/markets/2016/04/18/15-hour-these-retail-ceos-make-9000-hour/83049768/",
      icons: {},
    },
    "Hock E. Tan":{
      company: "Broadcom",
      rate: 103211163,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Frank J. Bisignano":{
      company: "First Data",
      rate: 102210396,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Peter P. Gassner":{
      company: "Veeva Systems",
      rate: 88143333,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Michael Rapino":{
      company: "Live Nation",
      rate: 70615760,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Mario J. Gabelli":{
      company: "Gamco Investors",
      rate: 69414427,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Leslie Moonves":{
      company: "CBS",
      rate: 69332723,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "W. Nicholas Hawley":{
      company: "Transdigm Group",
      rate: 61023102,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Douglas Lebda":{
      company: "Lending Tree",
      rate: 59591002,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Douglas Ingram":{
      company: "Sarepta Therapeutics",
      rate: 56855241,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Ronald F. Clarke":{
      company: "FleetCor",
      rate: 52643810,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Stephen Kaufer":{
      company: "TripAdvisor",
      rate: 47933462,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Gregory B. Maffei":{
      company: "Liberty Interactive",
      rate: 47809756,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Dirk Van de Put":{
      company: "Nabisco",
      rate: 42442924,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "David M. Zaslav":{
      company: "Discovery Communications",
      rate: 4227984,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "John Donahoe":{
      company: "ServiceNow",
      rate: 41515645,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Mark V. Hurd":{
      company: "Oracle",
      rate: 40832279,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Robert Bearden":{
      company: "Hortonworks",
      rate: 40147373,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Ari Bousbib":{
      company: "IQVIA Holdings",
      rate: 38029517,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
    "Martine Rothblatt":{
      company: "United Therapeutics",
      rate: 37133201,
      rateType: "year",
      source: "https://aflcio.org/paywatch/highest-paid-ceos",
      icons:{},
    },
}

export default list
