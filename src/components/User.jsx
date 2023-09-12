import React, { useState } from 'react';
import UserConsumer from '../context';

const User = ({ user, onDelete }) => {
    const { id, name, department, salary } = user;
    const [visible, setVisible] = useState(false);

    const onClick = () => setVisible(!visible);
    const onClickDelete = (id, dispatch) => dispatch({type: "delete_user", payload: id});

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="user">
                            <div className="user-title">
                                <input type="text" onClick={onClick} readOnly value={name} />
                                <i onClick={() => onClickDelete(id, dispatch)} className="fa-solid fa-trash"></i>
                            </div>
                            {
                                visible ? <div className="user-detail">
                                    <input type="text" readOnly value={department} />
                                    <input type="text" readOnly value={salary} />
                                </div> : null
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default User;