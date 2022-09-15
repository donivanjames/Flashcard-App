import React from 'react';


const CardForm = ( props ) => {

    const { handleFrontChange, handleBackChange, card} = props;

return(
<form>
        <label htmlFor='front' className='d-flex flex-column'>
                Front
                <textarea
                    id='front'
                    type='text'
                    rows={3}
                    className='my-1'
                    onChange={handleFrontChange}
                    value={card.front}
                />
            </label>
            <label htmlFor='back' className='d-flex flex-column'>
                Back
                <textarea
                    id='back'
                    type='text'
                    rows={3}
                    className='my-1'
                    onChange={handleBackChange}
                    value={card.back}
                />
            </label>
          
        </form>    
    );
}
export default CardForm;