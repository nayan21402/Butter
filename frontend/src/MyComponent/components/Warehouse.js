import React from 'react';
import './Warehouse.css';
import '../../font.css';
import { table,tbody,thead,Navbar, Nav, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Warehouse=() =>{
    const[products,setProduct]= useState([])

    useEffect(()=>{
        const fetchAllProduct = async ()=>{
            try{
                const res =await axios.get("http://localhost:8800/product")
                setProduct(res.data )
             }
            catch(err){
                console.log(err)

            }

        }
        fetchAllProduct()
    },[])

    return (
    <>
            
            <Container>
                    <Row>
                    <table class="table  " id='item_table'>
                        <thead class='thead-dark'  >
                            <tr id='theadd'>
                                <th className='head' id='head_first'>PID</th>
                                <th className='head'>Pname</th>
                                <th className='head'>Price</th>
                                <th className='head' id='head_last'>categoryID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.PID}</td>
                                    <td>{product.Pname}</td>
                                    <td>{product.Price}</td>
                                    <td>{product.categoryID}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </Row>
                    
            </Container>
            

    </>
    )
}

export default Warehouse;
