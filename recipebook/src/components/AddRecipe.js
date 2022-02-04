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
    //cannot figure out how to make a list out of the state and display the list on its on div underneath the form, I am moving on
    

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
                    <br></br>
                <label>What time a day should we eat this? {' '}
                    <select name="category">
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='dinner'>Dinner</option>
                        <option value='dessert'>Dessert</option>
                    </select>
                </label>
                <label>
                    <input
                        type="textarea"
                        className="label"
                        placeholder="Preparation"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddRecipe
