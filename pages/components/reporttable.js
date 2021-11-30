import React from "react";
import { hours } from "../../assets/data";

export default function ReportTable(props) {
  const [rowTotals, setRowTotals] = React.useState([]);
  const calculateTotal = (array) =>
  {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]        
    }
    return total
  }

  return (
    <section className="w-4/6 m-14 py-2">
      {props.reports.length == 0 && <h2>No Cookie Stands Available</h2>}
      {props.reports.length > 0 && (
        <table className="mx-auto w-full bg-green-500">
          <thead>
            <th>Location</th>
            {hours.map((hour) => {
              return <th>{hour}</th>;
            })}
            <th>Totals</th>
          </thead>
          <tbody>{props.reports.map((report) => {
              return(
                <tr>
                  {console.log(report)}
                  <td className="border-2 border-gray-800" border-black>{report.location}</td>
                  {report.hourly_sales.map((sale, i)=>{
                    if(rowTotals[i] != null)
                    {
                        rowTotals[i] = rowTotals[i] + sale
                    }
                    else{
                        rowTotals.push(sale)
                    }
                    return <td className="border-2 border-gray-800">{sale}</td>
                  })}
                  <td className="border-2 border-gray-800">{calculateTotal(report.hourly_sales)}</td>
              </tr>)})}
            </tbody>
            <thead>
                <th  className="border-2 border-gray-800">Totals</th>
                {rowTotals.map((rowTotal) => {
                return <th className="border-2 border-gray-800">{rowTotal}</th>;
                })}
                <th className="border-2 border-gray-800">{calculateTotal(rowTotals)}</th>
            </thead>
        </table>
      )}
    </section>
  );
}
