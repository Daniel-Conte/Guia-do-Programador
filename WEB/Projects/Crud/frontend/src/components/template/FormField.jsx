/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
<div className="col-12 col-md-6">
    <div className="form-group">
        <label>{props.labelName}</label>
        <input type="text" className="form-control" name={props.inputName} placeholder={props.placeholder} value={props.value} onChange={props.change}/>
    </div>
</div>