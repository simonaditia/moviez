class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        #search-container {
            z-index: 1;
        }    
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 7px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            background-color: white;
            margin-right: 10px;
        }
        
        .search-container > input {
            width: 65%;
            padding: 10px;
            border: 0;
            border-bottom: 1px solid rgb(44, 50, 59);
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid rgb(44, 50, 59);
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: rgb(44, 50, 59);
            font-weight: normal;
        }
        
        .search-container > button {
            width: 30%;
            cursor: pointer;
            margin-left: auto;
            padding: 10px;
            background-color: rgb(44, 50, 59);
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <center>
        <div id="search-container" class="search-container">
            <input placeholder="Search Movies" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        </center>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);