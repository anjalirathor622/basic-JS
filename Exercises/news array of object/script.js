let news = [             //arrey of object
    {    //object
        //p:v
        n1h1:"India Women vs Australia Women Live Score 1st T20I: AUS win toss, choose to bowl first",
        published:"Cricket, Updated on Dec 09, 2022 06:50 PM IST",
        n1p1:'India Women vs Australia Women Live Score 1st T20I: Catch all Live score and updates of the 1st T20I match between India Women and Australia Women in Navi Mumbai.'

        //methods
    },
    {
        //p:v
        n2h2:"Karan Johar wishes Dharmendra on birthday with stills from Rocky aur Rani sets: 'It's been a privilege to direct you'",
        published:'Bollywood, Published on Dec 09, 2022 06:00 PM IST',
        n2p2:"Karan Johar called Dharmendra a 'megastar' as he wished him on his 87th birthday with his new pics from Rocky aur Rani ki Prem Kahani sets. Check out his post here."
        //methods
    },
    {
        n3h3:"'They have to pick their strong side': Sunil Gavaskar sends out strong message for India ahead of Bangladesh Test series",
        published:"india news, Published on Dec 09, 2022 06:44 PM IST",
        n3p3:'Bangladesh have taken an unassailable 2-0 lead in the three-match series. Legendary Indian cricketer Sunil Gavaskar wants India to reduce the margin in the 3rd ODI at Chattogram.'
    }

];
//1 way for js output
//console.log(news[0].n1p1)

//2 way for js output
document.getElementById("news_h1").innerHTML = news[0].n1h1;

//3 way for js output
let n1 = document.querySelector("p.publish1");
n1.innerHTML = news[0].published;
n1.style.color = "skyblue"
document.querySelector("p.news_p1").innerHTML = news[0].n1p1;


//console.log(document.querySelector('h2[data-news_h2="news_h2"]'));

document.querySelector('h2[data-news_h2="news_h2"]').innerHTML = news[1]['n2h2'];
let n2 = document.querySelector("p.publish2");
n2.innerHTML = news[1].published;
n2.style.color = "skyblue"
document.querySelector("p.news_p2").innerHTML = news[1]["n2p2"];    //second method of acces object propery


//4 way for js output
//alert(news[2].n3h3);

let arrey3 = "n3h3";
console.log(news[2][arrey3]);

//console.log(document.querySelector('h2#news_h3'))
document.querySelector('h2#news_h3').innerHTML = news[2][arrey3];
let n3 = document.querySelector('p.publish3');
n3.innerHTML = news[2].published;
n3.style.color = "skyblue";
document.querySelector('p.news_p3').innerHTML = news[2].n3p3;






