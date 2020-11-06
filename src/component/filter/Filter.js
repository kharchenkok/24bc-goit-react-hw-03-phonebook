import React from 'react';
import style from './Filter.module.css'
import PropTypes from 'prop-types'


const Filter = ({userFilter}) => {
    const handleFilter=({target})=>{
        // console.log(target.value);
userFilter(target.value)
    }
    
    return (
        <form className={style.form__style}>
        <label className={style.lable__style}>
          Find contacts by name
          <input
          placeholder="Name"
            className={style.input__style}
            onChange={handleFilter}
            type="text"
          ></input>
        </label>
      </form>
    );
};

export default Filter;


Filter.propTypes={
    userFilter:PropTypes.func.isRequired,

}