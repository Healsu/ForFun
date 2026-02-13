const button = document.getElementById("destroyBtn");
const progressBar = document.getElementById("progressBar");
const log = document.getElementById("log");

const fakeFiles = [
    "Checking PC User",
    "",
    "",
    "Checking Steam Games",

];

//Listens to when button is pressed and make sure it cant be pressed again
button.addEventListener("click", () => {
    button.disabled = true;
    let progress = 0;
    let step = 0;

    //Sets an interval for how much its gonna progress
    const interval = setInterval(() => {
        //Check if progress is 100
        if (progress >= 100) {
            clearInterval(interval);
            progressBar.style.width = "100%";
            //Staged sequence with some color alteration
            setTimeout(() => {
                log.innerHTML += "<br><br>Found Perfect Game!";
                progressBar.style.backgroundColor = "cyan";

                setTimeout(() => {
                    log.innerHTML += "<br>Preparing installation package...";

                    // We make a fake download
                    setTimeout(() => {
                        log.innerHTML += "<br>Download starting...";

                        const content = `
==============================
 Genshin Impact Installer
==============================

Scared ya didnt i ;)
`;
                        //Im gonna be real i have no clue how blob work except it takes string to memory where the url makes that download link
                        const blob = new Blob([content], { type: "application/octet-stream" });
                        const url = URL.createObjectURL(blob);

                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "GenshinImpact_install_ua_dd4d3d9ce3a1";
                        document.body.appendChild(a);
                        a.click();

                        URL.revokeObjectURL(url);

                        log.innerHTML += "<br>Installation complete ✔";

                        // Redirect for realism
                        setTimeout(() => {
                            log.innerHTML += "<br>Redirecting to game website...";
                            
                            setTimeout(() => {
                                window.location.href = "https://genshin.hoyoverse.com/en/";
                            }, 2000);

                        }, 2000);

                    }, 2000);

                }, 2000);

            }, 2000);

            return;
        }

        progress += 10;
        progressBar.style.width = progress + "%";

        if (step < fakeFiles.length) {
            log.innerHTML += fakeFiles[step] + "<br>";
            step++;
        }

    }, 700);
});
