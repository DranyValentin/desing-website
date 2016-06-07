(() =>
{
	"use strict"

	const $ = selector => document.querySelector(selector)

// Change name category
	$('.groups_title').textContent = "Каталог товаров"

// Change div class=groups on nav class=groups
	{
		let fragment = document.createDocumentFragment()
		let $nav = document.createElement('nav')
		$nav.setAttribute('class', 'groups')
		fragment.appendChild($nav).innerHTML = $('.groups').innerHTML
		$('.left').replaceChild(fragment, $('.groups'))
	}
	
// Change div class=groups_title on h2 class=groups_title
	{
		let fragment = document.createDocumentFragment()
		let $h2 = document.createElement('h2')
		$h2.setAttribute('class', 'groups_title')
		fragment.appendChild($h2).textContent 
									= $('.groups_title').textContent
		$('.groups').replaceChild(fragment, $('.groups_title'))
	}

})()