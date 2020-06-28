let About = {
    render : async () => {
        let view =  /*html*/`
            <div align="center">
                <h1> AWS Architecture </h1>
                <a href="https://www.cloudtopia.org/">
                <img alt="Services" src="/spa/images/aws-resources.png"
                width=680" height="480">
             </a>
            </div>
            <div align="center">
                <h1> AWS Services Levels </h1>
                <a href="https://www.cloudtopia.org/">
                <img alt="Services" src="/spa/images/services.jpg"
                width=680" height="480">
                 </a>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}


export default About;