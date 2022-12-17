/* This is an AJAX (Asynchronous JavaScript and XML)--actually AJAJ (Asynchronous JavaScript and JSON)
   file, but it's still called AJAX--file.  This will allow us to send and receive data on the fly
   without reloading the page. */

var serviceRows = document.getElementById("tbodyRows") ;
var serviceRequest ;
var serviceData ;
var serviceOrder = "sortout" ;

serviceRequest = new XMLHttpRequest( ) ;
serviceRequest.open("GET", "productOne.json") ;
serviceRequest.send( ) ;
serviceRequest.onload = function( )

{
	serviceData = JSON.parse(serviceRequest.responseText) ;
	renderTable(serviceData) ;
}

function renderTable(data)
    {
        var prodRowData = "";
        for (i = 0; i<data.length; i++)
            {
                prodRowData += "<tr><td>" + data[i].prodID + "</td><td>" + "<img src=" +data[i].prodImg+ ">" + "</td><td id='prodName"+i+"'>" + 
                data[i].prodName + "</td><td>" + data[i].prodDesc + "</td><td>" + data[i].prodPrice + "</td><td>" + 
                "<input type='text' maxlength='4' size='4' id='ProdQty"+i+"' value='0'" + "</td></tr>";
			}
	    serviceRows.innerHTML = prodRowData ;
    }

function confirmQty() {
	var quant0 = document.getElementById("ProdQty0").value;
    var quant1 = document.getElementById("ProdQty1").value;
    var quant2 = document.getElementById("ProdQty2").value;
    var quant3 = document.getElementById("ProdQty3").value;
    var quant4 = document.getElementById("ProdQty4").value;
    var quant5 = document.getElementById("ProdQty5").value;
    var quant6 = document.getElementById("ProdQty6").value;
    var quant7 = document.getElementById("ProdQty7").value;
    var quant8 = document.getElementById("ProdQty8").value;
    var quant9 = document.getElementById("ProdQty9").value;

    var services = [];
    if(quant0 > 0){
        services += document.getElementById("prodName0").innerText + ": Total Service: " + quant0 + "\n";
    }
    if(quant1 > 0){
      services += document.getElementById("prodName1").innerText + ": Total Service: " + quant1 + "\n";
    }
    if(quant2 > 0){
        services += document.getElementById("prodName2").innerText  + ": Total Service: " + quant2 + "\n";
    }
    if(quant3 > 0){
        services += document.getElementById("prodName3").innerText + ": Total Service: " + quant3 + "\n";
    }
    if(quant4 > 0){
      services += document.getElementById("prodName4").innerText + ": Total Service: " + quant4 + "\n";
    }
    if(quant5 > 0){
        services += document.getElementById("prodName5").innerText + ": Total Service: " + quant5 + "\n";
    }
    if(quant6 > 0){
      services += document.getElementById("prodName6").innerText + ": Total Service: " + quant6 + "\n";
    }
    if(quant7 > 0){
        services += document.getElementById("prodName7").innerText  + ": Total Service: " + quant7 + "\n";
    }
    if(quant8 > 0){
        services += document.getElementById("prodName8").innerText + ": Total Service: " + quant8 + "\n";
    }
    if(quant9 > 0){
      services += document.getElementById("prodName9").innerText + ": Total Service: " + quant9 + "\n";
    }
    if (services > "" && services != null){
        alert("You have selected the following services: \n" + services) ;
    }
 }   

/* The functions below are being called in the href property of each <a> element nested in the <th> elements of the table in the HTML 
document that's linked to this JavaScript file. */

function sortByID(){
    if (serviceOrder == "A"){
        serviceData.sort(function(a,b){
            return a.prodID - b.prodID ;
        } ) ;
        serviceOrder = "sortout" ;
        }
         else{
            serviceData.sort(function(a,b){
                return b.prodID - a.prodID ;
            }) ;

            serviceOrder = "A" ;
        }
            renderTable(serviceData) ;
 }

function sortByName(){
    if (serviceOrder == "A"){
        serviceData.sort(function(a,b){
            if (a.prodName < b.prodName){
                return -1 ;
                }
        } ) ;
        serviceOrder = "sortout" ;
    }
    else{
        serviceData.sort(function(a,b){
            if (a.prodName > b.prodName) {
                return -1  
                }
        } ) ;
        serviceOrder = "A" ;
    }
    renderTable(serviceData) ;
}

function sortByPrice()
{
   if (serviceOrder == "A")   
    {
        serviceData.sort(function(a,b)
        {
            return a.prodPrice - b.prodPrice ;
        } ) ;
        serviceOrder = "sortout" ;
    }
    else    
    {
        serviceData.sort(function(a,b)
        {
            return b.prodPrice - a.prodPrice ;
        }) ;
        serviceOrder = "A" ;
    }
    renderTable(serviceData) ;
}

