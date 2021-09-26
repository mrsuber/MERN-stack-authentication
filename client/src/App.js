
import './app.css'
import Landing from "./pages/landingpage/Landing"
import AdminHome from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"

function App() {
  return (
    <Router>



        <Switch>
            <Route exact path="/">   <Landing />   </Route>
            <Route exact path="/admin">   <AdminHome />   </Route>
            <Route exact path="/users">   <UserList />  </Route>
            <Route exact path="/user/:userId">   <User />    </Route>
            <Route exact path="/newUser">    <NewUser />  </Route>

            <Route exact path="/products">  <ProductList />   </Route>
            <Route exact path="/product/:productId">    <Product /> </Route>
            <Route exact path="/newproduct">  <NewProduct />   </Route>

        </Switch>

    
    </Router>
  );
}

export default App;
