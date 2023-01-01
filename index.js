
// Creating courses and random display 

var cours = [
    ["../image/html attributes.jpg",
    "HTML attributes and values",
    "19.9$"],
    ["../image/crud php mySQL bootstrap.jpg",
    "Manipulating Crud Using Php",
    "45.9$"],
    ["../image/css selectors.jpg",
    "CSS Selectors",
    "69.9$"],
    ["../image/Basics of HTML.png",
    "Basics of HTML",
    "5.9$"],
    ["../image/js variables.jpg",
    "Variables And Sata Type Of Javascript",
    "19.9$"],
    ["../image/What is javascript.png",
    "What Is Javascript ?",
    "9.9$"],
];


let count1 = Math.floor(Math.random()*cours.length),
count2 = Math.floor(Math.random()*cours.length),
count3 = Math.floor(Math.random()*cours.length);
while(count1 == count2 ){
    count2 = Math.floor(Math.random()*cours.length);
}
while(count2 == count3 ){
    count3 = Math.floor(Math.random()*cours.length);
}
while(count1 == count3 ){
    count2 = Math.floor(Math.random()*cours.length);
}
const tab = [cours[count1],cours[count2],cours[count3]]


function test(courseAl){
    var container=document.getElementById("courses");

    var course=document.createElement('div');
    var image=document.createElement('img');
    course.classList="course";
    var image_container=document.createElement('div'); 
    image_container.classList="image_container";
    image_container.appendChild(image);
    var phrase=document.createElement('h3');
    var taman=document.createElement('p');

    phrase.innerHTML=courseAl[1];
    taman.innerHTML=courseAl[2];
    image.src=courseAl[0];


    course.appendChild(image_container);
    course.appendChild(phrase);
    course.appendChild(taman);

    container.appendChild(course);
}

tab.forEach(element => {
    test(element)
});


//refering with the fisrt button 


   










