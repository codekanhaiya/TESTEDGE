var x = document.getElementById("Questions");
var y = document.getElementById("Responses");
var z = document.getElementById("Settings");

function ques(){
    x.style.display="flex";
    y.style.display="none";
    z.style.display="none";
}
function res(){
    x.style.display="none";
    y.style.display="flex";
    z.style.display="none";
}
function set(){
    x.style.display="none";
    y.style.display="none";
    z.style.display="flex";
}

// for chenging questions type

function showQtype(){
    // Get the selected input type
    var selectedQType = document.getElementById("QItype").value;
    // Create a new input element based on the selected type
    if(selectedQType === "textarea"){
        var QIElement = document.createElement("textarea");
        QIElement.placeholder = "Long Question...";
        QIElement.classList.add("paragraph");
    }else{
        var QIElement = document.createElement("input");
        QIElement.placeholder = "Short Question...";
    }

    if (QIElement.type="file"){
        QIElement.classList.add("filetype");
    }
    QIElement.type = selectedQType;
    //QIElement.placeholder = "Enter your " + selectedQType;
    // Clear previous content in the container
    var QIContainer = document.getElementById("QIContainer");
    QIContainer.innerHTML = "";
    // Append the new input element to the container
    QIContainer.appendChild(QIElement);
}


// for changing Answer type
function showAtype(){
    var selectedAtype = document.getElementById("AItype").value;

    // Create a new input element based on the selected type
    if(selectedAtype === "textarea"){ 
        var AIElement = document.createElement("textarea");
        AIElement.placeholder = "Long Answer...";
        AIElement.classList.add("paragraph");
    }
    else{
        var AIElement = document.createElement("input");
        AIElement.placeholder = "Short Answer...";
    }

    if(AIElement.type="file"){
        AIElement.classList.add("filetype");
    }

    var opIDbtn = document.getElementById("opID");   // only for options

    var newOptions = document.getElementById("newOptions");// for removing created options 

    if(selectedAtype==="radio" || selectedAtype === "checkbox"){
        AIElement.type="text";
        AIElement.placeholder="Option";
        AIElement.classList.add("RCdesign");

        opIDbtn.style.display="flex";    //only for options
        newOptions.innerHTML="";

    }else{
        AIElement.type=selectedAtype;

        opIDbtn.style.display="none";    //only for options
        newOptions.innerHTML="";
    }

    var AIContainer = document.getElementById("AIContainer");
    AIContainer.innerHTML = "";

    // for options icon
    var optIcon = document.getElementById("optionIcon")
    if(selectedAtype==="radio"){
        var iconHtml = document.createElement("i");
        iconHtml.innerHTML="&emsp;";
        iconHtml.classList.add("fa-regular");
        iconHtml.style.color="blue";
        iconHtml.classList.add("fa-circle-dot");
        AIContainer.appendChild(iconHtml);
    }else if(selectedAtype==="checkbox"){
        var iconHtml = document.createElement("i");
        iconHtml.innerHTML="&emsp;";
        iconHtml.classList.add("fa-regular");
        iconHtml.style.color="blue";
        iconHtml.classList.add("fa-square-check");
        AIContainer.appendChild(iconHtml);
    }

    AIContainer.appendChild(AIElement);

}

// increment-decrement option field
function addOpt(){
    var AIContainer = document.getElementById("AIContainer");
    var newOptions = document.getElementById("newOptions");
    var newDiv = document.createElement('div');
    newDiv.innerHTML=AIContainer.innerHTML;
    newOptions.appendChild(newDiv);
}
function rmvOpt(){
    var newOptions = document.getElementById("newOptions");
    if (newOptions.children.length > 0) {
        newOptions.removeChild(newOptions.lastChild);
    } else {
        alert("At least one option is required.");
    }
}


