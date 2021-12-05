import React from "react";
import { hours } from "../assets/data";
import CookieStandTable from "./CookieStandTable";

export default function ReportTable(props) {
  let rowTotals = []
  const calculateTotal = (array) =>
  {
    let total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]       
    }
    return total
  }



  const resetRowTotals = ()=>{
    rowTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
  resetRowTotals()
  return (
    
    <section className="w-4/6 py-2 m-14">
      {props.reports.length == 0 && <h2>No Cookie Stands Available</h2>}
      {props.reports.length > 0 && (
        <table className="w-full mx-auto bg-green-400">
          <thead>
            <th className="border-2 border-green-500">Location</th>
            {hours.map((hour) => {
              return <th className="border-2 border-green-500">{hour}</th>;
            })}
            <th className="border-2 border-green-500">Totals</th>
          </thead>
          <tbody className="block md:table-row-group">{props.reports.map((report) => {
              console.log(report.hourly_sales)
              report.hourly_sales.map((sale,i)=>{
                rowTotals[i] += sale;
              })
              return(
                <CookieStandTable updateReports={props.updateReports} id={report.id} location={report.location} hourly_sales={report.hourly_sales} hourly_sales_total={calculateTotal(report.hourly_sales)} />)
              })}
            </tbody>
            <thead>
                <th  className="border-2 border-green-500">Totals</th>
                {rowTotals.map((rowTotal) => {
                return <th className="border-2 border-green-500">{rowTotal}</th>;
                })}
                <th className="border-2 border-green-500">{calculateTotal(rowTotals)}</th>
            </thead>
        </table>
      )}
    </section>
  );
}
