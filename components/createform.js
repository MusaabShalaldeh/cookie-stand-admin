import React from "react";

export default function CreateForm(props) {
  const [cookieStands, setCookieStand] = React.useState([]);
  function eventHandler(event) {
    event.preventDefault();
    const cookieStand = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    };
    setCookieStand((cookieStands) => [...cookieStands, cookieStand]);
    props.addReport(cookieStand)
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
              <input type="text" className="w-4/5" name="minCustomers" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3>Maximum Customers Per Hour</h3>
              <input type="text" className="w-4/5" name="maxCustomers" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3>Average Cookies Per Sale</h3>
              <input type="text" className="w-4/5" name="avgCookies" required/>
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
