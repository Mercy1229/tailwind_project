// menu data in json format
const menuItems = {
    '#tab_1_1': [
        { id: 0, title: 'Mutton Briyani', price: '$250', image: './assets/menu1.jpg' },
        { id: 1, title: 'Chicken Briyani', price: '$220', image: './assets/menu2.jpg' },
        { id: 2, title: 'Prawn Briyani', price: '$250', image: './assets/menu3.jpg' },
        { id: 3, title: 'Paneer Briyani', price: '$250', image: './assets/mrnu1.1.jpg' },
        { id: 4, title: 'Fish Briyani', price: '$250', image: './assets/menu1.2.jpg' },
        { id: 5, title: 'Paneer Rice', price: '$120', image: './assets/menu4.jpg' },
        { id: 6, title: 'Veg Rice', price: '$100', image: './assets/menu5.jpg' },
        { id: 7, title: 'Chicken Rice', price: '$160', image: './assets/menu6.jpg' },
        { id: 8, title: 'Paneer Noodles', price: '$170', image: './assets/menu7.jpg' },
        { id: 9, title: 'Veg Noodles', price: '$150', image: './assets/menu8.jpg' },
        { id: 10, title: 'Chicken Noodles', price: '$180', image: './assets/menu9.jpg' },
        { id: 11, title: 'Naan', price: '$90', image: './assets/menu10.jpg' },
        { id: 12, title: 'Paneer butter Masala', price: '$120', image: './assets/menu11.jpg' },
        { id: 13, title: 'Chicken butter Masala', price: '$120', image: './assets/menu12.jpg' },
        { id: 14, title: 'Chetinad Chicken', price: '$90', image: './assets/menu13.jpg' },
        { id: 15, title: 'Peper Chicken', price: '$90', image: './assets/menu14.jpg' },
    ],
    '#tab_1_2': [
        { title: 'Paneer Wrap', price: '$90', image: './assets/menu2.1.jpg' },
        { title: 'Paneer Tikka', price: '$110', image: './assets/menu2.2.jpg' },
        { title: 'Paneer naggets', price: '$90', image: './assets/menu2.3.jpg' },
        { title: 'Chicken naggets', price: '$110', image: './assets/menu2.4.jpg' },
        { title: 'Gril Chicken', price: '$200', image: './assets/menu2.5.jpg' },
        { title: 'Thantoori Chicken', price: '$220', image: './assets/menu2.6.jpg' },
        { title: 'Chicken Lolipop', price: '$160', image: './assets/menu2.7.jpg' },
        { title: 'Burger', price: '$90', image: './assets/menu2.8.jpg' },
        { title: 'Pizza', price: '$260', image: './assets/menu2.9.jpg' },
        { title: 'Sandwich', price: '$90', image: './assets/menu2.10.jpg' },
    ],
    '#tab_1_3': [
        { title: 'Paneer Wrap', price: '$90', image: './assets/menu2.1.jpg' },
        { title: 'Paneer Tikka', price: '$220', image: './assets/menu2.2.jpg' },
    ],
    '#tab_1_4': [

    ]
};
// Sample menu data (already provided in your code)
// const menuItems = { ... };

