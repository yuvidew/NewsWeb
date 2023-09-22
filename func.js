// ##########################################newsapi###########################################33

window.addEventListener("load",() => thefethdata('india'))

const thenewsdata = document.querySelector(".thenewsdata")
async function thefethdata(quary){
    console.log(quary)
    const response = await fetch(`https://newsapi.org/v2/everything?q=${quary}&apiKey=ee4f8b282ef9473a8c694fd21caa11fd`)
        const data = await response.json()
        let thaarrdata = data["articles"]
        console.log(thaarrdata)
        let themaindata = thaarrdata.map(ele =>{
            return(
            `<div class = "thecardcont col-sm-12 col-md-6 col-lg-4 mt-5" 
                <a href = ${ele.url}>
                    <div class="cardbox">
                        <div class="imgbox">
                            <img src=${ele.urlToImage} />
                        </div>
                        <div class="textbox">
                            <h1>${ele.title}</h1>
                            <p>${ele.description}</p>
                        </div>
                    </div>
                </a>
            </div>`)
        })
        thenewsdata.innerHTML = themaindata.join(" ")
}

/*##################################thisisfornavbtn#########################################*/

const themenuitem = document.querySelectorAll(".themenuitem li")

themenuitem.forEach((iten, index) =>{
    iten.addEventListener("click", () =>{
        if(Number(iten.id) === index){
            thefethdata(iten.textContent)
        }
    })
})

/*###################################This for the search box########################################*/


const searchNews = () =>{
    const theinput = document.querySelector(".theinput").value
    thefethdata(theinput)
}

