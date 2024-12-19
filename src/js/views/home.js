import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx"
import { Context } from "../store/appContext";




export const Home = () => {

	const { actions, store } = useContext(Context)

	return (
		< div className="text-center mt-5" >

			{store.contacts.map((contact, index) => ( 
				 <Card contact={contact} key={index} />
				

			 )


			)} 

		</div >
	);
};