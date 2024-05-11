export const API_KEY = "AIzaSyB22gWdjRpJ0JWDrYqbZ8lKieWKvISwl30"



export const ConvertC = (val) => {
    if (val > 1000 && val <1000000) {
        return (val / 1000).toFixed(0) + "K"
    }
    if (val > 1000000) {
        return (val / 1000000).toFixed(0) + "M"
    }
}