async function Insertion() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let j = i - 1;
        let key = ele[i].style.height;

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
        }
        ele[j + 1].style.height = key;
    }
}

const InsertButton = document.querySelector(".InsertionSort");
InsertButton.addEventListener('click', async function () {
    DisableButtons();
    await Insertion();
    EnableButtons();
});