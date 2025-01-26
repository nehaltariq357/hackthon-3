import Product from "./product/page";
import Banner from "./component/Bannner/page";
//import {FilteredItems} from "./component/FilterItems/page";

// import NavBar from "./component/NavBar/page";


export default function Home() {
  return (
    <div>
        {/* <NavBar  cartCount={0} />  */}
      <Banner/>
      <Product />
      {/* <FilteredItems filteredItems={[]} /> */}
    </div>
  );
}
