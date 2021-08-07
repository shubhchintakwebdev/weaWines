import React, { useEffect, useState,Component } from "react";
import { Link } from "react-router-dom";
 import axios from "axios";
import "./table.css"
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
 
	
const token = localStorage.getItem("token");
var itemsList =[]
export default class CheckOutCart extends Component {
  constructor(props) {
    super(props);
    this.retrieveOrders = this.retrieveOrders.bind(this); 
    this.state = {
      sub: "",
      cart:[],
    };
  }
   componentDidMount() {
         this.retrieveOrders();
  }
 
  retrieveOrders = async () => {
    
    const res = await fetch(
        "/wp-json/letscms/v1/cart?coupons[]=GET15&coupons[]=GET50",
        {
            headers: {
                letscms_token: token,
            },
        }
    );
    if(window.location.pathname==='/checkout'){
        itemsList =[]
    }
    const cartjson = await res.json();
         const subtotal = '$ ' +cartjson.data.cart_totals.subtotal
    for(var j=0;j<cartjson.data.cart_items.length;j++){
            itemsList.push({
            product_name: cartjson.data.cart_items[j].product_name,
            product_price:'$ '+cartjson.data.cart_items[j].product_price,
            quantity:cartjson.data.cart_items[j].quantity, 
            line_subtotal:'$ '+cartjson.data.cart_items[j].line_subtotal 
        })
        }
      console.log(itemsList)
        this.setState({
            cart:itemsList,
            sub:subtotal
        })
   
    console.log(this.state.cart)
        
  }
   
  
  render() {
     
    return (
        <>
       
        <section className="plr my-5">
          
            <div className="row">
            <h3  style={{paddingBottom:"10px",fontWeight:"350"}} className="text-dark fwl  pb">Order Information</h3>
            
           
                <Table id='orders' className="" >
                        <Thead>
                            <Tr>
                            <Th>Items</Th>
                             <Th>Product Price</Th>
                             <Th>Quantity</Th>
                            <Th>Total Price</Th>
                            </Tr>
                        </Thead>
                         <Tbody>
            
                         {this.state.cart.map((item) => (
                            <Tr>
                             {Object.values(item).map((val) => (
                                <Td>{val}</Td>
                            ))}            
                            </Tr>
                        ))}
                        
                        </Tbody>
                        <tfoot>
                            <Tr>
                            <Th className="smhide"> </Th>
                            <Th className="smhide"> </Th>
                            <Th className="smhide"> </Th>
                            <Th>Subtotal- {this.state.sub} </Th>

                             </Tr>
                        </tfoot>
                        </Table>			 
            </div> 
        </section>
     </>
    );
  }
}
