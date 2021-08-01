const addNode = async(ndx,callback)=>{
	if(ndx<=3){
		setTimeout(()=>{
			let par = document.querySelector('#cont');
			let newNode = document.createElement('span');
			newNode.classList.add("fade","trans","prog","prog-crc","bg-grn");
			par.appendChild(newNode);	
			addNode(ndx+1);	
		},1000)
	}
}

export default addNode;
/* Link functions */

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1] || '');
}

let subid       = getURLParameter('subid');
let subid2      = getURLParameter('subid2');
let firstname   = getURLParameter('firstname');
let surname     = getURLParameter('surname');
let city        = getURLParameter('city');
let zipcode     = getURLParameter('zipcode');
let address     = getURLParameter('address');
let phone       = getURLParameter('phone');
let mobile      = getURLParameter('mobile');
let pid         = getURLParameter('pid');
let nrp         = getURLParameter('nrp');

let ffdomain = 'https://' + getURLParameter('ffdomain');
let session = getURLParameter('session');
let fluxf = getURLParameter('fluxf');
let fluxffn = getURLParameter('fluxffn');

export function ActionRedirect(action){
    window.location.replace(ffdomain + '/?flux_action=' + action + '&flux_f=' + fluxf + '&flux_ffn=' + fluxffn + '&flux_sess=' + session);
}