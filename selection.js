let arr = [];
for(let i=0;i<10;i++)
{
    arr.push(Math.floor(Math.random() * 200) + 20);
}
let parentDiv = document.getElementsByClassName('parentDiv');
let btn = document.getElementsByClassName('startbtn');
let speed_slider= document.getElementById('speed');
let speed = Number(speed_slider.value);
let array_size = document.getElementById('array-size');

let i=0;
arr.forEach(e=>{
    let innerDiv = document.createElement('div');
    innerDiv.innerText = e;
    innerDiv.style.color = 'white';
    innerDiv.style.height = (e + 'px');
    innerDiv.style.backgroundColor = 'black';
    innerDiv.style.margin='2px';
    innerDiv.style.width = '50px';
    innerDiv.setAttribute('id', 'elem'+i);
    i++;
    innerDiv.classList.add('innerDiv');
    parentDiv[0].appendChild(innerDiv);
});

btn[0].addEventListener("click", ()=>myFunction(arr));
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function myFunction(arr){
    array_size.disabled = true;
    for(let i=0; i<arr.length; i++){
        let lowest=i;
        for(let j=i+1; j<arr.length; j++){
            parentDiv[0].childNodes[j].style.backgroundColor = 'red';
            parentDiv[0].childNodes[lowest].style.backgroundColor = 'blue';
            await sleep(speed);

            if(arr[j] < arr[lowest]){
                parentDiv[0].childNodes[lowest].style.backgroundColor = 'black';
                lowest = j;
            }
            else{
                parentDiv[0].childNodes[j].style.backgroundColor = 'black';
            }
        }
        swapNumber(arr,i,lowest);
        swapColorHeight(i,lowest);
        parentDiv[0].childNodes[i].style.backgroundColor = 'green';
    }
    parentDiv[0].childNodes[arr.length-1].style.backgroundColor = 'green';
    array_size.disabled = false;
}


function swapNumber(arr,i,lowest){
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    }

    function swapColorHeight(i,lowest){
        let a = 'elem'+i;
        let b = 'elem'+lowest;
        let e1 = document.getElementById(a);
        let e2 = document.getElementById(b);
        let bg1 = e1.style.backgroundColor;
        let bg2 = e2.style.backgroundColor;
        let h1 = e1.clientHeight;
        let h2 = e2.clientHeight;
        e1.style.backgroundColor = bg2;
        let temp = e1.innerText;
        e1.innerText = e2.innerText;
        e2.innerText = temp;
        e2.style.backgroundColor = bg1;
        e1.style.height = h2 + 'px';
        e2.style.height = h1 + 'px';
        }
    speed_slider.addEventListener('input', function () {
        speed = Number(speed_slider.value);
        }, false);


        array_size.addEventListener('input', function () {
            parentDiv[0].innerHTML = '';
            arr = [];
           let size = Number(array_size.value);
           for(let i = 0; i < size; i++) {
            arr.push(Math.floor(Math.random() * 200) + 20);
           }
           let i=0;
arr.forEach(e=>{
    let innerDiv = document.createElement('div2');
    innerDiv.innerText = e;
    innerDiv.style.color = 'white';
    innerDiv.style.height = (e + 'px');
    innerDiv.style.backgroundColor = 'black';
    innerDiv.style.margin='2px';
    innerDiv.style.width = '50px';
    innerDiv.setAttribute('id', 'elem'+i);
    i++;
    innerDiv.classList.add('innerDiv');
    parentDiv[0].appendChild(innerDiv);
});
            }, false);