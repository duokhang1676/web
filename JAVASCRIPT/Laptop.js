  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    product.addEventListener('click', () => {
      const productId = product.querySelector('img').dataset.productId;
      window.location.href = `Product-Detail.html?id=${productId}`;
    });
  });
