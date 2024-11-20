let count = 0;


function slider(m){
    count = count+m
    slider(m);
}
slider(m);

function slider(num){
    let slider = document.getElementsByClassName('div1')


    for(let y of slider){
        y.style.display = "none";
    }
}