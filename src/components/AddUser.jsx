import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import UserConsumer from '../context';

const AddUser = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    // show or hide form button click event
    const onClick = () => setVisible(!visible);

    // all onChange event functions
    const changeName = (e) => setName(e.target.value);
    const changeDepartment = (e) => setDepartment(e.target.value);
    const changeSalary = (e) => setSalary(e.target.value);

    const mouseEnter = (e) => {
        if (visible) {
            e.target.style.background = "#f00";
        } else {
            e.target.style.background = "#0f0";
        }
    }
    const mouseLeave = (e) => e.target.style.background = "#fff";

    const onFormSubmit = (e, dispatch) => {
        e.preventDefault();
        const newUser = { 
            id: uuid(),
            name: name.toLowerCase(),
            department: department.toLowerCase(),
            salary: salary + " TL" };
        
            // add user function
        dispatch({type: "add_user", payload: newUser});

        // update text box
        setName("");
        setDepartment("");
        setSalary("");
    }
    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="add-user">
                            <button className="show-btn" onClick={onClick} onMouseEnter={mouseEnter}
                                style={visible ? { border: "2px solid #f00" } : { border: "2px solid #0f0" }}
                                onMouseLeave={mouseLeave} >{visible ? "Hide Form" : "Show Form"}</button >
                            {
                                visible ? <form onSubmit={(e) => onFormSubmit(e, dispatch)}>
                                    <div className="input-box" >
                                        <input type="text" required onChange={(e) => changeName(e)} value={name} />
                                        <span>Name</span>
                                    </div >

                                    <div className="input-box">
                                        <input type="text" required onChange={(e) => changeDepartment(e)} value={department} />
                                        <span>Department</span>
                                    </div>

                                    <div className="input-box">
                                        <input type="text" required onChange={(e) => changeSalary(e)} value={salary} />
                                        <span>Salary</span>
                                    </div>
                                    <button type="submit">Add User</button>
                                </form> : null
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default AddUser;