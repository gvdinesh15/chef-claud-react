import "../index.css";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromMistral } from "../Ai";

export default function Body() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients); // Updated to use the correct function
        setRecipe(recipeMarkdown);
    }

    function addIngredient(event) {
        event.preventDefault(); // Prevent form submission
        const formData = new FormData(event.target); // Use FormData to get form input
        const newIngredient = formData.get("ingredient");
        if (newIngredient) {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        }
        event.target.reset(); // Clear the input field
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
