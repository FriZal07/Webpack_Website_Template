export default function ui_load() {
    const app = document.getElementById("app");
    
    // 1. Inject the HTML string
    app.innerHTML = 
    `   <div id="container">
            <div id="top_container">
            </div>
            <div id="middle_container">
                <button id="counter">Test</button>
            </div>
            <div id="bottom_container">

            </div>
        </div>
    `
    ;
}