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

async function mergeSort(arr, l, r){
    if(l>=r){
        parentDiv[0].childNodes[l].style.backgroundColor = 'green';
        await sleep(speed);
        return;
    }
    let m = l + parseInt((r-l)/2);
    parentDiv[0].childNodes[m].style.backgroundColor = 'blue';
    await sleep(speed);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m+1, r);
    await merge(arr, l, m, r);
}

async function merge(arr, l, m, r){
    let n1 = m-l+1;
    let n2 = r-m;
    let L = [];
    let R = [];
    for(let i=0; i<n1; i++){
        parentDiv[0].childNodes[l+i].style.backgroundColor = 'red';
        L.push(arr[l+i]);
    }

    for(let i=0; i<n2; i++){
        parentDiv[0].childNodes[m+1+i].style.backgroundColor = 'red';
        R.push(arr[m+1+i]);
    }
    await sleep(speed);
        let i=0, j=0, k=l;
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k] = L[i];
            parentDiv[0].childNodes[k].style.height = (L[i] + 'px');
            parentDiv[0].childNodes[k].innerText = L[i];
            parentDiv[0].childNodes[k].style.backgroundColor = 'black';
            parentDiv[0].childNodes[l+i].style.backgroundColor = 'black';
            i++;
        }
        else{
            arr[k] = R[j];
            parentDiv[0].childNodes[k].style.height = (R[j] + 'px');
            parentDiv[0].childNodes[k].innerText = R[j];
            parentDiv[0].childNodes[k].style.backgroundColor = 'black';
            parentDiv[0].childNodes[m+1+j].style.backgroundColor = 'black';
            j++;
        }
        k++;
    }
    while(i<n1){
        arr[k] = L[i];
        parentDiv[0].childNodes[k].style.height = (L[i] + 'px');
        parentDiv[0].childNodes[k].innerText = L[i];
        parentDiv[0].childNodes[k].style.backgroundColor = 'black';
        parentDiv[0].childNodes[l+i].style.backgroundColor = 'black';
        i++;
        k++;
    }
    while(j<n2){
        arr[k] = R[j];
        parentDiv[0].childNodes[k].style.height = (R[j] + 'px');
        parentDiv[0].childNodes[k].innerText = R[j];
        parentDiv[0].childNodes[k].style.backgroundColor = 'black';
        parentDiv[0].childNodes[m+1+j].style.backgroundColor = 'black';
        j++;
        k++;
    }
    for(let i=l;i<=r;i++){
        parentDiv[0].childNodes[i].style.backgroundColor = 'green';
        let elem = document.getElementById('elem'+i);
        elem.style.height = arr[i] + 'px';
        elem.style.backgroundColor = 'green';
        await sleep(speed);
        
    }
}

async function myFunction(arr){
    array_size.disabled = true;
    await mergeSort(arr, 0, arr.length-1);
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

