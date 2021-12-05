import { IconContext } from "react-icons";
import {FaTrash} from 'react-icons/fa'

export default function CookieStandTable(props) {
  const deleteSelf = (event) =>{
    event.preventDefault();
    //send a request to delete this item
  }
  return (
    <tr className="odd:bg-green-200 bg-green-300">
      <td className="border-2 border-green-500 w-40" border-black>
        <div className="p-2 m-auto h-full w-full align-middle mb-5">
            <h2 className="float-left p-auto font-bold">{props.location}</h2>
            <button onClick={deleteSelf} className="float-right p-1 ">
                <IconContext.Provider value={{ color: 'red'}}>
                    <FaTrash />
                </IconContext.Provider>
            </button>
        </div>
      </td>
      {props.hourly_sales.map(sale => {
        return <td className="border-2 border-green-500">{sale}</td>;
      })}
      <td className="border-2 border-green-500">
        {props.hourly_sales_total}
      </td>
    </tr>
  );
}
