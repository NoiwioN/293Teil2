async function changeImage() {
    const basicPath = "./img/b";
    const ending = ".jpg";
    let i = 1;

    while (true) {
        const image = new Image();
        image.src = `${basicPath}${i}${ending}`;
        await image.onload; // Warten bis Bild geladen ist

        document.getElementById("changeImg").setAttribute("src",image.src);

        i++;
        if (i === 4) {
            i = 1;
        }

        await sleep(5000); // Pause von 5 Sekunden
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

changeImage();