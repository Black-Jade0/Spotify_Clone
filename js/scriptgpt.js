async function display_cards() {
    try {
        let a = await fetch(`songs`);
        if (!a.ok) throw new Error(`HTTP error! Status: ${a.status}`);
        let response = await a.text();

        let div = document.createElement("div");
        div.innerHTML = response;
        let as = div.getElementsByTagName("a");
        let card_link = [];

        for (let index = 1; index < as.length; index++) {
            const element = as[index];
            if (!as[index].href.endsWith("htaccess")) {
                card_link.push(as[index].href);
            }
        }

        for (const element of card_link) {
            try {
                let info_json = await fetch(
                    `${element.replaceAll("%20", " ")}info.json`
                );
                if (!info_json.ok)
                    throw new Error(`Failed to fetch ${info_json.url}`);
                let decoded_json = await info_json.json();
                console.log(decoded_json);

                let cardHTML = `
                    <div class="card" info="${element}">
                        <div class="card-img-div">
                            <div class="play-button">
                                <img class="play-button-button" src="img/play-circle-02-stroke-rounded.svg" alt="" />
                            </div>
                            <img src="${element.replaceAll(
                                "%20",
                                " "
                            )}cover.jpg" />
                        </div>
                        <div class="card-desc">
                            <h3 class="card-desc-head">${
                                decoded_json.title
                            }</h3>
                            <div class="card-desc-singer">${
                                decoded_json.description
                            }</div>
                        </div>
                    </div>`;

                document
                    .querySelector(".card-container")
                    .insertAdjacentHTML("beforeend", cardHTML);

                const newCard =
                    document.querySelector(".card-container").lastElementChild;
                newCard.addEventListener("click", async (item) => {
                    console.log("fetching songs");
                    let songs = await getsongs(
                        `${newCard.getAttribute("info")}`
                    );
                    let element_left = document.querySelector(".left");
                    element_left.style.transform = `translateX(0%)`;
                });
            } catch (error) {
                console.error("Error fetching or processing JSON:", error);
            }
        }
    } catch (error) {
        console.error("Error fetching songs directory:", error);
    }
}
