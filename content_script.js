// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(message,sender,sendresponse)
// {
// 	console.log(message.txt);
// 	let paragraphs = document.getElementsByTagName("p");
// 	for(elt of paragraphs)
// 	{
// 		elt.style['background-color'] = '#40D51F';
// 	}
// }

// console.log(message.txt);
let paragraphs = document.getElementsByTagName("p");
for(elt of paragraphs)
{
	elt.style['background-color'] = '#40D51F';
}