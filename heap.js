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

async function heapSort(arr){
    let n = arr.length;
    for(let i=Math.floor(n/2)-1; i>=0; i--){
        parentDiv[0].childNodes[i].style.backgroundColor = 'red';
        await heapify(arr,n,i);
        await sleep(speed);
        parentDiv[0].childNodes[i].style.backgroundColor = 'black';
    }
    for(let i=n-1; i>=0; i--){
        parentDiv[0].childNodes[0].style.backgroundColor = 'red';
        parentDiv[0].childNodes[i].style.backgroundColor = 'red';
        swapNumber(arr,0,i);
        swapColorHeight(0,i);
        await sleep(speed);
        parentDiv[0].childNodes[0].style.backgroundColor = 'black';
        parentDiv[0].childNodes[i].style.backgroundColor = 'black';
        await heapify(arr,i,0);
        await sleep(speed);
        parentDiv[0].childNodes[i].style.backgroundColor = 'green';
    }
}

async function heapify(arr,n,i){
    let largest = i;
    let l = 2*i+1;
    let r = 2*i+2;
    if(l<n && arr[l]>arr[largest]){
        largest = l;
    }
    if(r<n && arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!=i){
        parentDiv[0].childNodes[i].style.backgroundColor = 'red';
        parentDiv[0].childNodes[largest].style.backgroundColor = 'red';
        swapNumber(arr,i,largest);
        swapColorHeight(i,largest);
        await heapify(arr,n,largest);
        await sleep(speed);
        parentDiv[0].childNodes[i].style.backgroundColor = 'black';
        parentDiv[0].childNodes[largest].style.backgroundColor = 'black';
    }
}

function swapNumber(arr,i){
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
}

function swapColorHeight(i){                                                                                                                                  
        let a = 'elem'+i;
        let b = 'elem'+0;
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

function swapNumber(arr,i,largest){
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
}

function swapColorHeight(i,largest){                                                                                                                                
        let a = 'elem'+i;
        let b = 'elem'+largest;
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

async function myFunction(arr){
    array_size.disabled = true;
    await heapSort(arr);
    array_size.disabled = false;
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
          }, false);

