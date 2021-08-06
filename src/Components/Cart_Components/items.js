import React, { useEffect, useState } from "react";
  
import "antd/dist/antd.css"; 
 
 const CartItem = () => {
   	const token = localStorage.getItem("token");
    const [no, setItem] = useState("");

   	const handleItem = async () => {
		// address
		const resAddress = await fetch("/wp-json/letscms/v1/cart", {
			headers: {
				letscms_token: token,
			},
		});
		const cartitems = await resAddress.json();
        if(cartitems.status === true){
          var item = cartitems.data.cart_items.length
          setItem(item);
        }
        else{
            setItem(0);
        }
        console.log(cartitems)
	 
	};
	useEffect(() => {
		handleItem();
	}, []);
 
	return (
        <>
        		{no}
        </>
	);
};

export default CartItem;
