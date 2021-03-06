import {Link, Outlet,NavLink} from 'react-router-dom'
import { getInvoices } from '../data'
function Invoices (){
  let invoices = getInvoices();
    return(
      <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet/>
      </div>
    )
}
export default Invoices