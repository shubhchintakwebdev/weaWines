import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button,Tag,Card  } from 'antd';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
 
const customStyles = {
	content: {
		top: "45%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
 		width: "400px",
	},
};
Modal.setAppElement("#root");
const Orders = (ids) => {
    const id = ids.order_id;
    const token = localStorage.getItem("token");
 	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [passVisible, setPassVisible] = React.useState([]);
    const [subTotal, setsubTotal] = React.useState(false);
	const [status, setStatus] = React.useState([]);
	const [color, setColor] = React.useState([]);
	const [name, setName] = React.useState("");
    const [lname, setLastName] = React.useState("");
	const [emailid, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
 
    useEffect(() => {
       handleOrder()
    }, [id])

    const handleOrder = async () => {
        const resData = await fetch(
            `/wp-json/letscms/v1/order/${id}`,
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                     letscms_token: token,
                 },
            }
        );
        const data = await resData.json()
        const sampleorders = [];
		let key = 0;
        data.data.items.forEach((items) => {
 				key++;
				sampleorders.push({
					// key,
					items: <>{items.name} x <a style={{fontWeight:'500'}}>{items.quantity}</a></> ,
 					amount: `$ ${items.total}`,
 				});
 		});
         setPassVisible(sampleorders)
         setName(data.data.billing.first_name )
         setLastName(data.data.billing.last_name )
         setPhone(data.data.billing.phone )
         setEmail(data.data.billing.email )

        setStatus((data.data.status).toUpperCase())
        setsubTotal(data.data.subtotal)
        
        if(data.data.status==="completed"){
            setColor("#77d64f");
        }
        if (data.data.status === "cancelled") {
            setColor("#f50");
        }
        if(data.data.status==="processing"){
            setColor("#d4d457");	
        }
	};

 

	return (
		<>
		   <Button  onClick={openModal} type="dashed">View</Button>
								 
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
            <i onClick={closeModal} className="fa fa-times float-right" aria-hidden="true"></i>
				<div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="headLeft"  style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Orders Details</h2>
 
                <Table id='items' className="" >
                        <Thead>
                            <Tr>
                            <Th>Items</Th>
                             <Th>Total</Th>
                            </Tr>
                        </Thead>
                         <Tbody>
            
                         {passVisible.map((item) => (
                            <Tr>
                             {Object.values(item).map((val) => (
                                <Td>{val}</Td>
                            ))}            
                            </Tr>
                        ))}
                        
                        </Tbody>
                        <tfoot>
                            <Tr>
                            <Th className="smhide ">Status </Th>
                            <Th className="smhide">
                            <>
                                        <Tag color={color} key={status}>
                                            {status}
                                        </Tag>
                                 
                            </>
                            </Th>
                             {/* <Th>Subtotal- {this.state.sub} </Th> */}

                             </Tr>
                        </tfoot>
                        <tfoot>
                            <Tr>
                            <Th className="smhide">Total </Th>
                            <Th className="smhide">$ {subTotal}</Th>
                             {/* <Th>Subtotal- {this.state.sub} </Th> */}

                             </Tr>
                        </tfoot>
                       
                    
                        </Table>
                        <Table id='items' className="mhide" >
                        <Thead>
                            <Tr>
                            <Th>Subtotal</Th>
                             <Th>Status</Th>
                            </Tr>
                        </Thead>
                         <Tbody>            
                             <Tr>
                             <Td style={{fontWeight:'500'}}>$ {subTotal} </Td>
                                 <Td><Tag color={color} key={status}>
                                            {status}
                                </Tag></Td>
                                         
                            </Tr>
                     
                        
                        </Tbody>
                       
                    
                        </Table>			 
                        <div className="">
                            <Card  bordered={false} style={{ width: '100%' }}>
                            <h2 className="headLeft" style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Contact Details</h2>
                                <p>{name} {lname}</p>
                                <p>{emailid}</p>
                                <p>{phone}</p>

                            </Card>
                        </div>
				</div>
			</Modal>

			 	</>
	);
};
export default Orders;
