import React from 'react'
import '../CSS/list.css'

function List(props) {
  return (
    <section className='container-items'>
        <ul>
            {props.children}
        </ul>
    </section>
  );
}

export default List
