import React,{useEffect,useState} from 'react'
import { render } from 'react-dom';
import { Row, Col, Form, Input, Button, Select, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import "../../App.css"
import { message } from 'antd';

import { Link, useHistory } from "react-router-dom";

// const Checkout = () => {
//     return (
//         <>
//         <Nav1/>
//         <Nav2/>
//             <div className="position-relative">
//                 <div className="op2"></div>
//                 <div className="aui2 d-flex justify-content-center align-items-center">
//                     <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Checkout</h1>
//                 </div>
//             </div>
//             <section className="plr my-5">
//               <h3 className="text-danger fwl py-4">Checkout</h3>
//               <div className="row">
//                   <div className="col-12 d-flex justify-content-end">
//                   <Link to="/cart"><button type="button" className="btn btn-secondary my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Back To Cart</button></Link>
//                   <button type="button" className="btn btn-danger my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Order Now</button>
//                   </div>
//               </div>
//             </section>
//             <Footer/>
//         </>
//     )
// }

// export default Checkout

        const { Option } = Select;
        const CheckoutScreen = () => {
            const history = useHistory();
            const userdetails = JSON.parse(localStorage.getItem("userdetails"));
            const displayName = userdetails.display_name;
            const token = localStorage.getItem("token");
            const [firstName, setFirstName] = useState(userdetails.first_name);
            const [lastName, setLastName] = useState(userdetails.last_name);
            const [email, setEmail] = useState(userdetails.user_email);
            const [phone, setPhone] = useState("");
            const [bCity, setBCity] = useState("");
            const [bState, setBState] = useState("");
            const [bCountry, setBCountry] = useState("");
            const [bZip, setBZip] = useState("");
            const [bAddress1, setBAddress1] = useState("");
            const [bddress2, setBAddress2] = useState("");
            const [Address1, setAddress1] = useState("");
            const [Address2, setAddress2] = useState("");
            const [sCity, setSCity] = useState("");
            const [sState, setSState] = useState("");
            const [sCountry, setSCountry] = useState("Country");
            const [sZip, setSZip] = useState("");
            const [billing, setBilling] = useState(false);
            const handleCheckout = async () => {
                const res = await fetch(
                    "/wp-json/letscms/v1/order/create",
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                            "letscms_token":token
                        },
                        body: JSON.stringify({
                            first_name: firstName,
                            last_name: lastName,
                            country:sCountry,
                            country:sCountry,       
                            city:sCity,
                            state:sState,
                            postcode:sZip,
                            phone:phone,
                            email:email,
                            payment_method:'cod',
                            payment_method_title:'Cash on Delivery',
                            address_1:Address1,
                            address_2:Address2
                        }),
                    }
                );
                const data = await res.json();
                message.success({
                    content: 'Order Placed Successfully!',
                    className: 'custom-class',
                    style: {
                      marginTop: '5vh',
                    },
                  });
                 console.log(data)
                 history.push("/");

            };


            function onChange(e) {
                setBilling(e.target.checked)
                if(billing===true){
                    setBCity(sCity)
                }
               }
           
        return(
            <>
            <Row>
                <Col span={18} offset={3}>
                <h3>General Information</h3>
                <Form
                    layout="vertical"
                    name="Profile_Form"
                    initialValues={{
                        remember: true,
                    }}
                >
                <Row>

                <Col span={5} >

                <Form.Item name="First_Name" label="First Name">
				<Input
					placeholder="First Name"
                    defaultValue={firstName}
        			onChange={(e) => setFirstName(e.target.value)}
				/>
				</Form.Item>
                        </Col>
                        <Col span={5} offset={1} >

                    <Form.Item name="Last_Name" label="Last Name">
                    <Input
                        placeholder="Last Name"
                        defaultValue={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    </Form.Item>
                            </Col>
                        <Col span={5} offset={1} >
                            <Form.Item 
                                name="contact" 
                                label="Contact Number"
                            >
                                <Input placeholder="Contact No." 
                                    defaultValue={phone}
                                    rules={[
                                            {
                                                required: 'true',
                                            },
                                            ]}
                                     onChange={(e) => setPhone(e.target.value)}   
                                />
                            </Form.Item>
                        </Col>
                        <Col span={5} offset={1}>
                            <Form.Item
                                name="email"
                                label="E-mail"
                            >
                                <Input placeholder="Email" 
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}
                                rules={[
                                {
                                    type: 'email',
                                },
                                ]}
                                />
                            </Form.Item>
                        </Col>
                                
                </Row></Form>
                <Row>
                    <Col span={10}>
                        <h3>
                            Shipping Address
                        </h3>
                        <Form
                            layout="vertical"
                            name="Shipping_add"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item 
                                name="street" 
                                label="Address Line 1"
                            >
                                <Input 
                                  defaultValue={Address1}
                                onChange={(e) => setAddress1(e.target.value)}
                                placeholder="Address Line 1" />
                            </Form.Item>
                            <Form.Item 
                                name="building" 
                                label="Address Line 2"
                            >
                                <Input 
                                  defaultValue={Address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                placeholder="Address Line 2" />
                            </Form.Item>
                            
                            <Row>
                                <Col span={12}>
                                        <Form.Item 
                                        name="city" 
                                        label="City"
                                    >
                                        <Input 
                                        defaultValue={sCity}
                                        onChange={(e) => setSCity(e.target.value)}
                                        placeholder="City" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                <Form.Item 
                                        name="State" 
                                        label="State"
                                    >
                                        <Input 
                                        defaultValue={sState}
                                        onChange={(e) => setSState(e.target.value)}
                                        placeholder="State" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        name="country"
                                        label="Country"
                                        hasFeedback
                                    >
                                        <Select
                                          defaultValue={sCountry}
                                          onChange={(value) => setSCountry(value)}
                                         placeholder="Country">
                                            <Option value="china">China</Option>
                                            <Option value="usa">U.S.A</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item 
                                        name="postal" 
                                        label="Postal/Zip Code"
                                    >
                                        <Input 
                                           defaultValue={sZip}
                                        onChange={(e) => setSZip(e.target.value)}
                                        placeholder="input placeholder" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item 
                                name="same" 
                                valuePropName="checked" 
                                noStyle
                            >
                                <Checkbox onChange={onChange}>Same as Biling Address</Checkbox>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={10} offset={2}>
                        <h3>
                            Billing Address
                        </h3>
                               <Form
                            layout="vertical"
                            name="Shipping_add"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item 
                                name="street" 
                                label="Address Line 1"
                            >
                                <Input 
                                  defaultValue={bAddress1}
                                onChange={(e) => setBAddress1(e.target.value)}
                                placeholder="Address Line 1" />
                            </Form.Item>
                            <Form.Item 
                                name="building" 
                                label="Address Line 2"
                            >
                                <Input 
                                  defaultValue={bddress2}
                                onChange={(e) => setBAddress2(e.target.value)}
                                placeholder="Address Line 2" />
                            </Form.Item>
                            
                            <Row>
                                <Col span={12}>
                                        <Form.Item 
                                        name="city" 
                                        label="City"
                                    >
                                        <Input 
                                        defaultValue={bCity}
                                        onChange={(e) => setBCity(e.target.value)}
                                        placeholder="City" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                <Form.Item 
                                        name="State" 
                                        label="State"
                                    >
                                        <Input 
                                        defaultValue={bState}
                                        onChange={(e) => setBState(e.target.value)}
                                        placeholder="State" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        name="country"
                                        label="Country"
                                        hasFeedback
                                    >
                                        <Select
                                          defaultValue={bCountry}
                                          onChange={(value) => setBCountry(value)}
                                         placeholder="Country">
                                            <Option value="china">China</Option>
                                            <Option value="usa">U.S.A</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item 
                                        name="postal" 
                                        label="Postal/Zip Code"
                                    >
                                        <Input 
                                           defaultValue={bZip}
                                        onChange={(e) => setBZip(e.target.value)}
                                        placeholder="input placeholder" />
                                    </Form.Item>
                                </Col>
                            </Row>
                             
                        </Form>
                    </Col>
                    
                </Row>
                </Col>
                
            </Row>
            <section className="plr my-5">
              <div className="row">
              
                  <div className="col-12 d-flex justify-content-end">
                  
                  <Link to="/cart"><button type="button" className="btn btn-secondary my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Back To Cart</button></Link>
                  <button type="button" onClick={handleCheckout} className="btn btn-danger my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Order Now</button>
                  </div>
              </div>
            </section>
         </>
        );
        }

export default CheckoutScreen;