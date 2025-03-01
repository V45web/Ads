function randomG(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const adtextid = [
	""
]
const adimgid = [
	""
]
const adlinkid = [
	""
]

let adid = randomG(0,0);

let adtext = adtextid[adid];
let adimg = adimgid[adid];
let adlink = adlinkid[adid];

customComponent('ads',`
	<a href="#" class="adlink"><img src="#" class="adimg" alt="loading..."></a>
	<a href="#" class="adtext adlink">Loading...</a>
	<p>advertisement</p>
`);

changeText('adtext',adtext)
setSrc('adimg',adimg)
setHref('adlink',adlink)