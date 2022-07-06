var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");
var animationFlag = false;

function UpdateAnimation()
{
	if(animationFlag)
	{
		animationFlag =!animationFlag;
		var items_waitingForConnection = document.querySelectorAll(".waitingForConnection_removed");
		var items_waitingForConnection2 = document.querySelectorAll(".waitingForConnection2_removed");
		var items_waitingForConnection3 = document.querySelectorAll(".waitingForConnection3_removed");
		items_waitingForConnection.forEach(function(item){
			item.classList.remove("waitingForConnection_removed");
			item.classList.add("waitingForConnection");
		})
		items_waitingForConnection2.forEach(function(item){
			item.classList.remove("waitingForConnection2_removed");
			item.classList.add("waitingForConnection2");
		})
		items_waitingForConnection3.forEach(function(item){
			item.classList.remove("waitingForConnection3_removed");
			item.classList.add("waitingForConnection3");
		})
	}
	else
	{
		animationFlag =!animationFlag;
		var items_waitingForConnection = document.querySelectorAll(".waitingForConnection");
		var items_waitingForConnection2 = document.querySelectorAll(".waitingForConnection2");
		var items_waitingForConnection3 = document.querySelectorAll(".waitingForConnection3");
		items_waitingForConnection.forEach(function(item){
			item.classList.remove("waitingForConnection");
			item.classList.add("waitingForConnection_removed");
		})
		items_waitingForConnection2.forEach(function(item){
			item.classList.remove("waitingForConnection2");
			item.classList.add("waitingForConnection2_removed");
		})
		items_waitingForConnection3.forEach(function(item){
			item.classList.remove("waitingForConnection3");
			item.classList.add("waitingForConnection3_removed");
		})

	}
}

//setInterval(UpdateAnimation,5000);

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}
	})
})