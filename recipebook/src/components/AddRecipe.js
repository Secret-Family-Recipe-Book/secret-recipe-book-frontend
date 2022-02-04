import React from 'react'
import '../App.css';

const AddRecipe = () => {
    return (
        <div>
            <form className='form'>
                <label>
                    <input
                        className='label name'
                        type="text"
                        name="name"
                    placeholder="Mama's kickin' chkn" />
                </label>
                <label>
                    <input 
                        className='label'
                        type="text"
                        name="source"
                    placeholder="Who made it?" />
                </label>
                <label>
                    <input
                        className='ingredients'
                        type="checkbox"
                        name="ingredients"
                    />
                    
                </label>
            </form>
        </div>
    )
}

export default AddRecipe
