let counter = document.getElementById("counter")
let clickable = document.getElementById("clickable")
let countnumber = 0
let up1 = document.getElementById("up1")
let kosten = document.getElementById("kosten")
let aantallen = document.getElementById("aantallen")
let kost = 10
let aantal = 0
let clicksadded = 0

clickable.addEventListener("click", function () {
	countnumber++
	counter.innerHTML = countnumber
})

up1.addEventListener("click", function () {
	if (countnumber >= kost) {
		countnumber = countnumber - kost
		counter.innerHTML = countnumber
		kost = Math.round(kost * 1, 3)
		kosten.innerHTML = kost
		clicksadded++
	}
})

function update() {
	countnumber = countnumber + clicksadded
	counter.innerHTML = countnumber
}

setInterval(update, 1000);