function shuffle(array){
	for(let i=array.length-1;i > 0;i--){
		//0 <= swapTarget < i 
		let swapTarget = Math.floor(Math.random() * (i + 1)); //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
		let temp=array[i];
		array[i]=array[swapTarget];
		array[swapTarget]=temp;
		console.log(array);
	}
	return array;
}

function updateTweetURL(result, count) {
	const tweetBtn = document.getElementById("tweetButton");

	let text1 = result + "\n"
	let text2 = "\n" + count + " 回 あけおめルーレットをまわしました\n"
	text1 = encodeURI(text1)
	text2 = encodeURI(text2)
	let hashtag = encodeURI("あけおめルーレット")
	let url = encodeURI("trimscash.github.io/akeome");
	let encodedURL = "https://twitter.com/intent/tweet?&text=" + text1 + "%20%23" + hashtag + "%20" + text2 + "&url=" + url;
	tweetBtn.setAttribute("href", encodedURL);
}

window.onload=function(){
	const counterArea = document.getElementById("counter");
	const resultArea = document.getElementById("result");
	const startBtn = document.getElementById("start");
	let c=0;
	const akeome = "あけましておめでとうございます！今年もよろしくお願いします！";

	updateTweetURL(akeome, c);


	startBtn.addEventListener("click",()=>{
		c++;
		let resultAkeome=shuffle(akeome.split("")).join("");
		resultArea.textContent = resultAkeome;
		counterArea.textContent = String(c)+" 回目";
		updateTweetURL(resultAkeome,c);
	});


}