import React, { useState } from 'react';
import plusIcon from '../../img/plus.png';
import './Sidebar.css';

function Sidebar(props) {
    const colors = ["#E63E6D" , "#3A98B9" , "#F7C8E0","#E5D1FA","#86C8BC"];

    const [listOpen, setListOpen] = useState(false);
    
    return (
        <div className="sidebar">
            <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)}/>
            <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
                {colors.map((item,index) => (
                    <li 
                        key={index} 
                        className="sidebar_list_item" 
                        style={{backgroundColor: item}} 
                        onClick={() => props.addNote(item)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
