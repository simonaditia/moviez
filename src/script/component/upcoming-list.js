class UpcomingList extends HTMLElement {
    constructor() {
        super();
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            :host {
                width: 100%;
                margin-top: 32px;
                padding: 16px;
            }
            h2{
                display: block;
                font-size: 1.5em;
                margin-block-start: 0.83em;
                margin-block-end: 0.83em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
            }

            #carouselExampleCaptionsss{
                // z-index: -1;
            }
            
            .judul {
                text-align: center;
            }

            hr {
                width: 250px;
                border-top: 3px solid #999;
                text-align: center;
            }
        </style>
        <div id="upcoming"></div>
        <div class="judul">
            <h2>Upcoming Movies</h2>
            <center>
                <hr>
            </center>
		</div>
        <div id="carouselExampleCaptionsss" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" id="indicatorrr"></ol>
            <div class="carousel-inner" id="upcoming-item-container"></div>
            <a class="carousel-control-prev" href="#carouselExampleCaptionsss" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptionsss" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        `;

        // generate carousel control
        const carouselIndicatorrr = document.getElementById("indicatorrr");
        for (let index = 0; index < this._movies.length; index++) {
            let li = document.createElement('li');
            li.setAttribute('data-target', '#carouselExampleCaptionsss');
            li.setAttribute('data-slide-to', index);
            if (index < 1) {
                li.setAttribute('class', "active");
            }
            carouselIndicatorrr.appendChild(li);
        }

        // populate carousel inner item with movies data
        const upcomingItemContainer = document.getElementById("upcoming-item-container");
        let counter = true;
        let active = "active"; // set class "active" to first carousel inner item 
        this._movies.forEach(movie => {
            upcomingItemContainer.innerHTML += `
            <div class="carousel-item ${active}">
                <img src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" class="d-block rounded mx-auto upcoming-image" alt="${movie.title}">
                <div class="carousel-caption d-none d-sm-block">
                    <h3>${movie.title}</h3>
                </div>
            </ditv>
            `;
            if (counter) {
                counter = false;
                active = "";
            }
        });
    }

    renderError(message) {
        this.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        `;
        this.innerHTML += `
        <h2>Upcoming Movies</h2>
        <h3 class="placeholder">${message}</h3>
        `;
    }
}

customElements.define("upcoming-list", UpcomingList);