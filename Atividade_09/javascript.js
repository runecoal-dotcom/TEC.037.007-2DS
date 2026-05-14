const demoId = document.getElementById("demo");
demoId.style.border = '2px solid purple';
demoId.textContent = "Mudei o texto pelo ID";
demoId.style.backgroundColor = 'rgb(225, 232, 253)';
demoId.style.color = 'rgb(90, 90, 90)';

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++) {
    catClass[i].style.border = '2px dashed red';
    catClass[i].style.backgroundColor = 'rgb(225, 232, 253)';
    catClass[i].style.color = 'rgb(90, 90, 90)';
} 

const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++) {
    tag[i].style.border = '2px dashed darkblue';
    tag[i].style.backgroundColor = 'rgb(225, 232, 253)';
    tag[i].style.color = 'rgb(90, 90, 90)';
}

const queryId = 
    document.querySelector("#demo-query");
queryId.style.border = '2px dashed orange';
queryId.style.backgroundColor = 'rgb(225, 232, 253)';
queryId.style.color = 'rgb(90, 90, 90)';

const demoQuery = 
    document.querySelectorAll(".demo-query-all");
demoQuery.forEach(query => {
    query.style.border = '2px dashed green';
    query.style.backgroundColor = 'rgb(225, 232, 253)';
    query.style.color = 'rgb(90, 90, 90)';
});