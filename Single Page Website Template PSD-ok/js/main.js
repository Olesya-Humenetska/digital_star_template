$( document ).ready(function() {
});

window.onload = function () {

	// var latlng = new google.maps.LatLng(49.785051, 24.059362);
	var latlng = new google.maps.LatLng(8.925625, 76.656268);

	var myOptions = {
	zoom: 15,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: false
	};

	map = new google.maps.Map(document.getElementById('map'), myOptions);
}
// <script language="javascript">
            //     function validateform1(){
            //     var zipcode = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
            //     if(document.form1.event_title.value==""){
            //     alert("Enter a title");
            //     return false;
            //     }
            //     else if((!document.form1.zip.value.match(zipcode)){
            //     alert("wrong zip format");
            //     return false;
            //     }
            // }
                // </script>