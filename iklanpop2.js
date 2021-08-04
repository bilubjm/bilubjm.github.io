function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}
	var direct_link_ads = rChoice([
                            "https://gadsatz.com/chiyuemt?key=3313e04d035b02f07a9929ea8569cb0a",
                            "https://2e8dgn8n0e0l.com/t6f1z508?key=c0781ad6b5c3eeff525d19b88c213b8f",
                        ]);
						
	$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	    $(this).removeClass('xepo_ads');
		window.open(direct_link_ads,"_blank");
	});
