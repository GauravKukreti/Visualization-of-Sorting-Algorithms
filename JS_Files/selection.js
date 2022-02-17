async function selection() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < ele.length; j++) {
            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[index].style.height)) {
                index = j;
            }
        }
        await waitforme(delay);
        swap(ele[index], ele[i]);
    }
}

const SelectButton = document.querySelector(".SelectionSort");
SelectButton.addEventListener('click', async function () {
    DisableButtons();
    await selection();
    EnableButtons();
});