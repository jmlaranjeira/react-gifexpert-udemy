
import PropTypes from 'prop-types';
import React, {useState} from 'react';

export const AddCategory = ({ setcategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ) {
            setcategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>{inputValue}</h1>
            <input type="text"
            value={ inputValue }
            onChange={ handleInputChange } />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}