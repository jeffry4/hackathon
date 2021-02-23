//ajax call to data
var counter = 0

$('#fetch').on('click', run)

function run (e){
    if (counter < 15){
    $.get('https://dog.ceo/api/breeds/image/random', (data)=>{
   //console.log(data)
   var source = data.message
   var img = $(`<img class="col" src='${source}' width=20% height=30%></ul>`)
   $('#pups').append(img)
   counter+=1})
    }else{
        $('#pups').empty();
        counter = 0

    }
}
$('#clear').on('click', e=>{
    $('#pups').empty()

})
//set up json parse data
//create function to record words from search?
// add event listner to button to pull data  
//start functions for js 
//once data is pulled clear body 
// take from jdata and create dom munip
//append to body or to new header 


/* refrence for later to create 
<div id="results">
            <span class="result-card">
                <h3 class="card-title">Vegetable-Pasta Oven Omelet</h3>
                <img class="card-image" src='http://img.recipepuppy.com/560556.jpg'></ul>
                <div class="card-ingredients">
                    <em>Ingredients:</em>
                    tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian
                    seasoning, salt, black pepper
                </div>
                <a href="http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763">Visit Recipe</a>
            </span>
            */
