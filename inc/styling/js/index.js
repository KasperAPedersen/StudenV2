// View posts

class Post {
    constructor(id, author, date, title, description) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.desc = description;
        this.date = date;
    }
}

let p1 = new Post(1, 'Henrik Kruse Petersen', '30 05 2024', 'Sommerturnering 29/5', 'Resultaterne af sommerturneringen d. 29.maj kan ses ved at kopiere dette til din browser:<br>https://resultater.bridge.dk/template/resultater.php?filename=1190/MT85GT121.XML&tournament=85§ion=1<br>Der vil komme et aktivt link senere.');
let p2 = new Post(2, 'Tyge Fogh', '24 05 2024', 'Malmøkampen 24. august 2024', 'Vil du være med til at banke svenskerne så læs videre her');
let p3 = new Post(3, 'Tyge Fogh', '24 05 2024', 'Studens Sommeraktiviteter', 'HAPPY HOUR ONSDAG 29. MAJ<br>Måske en Realbridge/Happy Hour som opvarmning til Malmø<br>Malmøkampen<br>Amager Ungdoms Bridgeweekend');

function viewPost(post) {
    document.getElementById('contentMain').style.display = 'none';
    document.getElementById('viewContent').style.display = 'block';
    switch(post) {
        case 'p1':
            setContent(p1);
            break;
        case 'p2':
            setContent(p2);
            break;
        case 'p3':
            setContent(p3);
            break;
        default:
            document.getElementById('contentMain').style.display = 'block';
            document.getElementById('viewContent').style.display = 'none';
            break;
    }
}


function setContent(post) {
    let elem = document.createElement('div');
    elem.className = 'w3-card-4';
    elem.style = 'padding-bottom: 4px; padding: 15px 15px;';
    elem.innerHTML = `<i class="fa-solid fa-arrow-left" style="display: inline; cursor: pointer;" onclick="resetPost();"></i><h5 style="display: inline;">${post.title}<span>${post.date} ${post.author}</span></h5>
    <div class="content">
        <p>${post.desc}</p>
        <p class="more" onclick="viewPost('p${post.id}');">Læs mere</a>
    </div>
    <div style="clear: both;"></div>`;
    document.getElementById('viewContent').appendChild(elem);
}

function resetPost() {
    document.getElementById('contentMain').style.display = 'block';
    document.getElementById('viewContent').style.display = 'none';
    document.getElementById('viewContent').innerHTML = '';
}

// Change pages
function setPage(elem, page){
    document.getElementById('welcomeContentDiv').style.display = 'none';
    document.getElementById('resultsContentDiv').style.display = 'none';

    let navButtons = document.getElementsByClassName('activeNav');
    for(let i = 0; i < navButtons.length; i++) {
        navButtons[i].className = "";
    }

    document.getElementById(`${page}ContentDiv`).style.display = 'block';
    elem.className = 'activeNav';
}
