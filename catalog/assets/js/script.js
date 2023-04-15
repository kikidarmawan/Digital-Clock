const spinner = $('#spinner');
$(document).ready(function () {
    setTimeout(() => {
        spinner.hide();
    }, 2000);
    const producList = $('#product-list');
    $.each(products, function (i, v) {
        producList.append(`
        <div class="card">
            <img src="${v.image}" alet="${v.name}" width="300px" height="300px">
            <h2>${v.name}</h2>
            <p>${v.description}</p>
            <p>Rp.${v.price}</p>
            <button>Buy now</button>
        </div>`);
    });
});

