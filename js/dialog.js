(() => 
{
	"use strict"
	console.log("привет")
	const $ = selector => document.querySelector(selector)

	console.log($("body"))
	$("body").addEventListener("click", () =>
	{
		console.log(event.target)
		$("dialog").showModal();
	})


})()