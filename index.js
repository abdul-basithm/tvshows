document.querySelector("button").addEventListener("click", result);
var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result() {
    row.innerHTML=" ";
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res);
        console.log(res[0].show.image.medium)
        var ele = document.createElement("div");
        ele.innerHTML = `<div class="col-lg-12 col-sm-6">
            <div class="card" style="width: 18rem;">
            <img src=${res[0].show.image.medium} class="card-img-top" alt="">
            <div><b>${res[0].show.name}</b><br><br>
            <b>Genere :</b> ${res[0].show.genres}<br><br>
            <b>Premiered:</b>  ${res[0].show.premiered}<br><br>
            <b>Rating :</b> ${res[0].show.rating.average}<br><br>
            <b>Runtime :</b> ${res[0].show.runtime}<br><br>
            <b>Schedule:</b> ${res[0].show.schedule.days},${res[0].show.schedule.time}<br><br>
            <b>Official site:</b>  ${res[0].show.officialSite}<br><br>
            <b>Network:</b>  ${res[0].show.network.name}<br><br>
            <b>Summary:</b>  ${res[0].show.summary}<br><br>
            </div>
            </div>
            </div>
            </div>
            </div>`;
            row.append(ele);
            container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error);
    }
}