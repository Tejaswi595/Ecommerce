fetch("https://tejaswi595.github.io/Ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")
	bodyElement.append(row)
info.mobiles.map(value=>{
	var column=document.createElement("article");
	column.classList.add("col-sm-10","col-md-6","col-lg-3");
	row.append(column)
	//card
	var card=document.createElement("div");
	card.classList.add("card","mt-3")

	//card-body
	var cardBody=document.createElement("div");
	cardBody.classList.add("card-body")
	//image
	 var imgElement=document.createElement("img");
	 imgElement.src=value.image;
	 imgElement.classList.add("img-responsive")
	 //to inc accessibility use alt
	 imgElement.alt=value.Name;
	 //name
	 var Name=document.createElement("h2");
	 Name.textContent=value.Name;
	 Name.classList.add("text-center", "text-info")
	 //price
	 var price=document.createElement("p");
	 price.classList.add("text-danger","text-center")
	 price.textContent="Price: ₹"+value.price;
	 //original-price
	 var originalprice=document.createElement("p");
	 originalprice.classList.add("text-secondary","text-center","text-block")
	 originalprice.innerHTML="<s> ₹"+value.originalprice+"/-</s>";
	 //button
	 var buttonparent=document.createElement("div");
	 buttonparent.classList.add("d-grid","gap-2");

	 var button=document.createElement("button");
	 button.classList.add("btn", "btn-success","btn-block","btn-mt-3")
	 button.textContent="ADD TO CART";
	 buttonparent.append(button)	
	 cardBody.append(imgElement)
	 cardBody.append(Name)
	  cardBody.append(originalprice)
	 cardBody.append(price)
	 buttonparent.append(button)
	 cardBody.append(buttonparent)

	//cardbody child of card//
	card.append(cardBody);
	column.append(card);


})
}
