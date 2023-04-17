// Lấy id sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Lấy thông tin sản phẩm từ API hoặc dữ liệu tĩnh
const products = [
  { id: 1, name: 'Sản phẩm 1',img: "../IMAGE/lap1.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 1' },
  { id: 2, name: 'Sản phẩm 2',img: "../IMAGE/lap2.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 2' },
  { id: 3, name: 'Sản phẩm 3',img: "../IMAGE/lap3.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 3' },
  { id: 4, name: 'Sản phẩm 4',img: "../IMAGE/lap4.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 4' },
  { id: 5, name: 'Sản phẩm 5',img: "../IMAGE/lap5.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 5' },
  { id: 6, name: 'Sản phẩm 6',img: "../IMAGE/lap6.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 6' },
  { id: 7, name: 'Sản phẩm 7',img: "../IMAGE/lap7.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 7' },
  { id: 8, name: 'Sản phẩm 8',img: "../IMAGE/lap8.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 8' },
  { id: 9, name: 'Sản phẩm 9',img: "../IMAGE/lap9.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 9' },
  { id: 10, name: 'Sản phẩm 1',img: "../IMAGE/pc1.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 1' },
  { id: 11, name: 'Sản phẩm 2',img: "../IMAGE/pc2.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 2' },
  { id: 12, name: 'Sản phẩm 3',img: "../IMAGE/pc3.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 3' },
  { id: 13, name: 'Sản phẩm 4',img: "../IMAGE/pc4.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 4' },
  { id: 14, name: 'Sản phẩm 5',img: "../IMAGE/pc5.jpg",price: '20.000.000đ', description: 'Mô tả sản phẩm 5' }
];
const product = products.find(p => p.id == productId);

// Hiển thị thông tin sản phẩm
const productElement = document.getElementById('product');
productElement.innerHTML = `
  <div class="section__left">
  
  <img src=${product.img} alt=""> 
  
  </div>
  <div class="section__right">
  <h1 class="hh">${product.name}</h1>
  <h2>${product.price}</h2>
  <p>${product.description}</p>
  <button>Buy</button>
  </div>
`;