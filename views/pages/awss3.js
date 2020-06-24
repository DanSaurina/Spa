let AwsS3 = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> AWS S3 Actions </h1>
				<button onclick="getElementById('demo').innerHTML=Date()">What day is today?</button>
				<p id="demo"></p>
				<button onclick="window.location.href='https://w3docs.com';">Reference URL</button>
			</section>
			
			
			    <button id="testBtn"  > Test button click event event</button>
				<p id="demo2"></p>
		<script>
			function myFunction() {
			document.getElementById("demo2").innerHTML = "Hello Dear Visitor!</br> We are happy that you've chosen our website to learn programming languages. We're sure you'll become one of the best programmers in your country. Good luck to you!";
			}
		</script>
        `
        return view
    },
    after_render: async () => {
		
		// addEventListener
		document.getElementById("testBtn").addEventListener("click", () => {
			document.getElementById("demo2").innerHTML = "Testing click event after render event ";
		})
		
	}
        
}

export default AwsS3;