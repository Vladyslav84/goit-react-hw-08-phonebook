import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filteredSelector,getContacts } from '../redux/selectors';
import * as operations from '../redux/operations';

// const getContacts = state => state.contactsSlice?.entities;

export default function ContactList  ()  {

  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetcContacts()), [dispatch]);
  const filteredContactList = useSelector(getContacts);

  console.log(filteredContactList)
 
  return (
    <ul className={s.contactList}>
      <li>fff</li>
      {filteredContactList && filteredContactList.map((user) => (
             
        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => dispatch(operations.deleteContacts(user.id))}
          >Delete</button>
          
        </li>
      ))
      } 
    </ul>
  )
}