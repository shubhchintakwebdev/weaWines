import React from 'react'
import { render } from 'react-dom';
import { Row, Col, Form, Input, Button, Select, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"


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

                <Col span={7} >

                            <Form.Item 
                                name="First_Name" 
                                label="First Name"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={7} offset={1} >
                            <Form.Item 
                                name="contact" 
                                label="Contact Number"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                {
                                    type: 'email',
                                },
                                ]}
                            >
                                <Input placeholder="input placeholder" />
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
                                label="Unit and Street No."
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item 
                                name="building" 
                                label="Building (if any)"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item 
                                name="city" 
                                label="City"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        name="country"
                                        label="Country"
                                        hasFeedback
                                    >
                                        <Select placeholder="Please select a country">
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
                                        <Input placeholder="input placeholder" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item 
                                name="same" 
                                valuePropName="checked" 
                                noStyle
                            >
                                <Checkbox>Same as Biling Address</Checkbox>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={10} offset={2}>
                        <h3>
                            Billing Address
                        </h3>
                        <Form
                            layout="vertical"
                            name="Billing_add"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item 
                                name="street" 
                                label="Unit and Street No."
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item 
                                name="building" 
                                label="Building (if any)"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item 
                                name="city" 
                                label="City"
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        name="country"
                                        label="Country"
                                        hasFeedback
                                    >
                                        <Select placeholder="Please select a country">
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
                                        <Input placeholder="input placeholder" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col span={6} offset={11}>
                            <Form.Item>
                            <Link to="/cart"><button type="button" className="btn btn-secondary my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Back To Cart</button></Link>
                            </Form.Item>
                            </Col>
                            <Col span={6} offset={1}>
                            <Form.Item>
                            <button type="button" className="btn btn-danger my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Order Now</button>

                            </Form.Item>
                            </Col>
                            </Row> */}
                        </Form>
                    </Col>
                </Row>
                </Col>
            </Row>
         </>
        );
                        }

export default CheckoutScreen;