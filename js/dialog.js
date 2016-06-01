(() => 
{
	"use strict"
	
	const $ = selector => document.querySelector(selector)
	

	$(".login").addEventListener("click", () =>
	{
		$("dialog").show();
	})
})()