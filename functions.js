function fillGraph(size) {
    let graph = document.getElementById("graph");
    removeAllChildNodes(graph)
    let numCells = 2 * size;
    graph.style.gridTemplateRows = "repeat(" + numCells.toFixed() + "," + (700 / numCells).toFixed() + "px)";
    graph.style.gridTemplateColumns = "repeat(" + numCells.toFixed() + "," + (700 / numCells).toFixed() + "px)";

    let lineWeight = (30 / size).toFixed();
    // size + 2 for the ghost bubbles whose top and left borders form the bottom and right borders of the graph.
    for(let r = -size + 1; r < size + 2; r++) {
        for(let c = -size + 1; c < size + 2; c++) {
            var div = document.createElement("div");
            div.id = r.toFixed() + "," + c.toFixed();
            div.className = "box";
            div.textContent = " "

            div.style.gridRowStart = r + size;
            div.style.gridRowEnd = (r + size + 1);
            div.style.gridColumnStart = c + size;
            div.style.gridColumnEnd = (c + size + 1);

            if(r < size + 1) {
                div.style.borderLeft = lineWeight + "px solid black";
            }
            if(c < size + 1) {
                div.style.borderTop = lineWeight + "px solid black";
            }
            graph.appendChild(div);
        }
    }
    document.getElementById("1,1").style.borderTop = lineWeight + "px solid red";
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}