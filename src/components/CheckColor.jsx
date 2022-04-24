import React from "react";

export default function CheckColor({ color, onColorChange }) {
  return (
    <div className='select-colors pb-4 text-center' data-toggle='buttons'>
      <p>Color : {color}</p>
      <div className='form-check p-0 d-flex gap-2'>
        <label className='btn btn-success active'>
          <input
            value='pink'
            onChange={onColorChange}
            type='radio'
            name='options'
            id='option2'
            autoComplete='off'
          />
          <span className='glyphicon glyphicon-ok'></span>
        </label>

        <label className='btn btn-primary'>
          <input
            value='red'
            onChange={onColorChange}
            type='radio'
            name='options'
            id='option1'
            autoComplete='off'
          />
          <span className='glyphicon glyphicon-ok'></span>
        </label>

        <label className='btn btn-info'>
          <input
            onChange={onColorChange}
            value='black'
            type='radio'
            name='options'
            id='option2'
            autoComplete='off'
          />
          <span className='glyphicon glyphicon-ok'></span>
        </label>
      </div>
    </div>
  );
}
