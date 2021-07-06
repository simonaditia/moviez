class AppBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
        <style>
        #aaa {
            position: sticky;
            top: 0;
        }
        body { padding-top: 70px; }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top" id="aada">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <h4>Moviez</h4>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link" href="#popular">Popular Movies</a>
                        <a class="nav-item nav-link" href="#toprated">Top Rated Movies</a>
                        <a class="nav-item nav-link" href="#upcoming">Upcoming Movies</a>
                    </div>
                    <search-bar></search-bar>
                    <center>
                    <div class="clock">
                        <span class="time"></span>
                        <span class="date"></span>
                    </div>
                    </center>
                </div>
            </div>
        </nav>
        `;
    }
}
customElements.define("app-bar", AppBar);