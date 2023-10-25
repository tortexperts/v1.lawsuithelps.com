const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

jQuery(function() {
    console.log( "ready!" );

    jQuery.getJSON('https://devops.tortexperts.com/api/listicle'+queryString, function (data) {
        jQuery(".loader-wrapper").hide();

        // Show the page content
        jQuery(".content").show();
            jQuery.each(data,function (k,v){
                console.log(k,v);
                jQuery("#verticals").append(`   <div class="bg-white p-0 shadow-lg rounded flex flex-col">
                    <h3 class="flex items-center justify-center text-xl p-8 font-semibold mb-0 col-heading">${v.name}</h3>
                    <img src="assets/images/${v.vertical_id}.png" alt="Image 1" class="mb-2">
                    <p class="text-l font-medium leading-6 p-4 text-center mb-2">${v.title}</p>
                    <p class="text-sm font-light px-4 pb-4 text-center mb-4">${v.desc}</p>
                    <div class="flex pb-8 items-center justify-center mt-auto">
             <a href="${v.link}" class="flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button">
                            <img src="assets/images/up-left-arrow 1.png" alt="Logo" class="h-6 mx-2">
                            SEE IF I QUALIFY
                        </a>
                    </div>
                </div>
`)
            })
    });


});
