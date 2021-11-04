import {useState, useEffect} from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const [customers, setCustomers] = useState([])
  useEffect(() => {

    async function fetchData() {
      const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
      setCustomers(await res.json())
    }
    fetchData()
  }, [])

  return (
    <div className="mx-5 mt-4 row row-cols-3 d-flex">
      {
        customers.map(customer => (      
        <div key={(customer.id)} className="list-group mb-3">
          <a href="#" className="shadow list-group-item list-group-item-action" aria-current="true">
            <Customer item={customer}/>
          </a>
        </div>
      ))
      }
    </div>
  );
}

export default App;
