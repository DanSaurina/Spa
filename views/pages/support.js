let Support = {
    render : async () => {
        let view =  /*html*/`
            <section class="section" align="center">
                <h1> Our Support Staff </h1>
                <a href="https://www.cloudtopia.org/">
                <img alt="Support" src="/spa/images/itsupport.jpg"
                width=240" height="120">
             </a>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Support;