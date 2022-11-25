console.log("Ajax tut in one go");

let fetchbtn=document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler()
{
    console.log("You have clicked the button");

    //Instantiate XHR object
    const xhr=new XMLHttpRequest();

    //open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.open('POST', 'https://api.instantwebtools.net/v1/airlines' ,true);
    xhr.getResponseHeader('Content-type','application/json');

    //What to do on progress
    xhr.onprogress=function(){
        console.log("On Progress");
    }

    xhr.onreadystatechange=function()
    {
        console.log("Ready state is ",xhr.readyState);
    }


    //What to do when response is ready
    xhr.onload=function(){
        if(this.status === 200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log("Some error occured");
        }
        
    }

    //Send the request
    params=`{
        "id": 12,
        "name": "Sri Lankan Airways",
        "country": "Sri Lanka",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaairways.com",
        "established": "1990"
    }`

    xhr.send(params);
    

    console.log("We are done");
}

let popbtn=document.getElementById("popbtn");
popbtn.addEventListener('click',popHandler);


function popHandler()
{
    console.log("You have clicked the pophandlerbutton");

    //Instantiate XHR object
    const xhr=new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'https://dummyjson.com/products', true);



    //What to do when response is ready
    xhr.onload=function(){
        if(this.status === 200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for (key in obj)
            {
                str+=`<li> ${obj[key]} <\li>`;
            }
            list.innerHTML=str;
        }
        else
        {
            console.log("Some error occured");
        }
        
    }

    //Send the request
    
    xhr.send();
    

    console.log("We are done");
}
