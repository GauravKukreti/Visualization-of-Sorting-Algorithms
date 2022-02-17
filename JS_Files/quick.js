async function QuickSort(ele, l, r) {
    let i = l - 1;
    for (let j = l; j <= r - 1; j++) {
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            i++;
            swap(ele[i], ele[j]);
            await waitforme(delay);
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]);

    await waitforme(delay);

    return i;
}

async function Quick(ele, l, r) {
    if (l < r) {
        let pivot = await QuickSort(ele, l, r);
        await Quick(ele, l, pivot - 1);
        await Quick(ele, pivot + 1, r);
    }
}

const QuickButton = document.querySelector(".QuickSort");
QuickButton.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    DisableButtons();
    await Quick(ele, l, r);
    EnableButtons();
});