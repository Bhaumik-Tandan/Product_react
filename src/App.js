import DataHook,{useData} from "./data/dataHook";
import CustomerHook from "./customerHook/customerHook"
import CustomerList from "./customerList/customerList";
import Orders from "./order/order";
import Loading from "./loading/loading";

function App() {
  const status=useData();
  return (
    <div className="App">
      <DataHook>
        {
          status==0?<Loading text="Loading Data"/>:
          <CustomerHook><CustomerList/><Orders/></CustomerHook>
        }
      </DataHook>
    </div>
  );
}

export default App;
