import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button,Tag,Card  } from 'antd';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { List, Typography, Divider } from 'antd';
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
 		width: "400px",
	},
};
const data = [
    '3 month contract.',
     <a><a style={{fontWeight:'600'}}>$500 nett per month</a> charged on the first working day of the month via credit card payment.</a>,
    <a><a style={{fontWeight:'600'}}>5 or 6</a> bottles with free delivery to your home by the 7th of every month.</a>,
    'PDF tasting notes and background information of the wines.',
    '5% off for repeat orders of any wines in the packs  (whilst stocks lasts) to be delivered in the following month’s pack.',
    'Priority invite to our online or offline tastings.',
  ];
  const data1 = [
    '  FREE 1 pair of Jancis Robinson stemless wine glass (worth $124).',
    '10% off tasting samples for our online ZOOM tasting events.'
  ];

Modal.setAppElement("#root");
const ViewAdvance = (ids) => {
    const id = ids.order_id;
    const token = localStorage.getItem("token");
 	const [modalIsOpen, setIsOpen] = React.useState(false);
	 

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
             <button type="button"  onClick={openModal}  className="btn btn-danger my-2 mx-3" style={{minWidth:"300px",borderRadius:"25px"}}>Advance Tier Subscription <i className="fas fa-arrow-right"></i></button>
			 
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
            <i onClick={closeModal} className="fa fa-times" style={{float:'right'}} aria-hidden="true"></i>
				<div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="headLeft"  style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>ADVANCED TIER SUBSCRIPTION</h2>
                <List
                 dataSource={data}
                 size="small"
                renderItem={item => (
                    <List.Item>
                 <i style={{fontSize:'6px', color:'#9B2120', padding:'5px'}} className="fa fa-circle float-right"/>  {item}
                    </List.Item>
                )}
                />
                <p>But WAIT, what if you are more committed?<a className="text-danger" href="mailto:info@weawines.com.sg?Subject=Enquiry for Advanced Tier"> Sign up</a> for a <a style={{fontWeight:'bold', padding:'0', margin:'0'}}>6 month</a> subs instead and get a further:</p>
                <List
                 dataSource={data1}
                 size="small"
                renderItem={item => (
                    <List.Item>
                 <i style={{fontSize:'6px', color:'#9B2120', padding:'5px'}} className="fa fa-circle float-right"/>  {item}
                    </List.Item>
                )}
                />
                   <a href="mailto:info@weawines.com.sg?Subject=Enquiry for Advanced Tier" className="btn btn-danger my-2 mx-3" style={{minWidth:"300px",borderRadius:"25px"}}>Subscribe Now</a>
                </div>
			</Modal>

			 	</>
	);
};
export default ViewAdvance;
