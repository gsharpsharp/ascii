function showTooltip(e) {
    const currentTooltip = e.target.closest("table .character-nongraphic")?.querySelector(".tooltip");
    const previousTooltip = document.querySelector(".tooltip:not(.visually-hidden)");

    if (currentTooltip !== previousTooltip) {
        previousTooltip?.classList?.add("visually-hidden");
    }

    currentTooltip?.classList?.remove("visually-hidden");
}

function hideTooltip(e) {
    let tooltip = e.target;

    if (!tooltip.classList.contains("tooltip")) {
        tooltip = tooltip.querySelector(".tooltip");
    }

    tooltip.classList.add("visually-hidden");
}

addEventListener("click", showTooltip);

for (const c of document.querySelectorAll("table .character-nongraphic")) {
    c.addEventListener("mouseover", showTooltip);
    c.addEventListener("mouseout", hideTooltip);
}
