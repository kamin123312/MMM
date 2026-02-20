window.addEventListener('scroll',ev => {
	document.body.style.cssText += `--scrolltop: ${this.scrollY}px`
})