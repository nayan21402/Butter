import React from 'react';
import './Warehouse.css';
import '../../font.css';
import { table, tbody, thead, Navbar, Nav, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Warehouse_login = () => {
    const [WarehouseDetails, setWarehouseDetails] = useState([]);
    const [SupplierDetails, setSupplierDetails] = useState([]);
    const [ProductDetails, setProductDetails] = useState([]);
    const [AddProductDetails, setAddProductDetails] = useState({
        PID:"",
        Stock:"",
        WID:WarehouseDetails,
});
    const [UpdateProductDetails, setUpdateProductDetails] = useState({
        Stock: "",
        prd_id: "",
        wh_id:"",
    });

    const [table1,set1]=useState(false);
    const [table2, set2] = useState(false);
    const [table3, set3] = useState(false);
    const [table4, set4] = useState(false);
    const [table5, set5] = useState(false);


    const [Wlogin,setWlogin]=useState({
        WID:""
    });
    const handleInput = (e)=>{
        setWlogin((prev)=>({...prev,[e.target.name]:e.target.value}));
        setAddProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };
    const handleInput2 = (e) => {
        setAddProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleInput3 = (e) => {
        setUpdateProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick1= async e=>{
        e.preventDefault();
        try{

            const res = await axios.post("http://localhost:8800/warehouse_detail",Wlogin)
            setWarehouseDetails(res.data);
            set1(true);
            set2(false);
            set3(false);
            set4(false);
            set5(false);

        }
        catch(err){

        }
    }
    const handleClick2 = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/warehouse_supplier", Wlogin)
            setSupplierDetails(res.data);
            set1(false);
            set2(true);
            set3(false);
            set4(false);
            set5(false);
        }
        catch (err) {

        }
    }
    const handleClick3 = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/warehouse_products", Wlogin)
            setProductDetails(res.data);
            set1(false);
            set2(false);
            set3(true);
            set4(false);
            set5(false);        }
        catch (err) {

        }
    }
    const handleClick4_0 = async e => {
        e.preventDefault();
        try {
            set1(false);
            set2(false);
            set3(false);
            set4(true);
            set5(false);
        }
        catch (err) {

        }
    }
    const handleClick4 = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/warehouse_add_products", AddProductDetails)
            console.log(res);
            }
        catch (err) {
           
        }
    }
    const handleClick5_0 = async e => {
        e.preventDefault();
        try {
            set1(false);
            set2(false);
            set3(false);
            set4(false);
            set5(true);
        }
        catch (err) {

        }
    }
    const handleClick5 = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/warehouse_update_products", UpdateProductDetails)
            console.log(res);
             }
        catch (err) {

        }
    }
    return(
        <>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Enter Warehouse ID</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput} placeholder="0" name='WID' />
                    <Row>
                        <Button className="button-main" onClick={handleClick1} >Warehouse<br></br>Details</Button>
                        <Button className="button-main" onClick={handleClick2} >Supplier<br></br> Details</Button>
                        <Button className="button-main" onClick={handleClick3} >Show all<br></br> Products</Button>
                        <Button className="button-main" onClick={handleClick4_0} >Add<br></br> Product</Button>
                        <Button className="button-main" onClick={handleClick5_0} >Restock<br></br> Product</Button>
                    </Row>
    
                </div>
            </form>
            {table1 && (
                <Container>
                    <Row>
                        <table class="table  " id='item_table'>
                            <thead class='thead-dark'  >
                                <tr id='theadd'>
                                    <th className='head' id='head_first'>WID</th>
                                    <th className='head'>Name</th>
                                    <th className='head'>Address</th>
                                    <th className='head' id='head_last'> Phone </th>
                                </tr>
                            </thead>
                            <tbody>
                                {WarehouseDetails.map(w => (
                                    <tr key={w.id}>
                                        <td>{w.WID}</td>
                                        <td>{w.Wname}</td>
                                        <td>{w.Address}</td>
                                        <td>{w.WPh}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Row>

                </Container>
            )}
            {table2 && (
                <Container>
                    <Row>
                        <table class="table  " id='item_table'>
                            <thead class='thead-dark'  >
                                <tr id='theadd'>
                                    <th className='head' id='head_first'>SID</th>
                                    <th className='head'>Name</th>
                                    <th className='head'>Address</th>
                                    <th className='head' id='head_last'> Product ID </th>
                                </tr>
                            </thead>
                            <tbody>
                                {SupplierDetails.map(w => (
                                    <tr key={w.SID}>
                                        <td>{w.SID}</td>
                                        <td>{w.Sname}</td>
                                        <td>{w.Address}</td>
                                        <td>{w.ProductID}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Row>

                </Container>
            )}
            {table3 && (
                <Container>
                    <Row>
                        <table class="table  " id='item_table'>
                            <thead class='thead-dark'  >
                                <tr id='theadd'>
                                    <th className='head' id='head_first'>PID</th>
                                    <th className='head'>Name</th>
                                    <th className='head'>Price</th>
                                    <th className='head'>Stock</th>
                                    <th className='head' id='head_last'>CategoryID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProductDetails.map(w => (
                                    <tr key={w.PID}>
                                        <td>{w.PID}</td>
                                        <td>{w.Pname}</td>
                                        <td>{w.Price}</td>
                                        <td>{w.Stock}</td>
                                        <td>{w.categoryID}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Row>

                </Container>
            )}
            {table4 && (
                <Container>
                    <Row>
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Enter Product ID</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput2} placeholder="0" name='PID' />
                                <label for="formGroupExampleInput">Enter Stock</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput2} placeholder="0" name='Stock' />
                        
                                <Row>
                                    <Button className="button-main" onClick={handleClick4} >Add Product</Button>
                                </Row>

                            </div>
                        </form>
                    </Row>

                </Container>
            )}
            {table5 && (
                <Container>
                    <Row>
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Enter Product ID</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput3} placeholder="0" name='prd_id' />
                                <label for="formGroupExampleInput">Enter New Stock</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput3} placeholder="0" name='Stock' />
                                <label for="formGroupExampleInput">Enter Warehouse ID</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInput3} placeholder="0" name='wh_id' />

                                <Row>
                                    <Button className="button-main" onClick={handleClick5} >Update Stock</Button>
                                </Row>

                            </div>
                        </form>
                    </Row>

                </Container>
            )}
            
        </>
        
    )
}

export default Warehouse_login;
