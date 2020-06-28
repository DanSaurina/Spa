let Start = {
    render : async () => {
        let view =  /*html*/`
            <div align="center">
                <h1> From the Sea ....................... ! </h1>
                <video id="displayvideo"  controls autoplay loop  width="400" height="400" >
		    	<source src="./video/oceanshore.mp4" type="video/mp4" />
		        </video> 
            </div>
            <div align="center">
                <h1> To they sky ......................... ! </h1>
                <video id="displayvideo"  controls autoplay loop  width="400" height="400" >
		    	<source src="./video/sunandclouds.mp4" type="video/mp4" />
		        </video> 
            </div>
            <div align="center">
                 <h1> and beyond ........ Webtopia is there ! </h1>
                 <video id="displayvideo"  controls autoplay loop  width="400" height="400" >
                 <source src="./video/milkyway.mp4" type="video/mp4" />
            </video> 
        </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Start;