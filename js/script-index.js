$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.js-back').hide();

	//FUNCION PINTA PARRAFO 
 	printNews();

});


function printNews() {
 
 $(".callout-news p").text("NUEVAS RECETAS");

}
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//RECORRE
	for ( var i = 0; i < recipesArray.length; i++ ) {
 		
 		var recipe = recipesArray[i];
 		if( recipe.highlighted == true ) {
 			
 			renderRecipe(recipe);
 		}
 	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	//VARIABLES PARA HTML
 	var aItem = $('<a class="item-recipe" href="#"></a>');
  		  
 	var spanAttr = $('<span class="attribution"></span>');
 	
 	var spanTitle = $('<span class="title-recipe"></span>');
 	//AGREGA EL VALOR QUE TIENE TITULO
 	spanTitle.text(recipe.title);
 	
 	var spanMeta = $('<span class="metadata-recipe"></span>');
 	
 	var spanAuthor = $('<span class="author-recipe"></span>');
 	spanAuthor.text(recipe.source.name);
 	
 	var spanBook = $('<span class="bookmarks-recipe"></span>');
 	
 	var spanIcon = $('<span class="icon-bookmark"></span>');
 	spanIcon.text(recipe.cookTime);
 	
 	var imgUrl = $('<img/>');
 	imgUrl.attr('src', recipe.source.url);
 
 	//PINTA ETIQUETAS
 	aItem.append(spanAttr);
 	spanAttr.append(spanTitle);
 	spanAttr.append(spanMeta);
 	spanMeta.append(spanAuthor);
 	spanMeta.append(spanBook);
 	spanBook.append(spanIcon);
 	aItem.append(imgUrl);
 
 	//TODO
 	$('.list-recipes').append(aItem);
 }
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


