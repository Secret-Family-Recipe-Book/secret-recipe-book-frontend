import React, {useState} from 'react'
import '../App.css';

const AddRecipe = () => {

    //state to hold ingredients
    const [ingredient, setIngredient] = useState([])
    const addIngredient = (e) => {
        setIngredient({...ingredient, [e.target.name]:e.target.value})
        //function to handle adding ingredient to list.
    }
    

    const addIngredientButton = (e) => {
        e.preventDefault()
        let itemIngredients = ingredient.forEach((item, index) => {
                return <li key={index}>{item}</li>
        })
        return itemIngredients
    }
    console.log(ingredient)
    

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
                        type="text"
                        name="ingredients"
                        placeholder="add ingredient"
                    onChange={addIngredient}/>
                    <button
                        name="addToList"
                        onSubmit={addIngredientButton}
                    >+</button>
                </label>
                <ul>
                    
                </ul>
            </form>
        </div>
    )
}

export default AddRecipe