// Function to display menu items
const display = (items, containerId) => {
    const container = document.querySelector(containerId);
    container.innerHTML = ''; 
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'; // Responsive grid layout

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex p-2 border border-gray-200 me-4 cursor-pointer'; // Add cursor-pointer for clickable items
        itemElement.addEventListener('click', () => showOrderSummary(item)); // Event listener for item click
        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.title}" class="h-20 w-16 rounded-md">
            </div>
            <div class="flex flex-col mt-3 ml-2">
                <h5 class="text-white text-xl">${item.title}</h5>
                <p class="text-white">${item.price}</p>
            </div>
        `;
        gridContainer.appendChild(itemElement);
    });

    container.appendChild(gridContainer);
};

// Function to display order summary and form
function showOrderSummary(item) {
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = `
        <div class="container p-3 flex flex-col border border-gray-200 me-4 mx-auto mt-4">
            <h2 class="text-orange-400 text-2xl">Order Summary</h2>
            <img src="${item.image}" alt="${item.title}" class="rounded-sm w-24 h-24 mx-auto">
            <div class="flex flex-col mt-3 ml-2">
                <h5 class="text-white text-xl">${item.title}</h5>
                <p class="text-white">${item.price}</p>
            </div>
            <button class=" border border-orange-500 bg-orange-400 text-white text-xl rounded-md p-2 ml-5 me-3 hover:bg-orange-300" onclick="placeOrder()">Place Order</button>
        </div>
    `;
}

// Function to place an order
// function placeOrder(item) {
//     // You can also handle this with a backend or any other logic
//     const order = {
//         ...item,
//         quantity: 1, 
//         orderTime: new Date().toISOString()
//     };
//     localStorage.setItem('Order', JSON.stringify(order));
//     alert('Order placed successfully! Thank you for your purchase.');
//     // Optionally clear order summary or redirect
//     document.getElementById('orderSummary').innerHTML = '';
// }
function placeOrder() {
    window.alert('Order placed successfully! Thank you for your purchase.');

    document.getElementById('orderSummary').innerHTML='';
    
}

// Function to display menu items in a specific tab
function displayTabItems(tabId) {
    const tabItems = menuItems[tabId];
    if (tabItems) {
        display(tabItems, tabId); 
    }
}

// Handle tab click events to display the corresponding content
document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active classes from all tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active', 'text-orange-500', 'font-semibold');
            tab.classList.add('text-orange-300');
        });

        // Add active classes to the clicked tab
        button.classList.add('active', 'text-orange-500', 'font-semibold');
        button.classList.remove('text-orange-300');

        // Hide all tab content
        document.querySelectorAll('[id^="tab_1_"]').forEach(content => {
            content.classList.add('hidden');
        });
        const target = document.querySelector(button.dataset.tabToggle);
        target.classList.remove('hidden');
        displayTabItems(button.dataset.tabToggle);
    });
});
displayTabItems('#tab_1_1'); 

// Search functionality
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredMenu = Object.values(menuItems)
        .flat() // Combine all menu items from all tabs
        .filter(item => item.title.toLowerCase().includes(searchData));

    display(filteredMenu, '#root'); 
    if(searchData == ""){
        document.getElementById('root').innerHTML = '';
    }
});

// Navbar fixed
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
    }
});

// Reservation table data storage
function Save() {
    const fname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const guest = document.getElementById('guest').value;

    const reservation = {
        fname: fname,
        email: email,
        date: date,
        guest: guest
    };
    localStorage.setItem('Reservation', JSON.stringify(reservation));
    const data = localStorage.getItem('Reservation');
    if (data) {
        alert('Successfully submitted. Thank you for choosing us! We will contact you for further details!');
    } else {
        alert('Please try again');
    }
}



// // Function to display in specific id
// const display = (items, containerId) => {
//     const container = document.querySelector(containerId);
//     container.innerHTML = ''; 
//     const gridContainer = document.createElement('div');
//     gridContainer.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'; // Responsive grid layout

//     items.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.className = 'flex p-2 border border-gray-200 me-4';
//         itemElement.innerHTML = `
//             <div>
//                 <img src="${item.image}" alt="${item.title}" class="h-20 w-16 rounded-md">
//             </div>
//             <div class="flex flex-col mt-3 ml-2">
//                 <h5 class="text-white text-xl">${item.title}</h5>
//                 <p class="text-white">${item.price}</p>
//             </div>
//         `;
//         gridContainer.appendChild(itemElement);
//     });

//     container.appendChild(gridContainer);
// };

// // Function to display menu items in a selected tab
// function displayTabItems(tabId) {
//     const tabItems = menuItems[tabId];
//     if (tabItems) {
//         display(tabItems, tabId); 
//     }
// }

// // Handle tab click events to display the corresponding content
// document.querySelectorAll('.tab').forEach(button => {
//     button.addEventListener('click', () => {
//         // Remove active classes from all tabs
//         document.querySelectorAll('.tab').forEach(tab => {
//             tab.classList.remove('active', 'text-orange-500', 'font-semibold');
//             tab.classList.add('text-orange-300');
//         });

//         // Add active classes to the clicked tab
//         button.classList.add('active', 'text-orange-500', 'font-semibold');
//         button.classList.remove('text-orange-300');

//         // Hide all tab content
//         document.querySelectorAll('[id^="tab_1_"]').forEach(content => {
//             content.classList.add('hidden');
//         });
//         const target = document.querySelector(button.dataset.tabToggle);
//         target.classList.remove('hidden');
//         displayTabItems(button.dataset.tabToggle);
//     });
// });
// displayTabItems('#tab_1_1'); 

// // Search functionality 
// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//     const searchData = e.target.value.toLowerCase();
//     const filteredMenu = Object.values(menuItems)
//         .flat() // Combine all menu items from all tabs
//         .filter(item => item.title.toLowerCase().includes(searchData));

//     display(filteredMenu, '#root'); 
//     if(searchData==""){
//         document.getElementById('root').innerHTML = '';
        
//     }
// });
// // navbar fixed
// window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('bg-black');
//         navbar.classList.remove('bg-transparent');
//     } else {
//         navbar.classList.add('bg-transparent');
//         navbar.classList.remove('bg-black');
//     }
// });

// // reservation table data storage
//     function Save(){
//         const fname=document.getElementById('name').value;
//         const email=document.getElementById('email').value;
//         const date=document.getElementById('date').value;
//         const guest=document.getElementById('guest').value;

//        reservation={
//             fname:fname,
//             email:email,
//             date:date,
//             guest:guest
//         };
//         localStorage.setItem('Reservation',JSON.stringify(reservation));
//         data=localStorage.getItem('Reservation');
//         if(data){
//             window.alert('Succesfully Submited. Thank you for Choosing us! we will contact you for further details!');
//         }
//         else{
//             window.alert('Please try again')
//         }
//     }

       

   