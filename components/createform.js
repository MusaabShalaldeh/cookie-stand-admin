import React from "react";
import axios from "axios";
import {useAuth} from '../contexts/auth'

export default function CreateForm(props) {
  const { tokens } = useAuth();
  const [cookieStands, setCookieStand] = React.useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function eventHandler(event) {
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cookie_stands/`

    const cookieStand = {
      location: event.target.location.value,
      hourly_sales: [],
      minimum_customers_per_hour: event.target.minimum_customers_per_hour.value,
      maximum_customers_per_hour: event.target.maximum_customers_per_hour.value,
      average_cookies_per_sale: event.target.average_cookies_per_sale.value,
    };
    for (let i = 0; i < 14 ; i++) {
      let randomVal = getRandomInt(cookieStand.minimum_customers_per_hour, cookieStand.maximum_customers_per_hour)
      cookieStand.hourly_sales.push(randomVal)
    }

    axios.post(url, cookieStand, {
      headers:{
        'Authorization': `Bearer ${tokens.access}`
      }})
    .then(function (response) {
      setCookieStand((cookieStands) => [...cookieStands, cookieStand]);
      // props.addReport(cookieStand)
      props.updateReports()
    })
    .catch(error=>{
      console.log(error)
    })

    
  }
  return (
    <>
      <section className="bg-green-300 w-4/6 m-14 py-2">
        <h1 className="text-4xl my-6 font-bolder-40">Create Cookie Stand</h1>
        <form
          onSubmit={eventHandler}
          className="flex flex-col justify-center flex-1"
        >
          <div className="inline-flex w-full px-8">
            <h3>Location&nbsp; </h3>
            <input type="text" className="w-full" name="location" required/>
          </div>
          <section className="my-10 flex flex-wrap">
            <div className="m-auto w-3/12">
              <h3>Minimum Customers Per Hour</h3>
              <input type="text" className="w-4/5" name="minimum_customers_per_hour" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3>Maximum Customers Per Hour</h3>
              <input type="text" className="w-4/5" name="maximum_customers_per_hour" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3>Average Cookies Per Sale</h3>
              <input type="text" className="w-4/5" name="average_cookies_per_sale" required/>
            </div>
            <button className="m-auto p-4 w-2/12 bg-green-600" type="submit">
              Create
            </button>
          </section>
        </form>
      </section>

      {/* <section>
        <h2 className="text-gray-500">
          Report Table Coming Soon.....
        </h2>
        <div>
          {cookieStands.map(val=>{
            return(
              <div className="text-gray-500">
                {JSON.stringify(val)}
              </div>
            )
          })}
        </div>
      </section> */}
    </>
  );
}
