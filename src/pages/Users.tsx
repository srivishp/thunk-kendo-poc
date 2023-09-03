import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/reducers/usersSlice';

import isEmpty from 'lodash/isEmpty';

 
const Cards = ({user}:any) => {
  return (
    
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={user.id}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </div>
    
  )
}
const Users = () => {
  const dispatch = useDispatch<any>();
  const { data, loading, error } = useSelector((state:any) => state.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  let content;
  console.log(loading); 
    console.log(data);
    if(!isEmpty(data)) {
    content = data.map((item: { id: any; }) => {
      return <Cards user={item} key={item.id} />
    })
  } 
  return <div>{content}</div>
}
export default Users;