const spinner = $('#spinner');
$(document).ready(function () {
    setTimeout(() => {
        spinner.hide();
    }, 2000);

    // $('#search').on('keyup', fucntion(){

    // })
    const producList = $('#product-list');
    // $.each(products, function (i, v) {
    //     producList.append(`
    //     <div class="card">
    //         <img src="${v.image}" alet="${v.name}" width="300px" height="300px">
    //         <h2>${v.name}</h2>
    //         <p>${v.description}</p>
    //         <p>Rp.${v.price}</p>
    //         <button>Buy now</button>
    //     </div>`);
    // });

    let currentPage = 1;
    let perPage = 3;

    displayProduct(products, currentPage, perPage);
    function displayProduct(products, currentPage, perPage) {
        let startIndex = (currentPage - 1) * perPage;
        let endIndex = (startIndex + perPage);

        for (let i = startIndex; i < endIndex && products.length; i++) {
            let product = products[i];
            producList.append(`
            <div class="card">
                <img src="${product.image}" alet="${product.name}" width="300px" height="300px">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Rp.${product.price}</p>
                <button>Buy now</button>
            </div>`);
            if (endIndex >= products.length) {
                $('#show-more').hide();
            }
        }
    }

    $('#show-more').click(function () {
        currentPage += 1;
        displayProduct(products, currentPage, perPage);
    })
});

