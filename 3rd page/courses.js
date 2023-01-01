var courses = [{
    image: './images/html attributes.jpg',
    title: 'html attributes',
    category: 'HTML',
    price: 250
},
{
    image: './images/html-basic.jpg',
    title: 'basics of HTML',
    category: 'HTML',
    price: 120
},
{
    image: './images/html-tag.jpg',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 199
},
{
    image: './images/advanced-css-selectors.png',
    title: 'CSS selectors',
    category: 'CSS',
    price: 299
},
{
    image: './images/variables-and-datatypes-in-JavaScript-featured-image.jpg',
    title: 'variables and data type ',
    category: 'JS',
    price: 100
},
{
    image: './images/js operators.png',
    title: 'Javascript operators ',
    category: 'JS',
    price: 350
},
{
    image: './images/javascript.jpeg',
    title: 'What is JavaScript ?',
    category: 'JS',
    price: 170
},
{
    image: './images/CSS essentials.jpg',
    title: 'CSS essentials',
    category: 'CSS',
    price: 390
},
{
    image: './images/JS DOM.jpg',
    title: 'JavaScript DOM',
    category: 'JS',
    price: 260
},
{
    image: './images/css full course.jpg',
    title: 'css full course',
    category: 'CSS',
    price: 140
},
{
    image: './images/css animations.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 265
},
{
    image: './images/css properties.png',
    title: 'css properties',
    category: 'CSS',
    price: 100
},
{
    image: './images/js loops.jpg',
    title: 'javascript loops',
    category: 'JS',
    price: 160
},
{
    image: './images/JavaScript_Cheat_Sheet.png',
    title: 'JavaScript cheat sheet',
    category: 'JS',
    price: 360
},
{
    image: './images/PHP full course.jpg',
    title: 'PHP full course',
    category: 'php',
    price: 276
},
{
    image: './images/php-data-types.png',
    title: 'Php data types',
    category: 'php',
    price: 325
},
{
    image: './images/Best-PHP-Courses-for-Beginners.png',
    title: 'Best PHP Courses for Beginners',
    category: 'PHP',
    price: 120
},
{
    image: './images/backend dev.jpg',
    title: 'Backend developper using php',
    category: 'php',
    price: 240
},
{
    image: './images/Arrays-in-JavaScript.png',
    title: 'Arrays in JavaScript',
    category: 'JS',
    price: 240
},
{
    image: './images/php-functions.png',
    title: 'PHP functions',
    category: 'PHP',
    price: 235
},
{
    image: './images/HTML-cheatsheet.png',
    title: 'HTML cheatsheet',
    category: 'html',
    price: 103
}

]

	
var cont = document.querySelector('.crt'),
listing = document.querySelector('#listing');

let Cours= (image, titre, prix)=> {
    let div = document.createElement('div');
    div.setAttribute('class', 'card text-center col-3 me-2 mb-2');
    let img = document.createElement('img');
    img.setAttribute('src',image)
    img.setAttribute('class','img-container ')

    let divis = document.createElement('div')
 

    let Cname = document.createElement('h2');
    Cname.setAttribute('class', 'course-title');
    let Ctit = document.createTextNode(titre);
    Cname.appendChild(Ctit);

    let span = document.createElement('span');
    span.setAttribute('class', 'badge badge-pill badge-danger bg-danger text-white');
    span.appendChild(document.createTextNode(prix + ' DH'));

    div.appendChild(img);
    divis.appendChild(Cname);
    divis.appendChild(span);
    div.appendChild(divis)
    cont.append(div)
}


courses.forEach((element) => {
    Cours(element.image, element.title, element.price);
})

let Categories = (cat)=>{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    li.id=cat;
    listing.append(li);
}

let categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]

categories.forEach((v) => {
    Categories(v);
})



let search = ()=>{
    let result;
    let cat = document.getElementsByClassName('form-control')[0].value
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].title.toLowerCase().includes(cat.toLowerCase().trimStart())){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
    if(cat =="")
        courses.forEach((element)=>{
            Cours(element.image,element.title,element.price)
        })
}
document.getElementById('search').addEventListener('keyup',search)



document.getElementById('all').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    courses.forEach((element) => {
        Cours(element.image, element.title, element.price);
    })
})
document.getElementById('js').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="js"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('html').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="html"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('css').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="css"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('php').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="php"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})


let Valeur=()=>{
    let value =document.getElementById('range').value
    document.getElementById('valeur').innerHTML = "Value : "+ value +"DH"
    document.getElementById('range').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
        for(let i =0;i<courses.length;i++){
            if(courses[i].price <= value){
                Cours(courses[i].image,courses[i].title,courses[i].price)
            }
           
        }
    })
}



    