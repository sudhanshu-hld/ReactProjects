import { useState } from 'react';

const Main = () => {

    let [ingredients, setIngredients] = useState([]); // setting the state for the ingredients to get it render on the screen when changes occur inside it

    //Mapping the ingredients to display them on the screen when added in the array
    let new_ingredients = ingredients.map((items) => {
        return(
            <li className="list-disc" key={items}>{items}</li>
        );
    });

    //creating event handler function that shows the items in the screen when the form is submitted
    // function handleSubmit(event){
    //     event.preventDefault(); // Stops default form submission behavior like Reloading and navigating to new URL
    //     const formElement = event.currentTarget;
    //     const formData = new FormData(formElement); // to target the current data entered inside the form
    //     const newIngredient = formData.get("ingredient"); // to get that targeted data
    //     setIngredients(prevIngredients =>[...prevIngredients, newIngredient]); //using set function of the useSate to add new items in the ingredients array
    //     formElement.reset();
    // }

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return(
        <main>
            {/* <form className="input-form" onSubmit={handleSubmit}> */}
            <form className="input-form" action={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" id="ingredient" />
                <button type="submit" className="ingredient-btn">+ Add ingredient</button>
            </form>
            <ul>
                {new_ingredients}
            </ul>
        </main>
    )
}

export default Main;

// aria-label : aria-label provides a text label for an element when there's no visible label available. The aria-label attribute is part of ARIA (Accessible Rich Internet Applications) and is used to improve accessibility for screen readers and assistive technologies.

// onSubmit : It is an event listner that calls function handleSubmit() when the form is submitted. 