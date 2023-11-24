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
                jQuery("#verticals").append(`   
                <div class="thumbnail p-0 flex flex-col relative">
                    <div class="mb-2 relative thumb-title">
                        <img src="assets/images/${v.vertical_id}.png" alt="Image 1" class="mb-2">
                        <h3 class="absolute top-30 left-0 right-0 bottom-10 flex items-center justify-center text-xl font-semibold mb-0 col-title">${v.name}</h3>
                    </div>
                    <p class="text-l font-medium leading-6 p-4 text-left mb-2">${v.desc}</p>
                    <p class="text-sm font-light px-4 pb-4 text-left mb-4"><a href="${v.link}">See If You Qualify for Compensation</a></p>
                    <div class="flex items-center justify-center button">
                        <a href="${v.link}" class="flex items-center text-white">
                            Learn More
                        </a>
                    </div>
                </div>
`)
            })
    });


});
