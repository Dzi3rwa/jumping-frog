$(document).ready(function () {
    let tab = []
    let i = 0
    $("#main").on("click", function (e) {
        let x = e.clientX - 50
        let y = e.clientY - 50
        let newPosObj = { x: x, y: y }
        tab.push(newPosObj)
        let div = $("<div>")

        $("#main").append(div)
        div.addClass("div")
            .css("position", "absolute")
            .css("left", x)
            .css("top", y)
            .text(i)
        i++
    })
    let j = 0

    $("#b1").on("click", function () {
        $("#r").css("position", "absolute")
            .css("left", tab[j].x + 10)
            .css("top", tab[j].y + 10)
            .css("visibility", "visible")
        if (j == tab.length - 1)
            j = 0
        else
            j++
    })
    let k = 0
    let klik = 0
    $("#b2").on("click", function () {
        klik++
        let interval = setInterval(function () {
            $("#r").css("position", "absolute")
                .css("left", tab[k].x + 10)
                .css("top", tab[k].y + 10)
                .css("visibility", "visible")
            if (k == tab.length - 1)
                k = 0
            else
                k++
        }, 1000)
        if (klik > 1) {
            clearInterval(interval);
        }
    })

})