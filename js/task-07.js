const refs = {
    refFontSize: document.querySelector("#font-size-control"),
    refText: document.querySelector("#text")
}

refs.refFontSize.addEventListener("input", handleTextValid);
refs.refText.style.fontSize = `${refs.refFontSize.value}px`;
function handleTextValid(event) {
    const size = event.currentTarget.value;
    refs.refText.style.fontSize = `${size}px`;
}
