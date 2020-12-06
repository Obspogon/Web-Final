/* Add any JavaScript you need to this file. */

window.onload = function() {
  //elements
  let grid = document.querySelector('.grid');

  let btnN = document.querySelector('#N64');
  let btnP = document.querySelector('#PSX');
  let btnS = document.querySelector('#Saturn');
  let clr = document.querySelector('#Clear');

  let header = document.querySelector('header');

  //event listeners
  btnN.addEventListener('click', function() {
    addtable(products, grid, header, 'N64');
  });
  btnP.addEventListener('click', function() {
    addtable(products, grid, header, 'PSX');
  });
  btnS.addEventListener('click', function() {
    addtable(products, grid, header, 'Saturn');
  });
  clr.addEventListener('click', function() {
    addtable(products, grid, header, 'all');
  });

  //product array
  let products = [
    {
      name: 'Nintendo 64',
      description: "Nintendo's iconic 64-bit cartridge based console.",
      price: 5000,
      category: 'N64',
      imgUrl: 'images/N64.jpg'
    },
    {
      name: 'Playstation',
      description: "Sony's iconic disc based console.",
      price: 5000,
      category: 'PSX',
      imgUrl: 'images/PSX.jpg'
    },
    {
      name: 'Sega Saturn',
      description: "Sega's cartridge based console.",
      price: 5000,
      category: 'Saturn',
      imgUrl: 'images/Sega Saturn.jpg'
    },
    {
      name: 'N64 Controller',
      description: 'The iconic 3-pronged controller for the N64.',
      price: 3000,
      category: 'N64',
      imgUrl: 'images/N64 Controller.jpg'
    },
    {
      name: 'PSX Controller',
      description: "The PSX's controller.",
      price: 5000,
      category: 'PSX',
      imgUrl: 'images/PSX Controller.jpg'
    },
    {
      name: 'Sega Saturn Controller (Mk 1)',
      description: 'The original controller for Sega Saturn.',
      price: 5000,
      category: 'Saturn',
      imgUrl: 'images/Saturn Controller.jpg'
    },
    {
      name: 'Sega Saturn 3D Controller',
      description: 'The 3D controller for Sega Saturn, with an analog stick.',
      price: 5000,
      category: 'Saturn',
      imgUrl: 'images/Saturn 3D Controller.jpg'
    },
    {
      name: 'N64 Expansion Pak',
      description: 'Expand your worlds and juice up your N64!',
      price: 2000,
      category: 'N64',
      imgUrl: 'images/N64 Expansion Pak.jpg'
    },
    {
      name: 'N64 Rumble Pak',
      description: 'Feel the Power and make your controller shake with power!',
      price: 2000,
      category: 'N64',
      imgUrl: 'images/N64 Rumble Pak.jpg'
    },
    {
      name: 'PSX Memory Card',
      description: 'Save your progress. Available in 8mb',
      price: 1000,
      category: 'PSX',
      imgUrl: 'images/PSX Memory Card.jpg'
    },
    {
      name: 'PSX Multitap',
      description: 'Expand your fun and play with 4 controllers!',
      price: 2000,
      category: 'PSX',
      imgUrl: 'images/PSX Multitap.jpg'
    },
    {
      name: 'Sega Saturn Controller (Mk 2)',
      description: 'The revised controller for Sega Saturn.',
      price: 5000,
      category: 'Saturn',
      imgUrl: 'images/Saturn Controller 2.jpg'
    },
    {
      name: 'Sega Saturn Multitap',
      description: 'Lets you plug in 6 controllers, or get 2 and plug in 12!.',
      price: 2000,
      category: 'Saturn',
      imgUrl: 'images/Saturn Multitap.jpg'
    }
  ];

  //add products to table
  addtable(products, grid, header, 'all');
};

//functions
function clearTable(grid) {
  grid.innerHTML = '';
}

function addtable(products, grid, h, category) {
  clearTable(grid);

  if (category !== 'all') {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === category) addT(products[i]);
      h.className = category;
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      addT(products[i]);
    }
    h.className = 'null';
  }

  function addT(prod) {
    let cell = document.createElement('div');
    cell.className = 'container';
    grid.appendChild(cell);

    let pic = document.createElement('img');
    cell.appendChild(pic);

    pic.src = prod.imgUrl;
    pic.alt = prod.name;

    //create desc
    let desc = document.createElement('div');
    cell.appendChild(desc);
    desc.className = 'desc';

    let txt = document.createElement('div');
    desc.appendChild(txt);
    txt.className = 'txt';

    txt.innerHTML =
      prod.name +
      '<br>$' +
      prod.price / 100 +
      '<br>' +
      prod.description +
      '<br>Category: ' +
      prod.category;
  }
}
