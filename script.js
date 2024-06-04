alert('XSS');
const ele=parent.document.getElementsByTagName('a');
//const ele2=document.getElementsByTagName('a');
replaceHref(ele);
//replaceHref(ele2);
alert(ele[0].innerHTML);

//alert(document.getElementsByTagName('a').length);

function replaceHref(ele) {
	for(let i = 0; i < ele.length; i++){
		ele[i].href=`https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html`;
	}
}

