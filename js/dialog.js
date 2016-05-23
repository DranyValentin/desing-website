(() => 
{
	"use strict"
	
	const $ = selector => document.querySelector(selector)

	
	$("body").addEventListener("click", () =>
	{
	
		$("dialog").show();
	})


})()