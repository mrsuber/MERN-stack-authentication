import './newProduct.css'
import Topbar from '../../components/topbar/Topbar'
import Sidbar from '../../components/sidebar/Sidebar'


export default function NewProduct(){
  return(
    <>
    <Topbar/>
    <div className="container">
    <Sidbar />
    <div className="newProduct">
    <h1 className="addProductTitle">New Product</h1>
    <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"/>
        </div>

        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"/>
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123"/>
        </div>



        <div className="addProductItem">
          <label>Active</label>
          <select className="addProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>

    </form>
    </div>
    </div>
    </>
  )
}
