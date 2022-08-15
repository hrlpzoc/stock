const inputName = document.querySelector('#name');
const inputPrice = document.querySelector('#price');
const button = document.querySelector('#button');   

button.addEventListener('click', (e) => {
    console.log({ name: inputName.value, price: inputPrice.value });
    const name = inputName.value;
    const price = inputPrice.value;

    fetch('/api/v1/products', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body : JSON.stringify({ 
            name, 
            price,
        }),
    })


} );
