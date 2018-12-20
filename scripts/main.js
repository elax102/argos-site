new WOW().init();

var vignette = document.getElementById("vignette");
console.log(vignette);

var waypoint = new Waypoint({
	element: document.getElementById('sect1'),
	handler: function () {
		console.log('sect1');
		vignette.className = "";
	},
	offset: -200
});

var waypoint = new Waypoint({
	element: document.getElementById('sect2'),
	handler: function () {
		console.log('sect2');
		vignette.className = "";
		vignette.classList.add("pulse1");
	},
	offset: 300
});

var waypoint = new Waypoint({
	element: document.getElementById('sect3'),
	handler: function () {
		console.log('sect3');
		vignette.className="";
		vignette.classList.add("pulse2");
	},
	offset: 300
});

var waypoint = new Waypoint({
	element: document.getElementById('sect4'),
	handler: function () {
		console.log('sect4');
		vignette.className = "";
		vignette.classList.add("pulse3");
	},
	offset: 200
});