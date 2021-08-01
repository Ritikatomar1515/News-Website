console.log("welcome to news website");

// 965406832b6a4206bf86c16fa75456de

// initialize the news api parameters

let apiKey = "965406832b6a4206bf86c16fa75456de"
// grab the news container
newsAccordian = document.getElementById("newsAccordian");

// create an ajax  get request 
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// xhr.getResponseHeader("content-type" , "application/json");

// what to do whwn response is ready 

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHtml = " ";

        articles.forEach(function (element, index) {


            // for (let news in articles) {
            // console.log(articles[news]);

            let news = `
            <div class="accordion" id="newsAccordian">
                 <div class= "accordian-item>
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                      <b> Breaking News${index+1} : </b>  ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        ${element["content"]}.Read more here <a href="${element["url"]}" target = "_blank">Read more here</a>
                    </div>
                    </div>
                    </div>
                `

            newsHtml+= news;


        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("some error occurred")

    }
}

xhr.send()
