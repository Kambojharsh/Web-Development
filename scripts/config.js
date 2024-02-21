
function openPlayerConfig(event){

    editedPlayer   = +event.target.dataset.playerid;//string to number 
    playerConfigOverlayEle.style.display = 'block';
    backdropEle.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayEle.style.display = 'none';
    backdropEle.style.display = 'none';
    formEle.firstElementChild.classList.remove('error');
    errorsOutputEle.innerHTML ='';
    formEle.firstElementChild.lastElementChild.value  = "";
}


function savePlayerConfig(event){

    event.preventDefault();
   // This line prevents the default behavior of the event. In this case, it likely prevents a form submission from causing a page reload or navigating to a new URL. This allows you to handle the form data manually. 

    const formData = new FormData(event.target);//event.target is the form element that triggered this event

    const enteredPlayername = formData.get('playername').trim();
    // This line retrieves the value of the form input field with the name 'playername' then trims widespaces
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        console.log( event.target.firstElementChild);
        errorsOutputEle.textContent = "Please Enter a valid name!";
        return;
    }
    const updatedPlayerDataEle = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataEle.children[1].textContent = enteredPlayername;

    if(editedPlayer==1){
        players[0].name = enteredPlayername;
    }
    else{
        players[1].name = enteredPlayername;
    }
    closePlayerConfig();
}