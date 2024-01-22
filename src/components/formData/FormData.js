import React from 'react';

export default function Formdata(props) {
  return (
    <div className='card mx-auto w-50 m-3'>
        <ul class="list-group">
            <li class="list-group-item">Hello! {props.name}, You are logged in Successfully</li>
            <li class="list-group-item">Your Age: {props.age}</li>
            <li class="list-group-item">Your id: {props.id}</li>
        </ul>
    </div>
  )
}