// Application data
let foodItems = [
    {"id": 1, "name": "Margherita Pizza", "price": 12.99, "category": "Pizza", "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop", "description": "Classic tomato sauce, fresh mozzarella, basil"},
    {"id": 2, "name": "Pepperoni Pizza", "price": 14.99, "category": "Pizza", "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop", "description": "Pepperoni, mozzarella cheese, tomato sauce"},
    {"id": 3, "name": "Classic Burger", "price": 9.99, "category": "Burgers", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", "description": "Beef patty, lettuce, tomato, cheese, pickles"},
    {"id": 4, "name": "Bacon Burger", "price": 11.99, "category": "Burgers", "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop", "description": "Beef patty, bacon, cheese, lettuce, tomato"},
    {"id": 5, "name": "California Roll", "price": 8.99, "category": "Sushi", "image": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop", "description": "Crab, avocado, cucumber, sesame seeds"},
    {"id": 6, "name": "Salmon Roll", "price": 10.99, "category": "Sushi", "image": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop", "description": "Fresh salmon, avocado, cucumber"},
    {"id": 7, "name": "Chocolate Cake", "price": 6.99, "category": "Desserts", "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop", "description": "Rich chocolate cake with chocolate frosting"},
    {"id": 8, "name": "Cheesecake", "price": 7.99, "category": "Desserts", "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=300&h=200&fit=crop", "description": "New York style cheesecake with berry sauce"},
    {"id": 9, "name": "Coca Cola", "price": 2.99, "category": "Drinks", "image": "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop", "description": "Classic Coca Cola soft drink"},
    {"id": 10, "name": "Orange Juice", "price": 3.99, "category": "Drinks", "image": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop", "description": "Fresh squeezed orange juice"},
    {"id": 11, "name": "Spaghetti Carbonara", "price": 13.99, "category": "Pasta", "image": "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop", "description": "Spaghetti with bacon, eggs, parmesan cheese"},
    {"id": 12, "name": "Penne Arrabbiata", "price": 11.99, "category": "Pasta", "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop", "description": "Penne pasta in spicy tomato sauce"},
    {"id": 13, "name": "Caesar Salad", "price": 8.99, "category": "Salads", "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=200&fit=crop", "description": "Romaine lettuce, croutons, parmesan, caesar dressing"},
    {"id": 14, "name": "Greek Salad", "price": 9.99, "category": "Salads", "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop", "description": "Mixed greens, feta, olives, tomatoes, cucumber"},
    {"id": 15, "name": "Chicken Tikka Masala", "price": 15.99, "category": "Indian", "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop", "description": "Tender chicken in creamy tomato curry sauce"},
    {"id": 16, "name": "Vegetable Biryani", "price": 12.99, "category": "Indian", "image": "https://images.unsplash.com/photo-1563379091339-03246963d24a?w=300&h=200&fit=crop", "description": "Fragrant basmati rice with mixed vegetables and spices"}
];

let users = [
    {"id": 1, "name": "John Smith", "email": "john@example.com", "password": "password123", "phone": "+1-555-0123", "address": "123 Main St, Anytown, ST 12345", "registrationDate": "2023-01-15"},
    {"id": 2, "name": "Sarah Johnson", "email": "sarah@example.com", "password": "password456", "phone": "+1-555-0456", "address": "456 Oak Ave, Somewhere, ST 67890", "registrationDate": "2023-02-20"},
    {"id": 3, "name": "Mike Davis", "email": "mike@example.com", "password": "password789", "phone": "+1-555-0789", "address": "789 Pine St, Another, ST 13579", "registrationDate": "2023-03-10"}
];

let orders = [
    {"id": 1, "userId": 1, "userName": "John Smith", "userPhone": "+1-555-0123", "deliveryAddress": "123 Main St, Anytown, ST 12345", "foodItems": [{"id": 1, "name": "Margherita Pizza", "quantity": 2, "price": 12.99}], "status": "pending", "orderTime": "2023-12-01 14:30", "total": 25.98},
    {"id": 2, "userId": 2, "userName": "Sarah Johnson", "userPhone": "+1-555-0456", "deliveryAddress": "456 Oak Ave, Somewhere, ST 67890", "foodItems": [{"id": 3, "name": "Classic Burger", "quantity": 1, "price": 9.99}, {"id": 9, "name": "Coca Cola", "quantity": 2, "price": 2.99}], "status": "completed", "orderTime": "2023-12-01 12:15", "total": 15.97},
    {"id": 3, "userId": 1, "userName": "John Smith", "userPhone": "+1-555-0123", "deliveryAddress": "123 Main St, Anytown, ST 12345", "foodItems": [{"id": 15, "name": "Chicken Tikka Masala", "quantity": 1, "price": 15.99}], "status": "pending", "orderTime": "2023-12-02 18:45", "total": 15.99}
];

const adminCredentials = {
    "email": "admin@example.com",
    "password": "admin123"
};

let currentUser = null;
let currentOrderItem = null;
let isAdminLoggedIn = false;
let orderToDelete = null;

// Authentication Form Navigation Functions
function showLoginForm() {
    console.log('showLoginForm called');
    const loginContainer = document.getElementById('login-form-container');
    const signupContainer = document.getElementById('signup-form-container');
    
    if (loginContainer && signupContainer) {
        loginContainer.classList.remove('hidden');
        signupContainer.classList.add('hidden');
        clearAuthForms();
        setTimeout(initializeMDL, 100);
    } else {
        console.error('Login/signup containers not found');
    }
}

function showSignupForm() {
    console.log('showSignupForm called');
    const loginContainer = document.getElementById('login-form-container');
    const signupContainer = document.getElementById('signup-form-container');
    
    if (loginContainer && signupContainer) {
        loginContainer.classList.add('hidden');
        signupContainer.classList.remove('hidden');
        clearAuthForms();
        setTimeout(initializeMDL, 100);
    } else {
        console.error('Login/signup containers not found');
    }
}

function showAdminLogin() {
    console.log('showAdminLogin called');
    hideAllScreens();
    const adminLoginScreen = document.getElementById('admin-login-screen');
    if (adminLoginScreen) {
        adminLoginScreen.classList.remove('hidden');
        
        // Clear admin login form
        const adminEmailInput = document.getElementById('admin-email');
        const adminPasswordInput = document.getElementById('admin-password');
        const adminErrorDiv = document.getElementById('admin-login-error');
        
        if (adminEmailInput) {
            adminEmailInput.value = '';
            const parent = adminEmailInput.closest('.mdl-textfield');
            if (parent) parent.classList.remove('is-dirty', 'is-focused');
        }
        if (adminPasswordInput) {
            adminPasswordInput.value = '';
            const parent = adminPasswordInput.closest('.mdl-textfield');
            if (parent) parent.classList.remove('is-dirty', 'is-focused');
        }
        if (adminErrorDiv) adminErrorDiv.classList.add('hidden');
        
        setTimeout(initializeMDL, 100);
    } else {
        console.error('Admin login screen not found');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Make sure all functions are globally available immediately
    setupGlobalFunctions();
    
    // Show the auth screen
    showAuth();
    
    // Initialize MDL with a longer delay to ensure everything is loaded
    setTimeout(() => {
        initializeMDL();
        console.log('MDL Initialized');
        
        // Set up additional event listeners for buttons
        setupButtonEventListeners();
    }, 300);
});

// Setup all global functions
function setupGlobalFunctions() {
    window.userLogin = userLogin;
    window.userSignup = userSignup;
    window.showLoginForm = showLoginForm;
    window.showSignupForm = showSignupForm;
    window.showHome = showHome;
    window.showAuth = showAuth;
    window.logout = logout;
    window.showAdminLogin = showAdminLogin;
    window.showUserScreen = showUserScreen;
    window.showAdminScreen = showAdminScreen;
    window.adminLogin = adminLogin;
    window.openOrderDialog = openOrderDialog;
    window.closeOrderDialog = closeOrderDialog;
    window.placeOrder = placeOrder;
    window.openDeleteDialog = openDeleteDialog;
    window.closeDeleteDialog = closeDeleteDialog;
    window.confirmDeleteOrder = confirmDeleteOrder;
    window.searchFood = searchFood;
    window.adminSearchFood = adminSearchFood;
    window.updateOrderStatus = updateOrderStatus;
    window.addFood = addFood;
    window.clearAddFoodForm = clearAddFoodForm;
    
    console.log('Global functions set up');
}

// Setup additional button event listeners as backup
function setupButtonEventListeners() {
    console.log('Setting up button event listeners');
    
    // Find and setup signup button
    const signupBtn = document.querySelector('button[onclick="showSignupForm()"]');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Signup button clicked via event listener');
            showSignupForm();
        });
        console.log('Signup button listener added');
    }
    
    // Find and setup admin login button
    const adminBtn = document.querySelector('button[onclick="showAdminLogin()"]');
    if (adminBtn) {
        adminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Admin button clicked via event listener');
            showAdminLogin();
        });
        console.log('Admin button listener added');
    }
    
    // Find and setup back to login button in signup form
    const backToLoginBtn = document.querySelector('button[onclick="showLoginForm()"]');
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back to login button clicked via event listener');
            showLoginForm();
        });
        console.log('Back to login button listener added');
    }
}

// Initialize Material Design Lite components
function initializeMDL() {
    if (window.componentHandler) {
        componentHandler.upgradeAllRegistered();
        console.log('MDL components upgraded');
    }
}

function clearAuthForms() {
    // Clear login form
    const loginInputs = ['user-email', 'user-password'];
    loginInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = '';
            const parent = input.closest('.mdl-textfield');
            if (parent) parent.classList.remove('is-dirty', 'is-focused');
        }
    });
    
    // Clear signup form
    const signupInputs = ['signup-name', 'signup-email', 'signup-phone', 'signup-address', 'signup-password'];
    signupInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = '';
            const parent = input.closest('.mdl-textfield');
            if (parent) parent.classList.remove('is-dirty', 'is-focused');
        }
    });
    
    // Hide error and loading messages
    const messageElements = ['login-error', 'login-loading', 'signup-error', 'signup-loading'];
    messageElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });
}

// User Login Function
function userLogin() {
    console.log('userLogin called');
    const emailInput = document.getElementById('user-email');
    const passwordInput = document.getElementById('user-password');
    
    if (!emailInput || !passwordInput) {
        console.error('Login form elements not found');
        return;
    }
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    console.log('Login attempt:', email);
    
    // Hide previous error messages
    hideLoginError();
    
    // Validate input
    if (!email || !password) {
        showLoginError('Please enter both email and password.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showLoginError('Please enter a valid email address.');
        return;
    }
    
    // Show loading
    showLoginLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Find user with matching credentials
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        
        showLoginLoading(false);
        
        if (user) {
            console.log('User found:', user.name);
            currentUser = user;
            showHome();
            showSnackbar(`Welcome back, ${user.name}!`);
        } else {
            console.log('Invalid credentials');
            showLoginError('Invalid email or password. Please try again.');
        }
    }, 1000);
}

// User Signup Function
function userSignup() {
    console.log('userSignup called');
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const phoneInput = document.getElementById('signup-phone');
    const addressInput = document.getElementById('signup-address');
    const passwordInput = document.getElementById('signup-password');
    
    if (!nameInput || !emailInput || !phoneInput || !addressInput || !passwordInput) {
        console.error('Signup form elements not found');
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const password = passwordInput.value;
    
    console.log('Signup attempt:', email);
    
    // Hide previous error messages
    hideSignupError();
    
    // Validate input
    if (!name || !email || !phone || !address || !password) {
        showSignupError('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showSignupError('Please enter a valid email address.');
        return;
    }
    
    if (password.length < 6) {
        showSignupError('Password must be at least 6 characters long.');
        return;
    }
    
    // Check if email already exists
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
        showSignupError('An account with this email already exists.');
        return;
    }
    
    // Show loading
    showSignupLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Create new user
        const newUser = {
            id: Math.max(...users.map(u => u.id)) + 1,
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            registrationDate: new Date().toISOString().split('T')[0]
        };
        
        users.push(newUser);
        showSignupLoading(false);
        console.log('New user created:', newUser.name);
        
        // Show success message and auto-login
        showSnackbar('Account created successfully! Logging you in...');
        
        setTimeout(() => {
            currentUser = newUser;
            showHome();
            showSnackbar(`Welcome to Food Ordering, ${newUser.name}!`);
        }, 1000);
        
    }, 1500);
}

function showLoginError(message) {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) {
        const span = errorDiv.querySelector('span');
        if (span) span.textContent = message;
        errorDiv.classList.remove('hidden');
    }
}

function hideLoginError() {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) errorDiv.classList.add('hidden');
}

function showLoginLoading(show) {
    const loadingDiv = document.getElementById('login-loading');
    if (loadingDiv) {
        if (show) {
            loadingDiv.classList.remove('hidden');
            setTimeout(initializeMDL, 100);
        } else {
            loadingDiv.classList.add('hidden');
        }
    }
}

function showSignupError(message) {
    const errorDiv = document.getElementById('signup-error');
    if (errorDiv) {
        const span = errorDiv.querySelector('span');
        if (span) span.textContent = message;
        errorDiv.classList.remove('hidden');
    }
}

function hideSignupError() {
    const errorDiv = document.getElementById('signup-error');
    if (errorDiv) errorDiv.classList.add('hidden');
}

function showSignupLoading(show) {
    const loadingDiv = document.getElementById('signup-loading');
    if (loadingDiv) {
        if (show) {
            loadingDiv.classList.remove('hidden');
            setTimeout(initializeMDL, 100);
        } else {
            loadingDiv.classList.add('hidden');
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Screen Navigation Functions
function showAuth() {
    console.log('showAuth called');
    hideAllScreens();
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) {
        authScreen.classList.remove('hidden');
        showLoginForm();
        isAdminLoggedIn = false;
        currentUser = null;
        setTimeout(initializeMDL, 100);
    }
}

function showHome() {
    console.log('showHome called');
    if (!currentUser) {
        console.log('No current user, redirecting to auth');
        showAuth();
        return;
    }
    
    hideAllScreens();
    const userPanel = document.getElementById('user-panel');
    if (userPanel) {
        userPanel.classList.remove('hidden');
        showUserScreen('home');
        loadFoodItems();
        loadUserProfile();
        setTimeout(initializeMDL, 100);
    }
}

function logout() {
    console.log('logout called');
    currentUser = null;
    showAuth();
    showSnackbar('Logged out successfully');
}

function showAdminPanel() {
    console.log('showAdminPanel called');
    hideAllScreens();
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        adminPanel.classList.remove('hidden');
        showAdminScreen('users');
        loadAllUsers();
        setTimeout(initializeMDL, 100);
    }
}

function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
}

// User Panel Navigation
function showUserScreen(screenName) {
    console.log('showUserScreen called:', screenName);
    // Hide all content screens
    const screens = document.querySelectorAll('#user-panel .content-screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    
    // Remove active class from all nav buttons
    const navBtns = document.querySelectorAll('#user-panel .nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected screen
    const targetScreen = document.getElementById(screenName + '-screen');
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
    
    // Add active class to clicked button
    const clickedBtn = document.querySelector(`#user-panel .nav-btn[onclick*="${screenName}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    
    // Load screen-specific content
    switch(screenName) {
        case 'home':
            loadFoodItems();
            break;
        case 'search':
            loadSearchResults();
            break;
        case 'orders':
            loadUserOrders();
            break;
        case 'profile':
            loadUserProfile();
            break;
    }
}

// Admin Panel Navigation
function showAdminScreen(screenName) {
    console.log('showAdminScreen called:', screenName);
    // Hide all admin content screens
    const screens = document.querySelectorAll('#admin-panel .content-screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    
    // Remove active class from all admin nav buttons
    const navBtns = document.querySelectorAll('#admin-panel .nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected admin screen
    const targetScreen = document.getElementById('admin-' + screenName + '-screen');
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
    
    // Add active class to clicked button
    const clickedBtn = document.querySelector(`#admin-panel .nav-btn[onclick*="${screenName}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    
    // Load screen-specific content
    switch(screenName) {
        case 'users':
            loadAllUsers();
            break;
        case 'orders':
            loadAllOrders();
            break;
        case 'search':
            loadAdminSearchResults();
            break;
        case 'add-food':
            clearAddFoodForm();
            break;
    }
}

// Admin Login
function adminLogin() {
    console.log('adminLogin called');
    const emailInput = document.getElementById('admin-email');
    const passwordInput = document.getElementById('admin-password');
    
    if (!emailInput || !passwordInput) {
        console.error('Admin login form elements not found');
        return;
    }
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const errorDiv = document.getElementById('admin-login-error');
    
    console.log('Admin login attempt:', email);
    
    // Hide previous errors
    if (errorDiv) errorDiv.classList.add('hidden');
    
    if (!email || !password) {
        if (errorDiv) errorDiv.classList.remove('hidden');
        return;
    }
    
    if (email === adminCredentials.email && password === adminCredentials.password) {
        console.log('Admin login successful');
        isAdminLoggedIn = true;
        showAdminPanel();
        showSnackbar('Welcome, Admin!');
    } else {
        console.log('Invalid admin credentials');
        if (errorDiv) errorDiv.classList.remove('hidden');
    }
}

// Load Food Items
function loadFoodItems() {
    console.log('loadFoodItems called');
    const container = document.querySelector('#home-screen .food-grid');
    if (!container) {
        console.error('Food grid container not found');
        return;
    }
    
    container.innerHTML = '';
    
    foodItems.forEach(item => {
        const foodElement = createFoodItemElement(item, true);
        container.appendChild(foodElement);
    });
    
    console.log('Food items loaded:', foodItems.length);
}

function createFoodItemElement(item, showOrderButton = false) {
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjY2NjY2NjIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rm9vZCBJbWFnZTwvdGV4dD4KPC9zdmc+'">
        <div class="food-item-content">
            <span class="food-item-category">${item.category}</span>
            <h4>${item.name}</h4>
            <div class="food-item-price">$${item.price}</div>
            ${showOrderButton ? `<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onclick="openOrderDialog(${item.id})">Order</button>` : ''}
        </div>
    `;
    return div;
}

// Search Functions
function searchFood(query) {
    const results = foodItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    displaySearchResults(results, '#search-results');
}

function adminSearchFood(query) {
    const results = foodItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    displaySearchResults(results, '#admin-search-results', false);
}

function loadSearchResults() {
    displaySearchResults(foodItems, '#search-results');
}

function loadAdminSearchResults() {
    displaySearchResults(foodItems, '#admin-search-results', false);
}

function displaySearchResults(items, containerId, showOrderButton = true) {
    const container = document.querySelector(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (items.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="material-icons">search_off</i><p>No food items found</p></div>';
        return;
    }
    
    items.forEach(item => {
        const foodElement = createFoodItemElement(item, showOrderButton);
        container.appendChild(foodElement);
    });
}

// Order Functions
function openOrderDialog(foodId) {
    if (!currentUser) {
        showSnackbar('Please log in first');
        return;
    }
    
    const food = foodItems.find(item => item.id === foodId);
    if (!food) return;
    
    currentOrderItem = food;
    
    // Populate dialog
    document.getElementById('order-food-details').innerHTML = `
        <h5>${food.name}</h5>
        <p>Price: $${food.price}</p>
        <p>Category: ${food.category}</p>
        <p>${food.description}</p>
    `;
    
    document.getElementById('order-name').value = currentUser.name;
    document.getElementById('order-address').value = currentUser.address;
    document.getElementById('order-phone').value = currentUser.phone;
    
    const dialog = document.querySelector('#order-dialog');
    if (dialog.showModal) {
        dialog.showModal();
    } else {
        dialog.style.display = 'block';
    }
    
    setTimeout(initializeMDL, 100);
}

function closeOrderDialog() {
    const dialog = document.querySelector('#order-dialog');
    if (dialog.close) {
        dialog.close();
    } else {
        dialog.style.display = 'none';
    }
    currentOrderItem = null;
}

function placeOrder() {
    if (!currentOrderItem || !currentUser) return;
    
    const newOrder = {
        id: Math.max(...orders.map(o => o.id), 0) + 1,
        userId: currentUser.id,
        userName: currentUser.name,
        userPhone: currentUser.phone,
        deliveryAddress: currentUser.address,
        foodItems: [{
            id: currentOrderItem.id,
            name: currentOrderItem.name,
            quantity: 1,
            price: currentOrderItem.price
        }],
        status: 'pending',
        orderTime: new Date().toLocaleString(),
        total: currentOrderItem.price
    };
    
    orders.unshift(newOrder);
    closeOrderDialog();
    showSnackbar('Order placed successfully!');
    
    // Switch to orders screen after a short delay
    setTimeout(() => {
        showUserScreen('orders');
    }, 1000);
}

// Delete Order Functions
function openDeleteDialog(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order || order.userId !== currentUser.id) return;
    
    orderToDelete = orderId;
    const dialog = document.querySelector('#delete-confirmation-dialog');
    if (dialog.showModal) {
        dialog.showModal();
    } else {
        dialog.style.display = 'block';
    }
}

function closeDeleteDialog() {
    const dialog = document.querySelector('#delete-confirmation-dialog');
    if (dialog.close) {
        dialog.close();
    } else {
        dialog.style.display = 'none';
    }
    orderToDelete = null;
}

function confirmDeleteOrder() {
    if (!orderToDelete) return;
    
    // Remove order from orders array
    const orderIndex = orders.findIndex(o => o.id === orderToDelete);
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        showSnackbar('Order deleted successfully');
        loadUserOrders(); // Refresh the orders list
    }
    
    closeDeleteDialog();
}

// Load User Orders
function loadUserOrders() {
    const container = document.getElementById('orders-list');
    if (!container || !currentUser) return;
    
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="material-icons">receipt</i><p>No orders yet</p></div>';
        return;
    }
    
    container.innerHTML = '';
    userOrders.forEach(order => {
        const orderElement = createOrderElement(order, false);
        container.appendChild(orderElement);
    });
}

function createOrderElement(order, isAdmin = false) {
    const div = document.createElement('div');
    div.className = 'order-item';
    
    const statusClass = order.status === 'pending' ? 'pending' : 'completed';
    
    div.innerHTML = `
        <div class="order-header">
            <div class="order-id">Order #${order.id}</div>
            <div class="order-status ${statusClass}">
                <span class="status-dot"></span>
                ${order.status === 'pending' ? 'Pending' : 'Completed'}
            </div>
        </div>
        <div class="order-details">
            ${isAdmin ? `
                <p><strong>Customer:</strong> ${order.userName}</p>
                <p><strong>Phone:</strong> ${order.userPhone}</p>
                <p><strong>Address:</strong> ${order.deliveryAddress}</p>
            ` : ''}
            <p><strong>Order Time:</strong> ${order.orderTime}</p>
            <div class="order-food-items">
                ${order.foodItems.map(item => `
                    <div class="order-food-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="order-total">
            Total: $${order.total.toFixed(2)}
        </div>
        ${isAdmin ? `
            <div class="admin-order-controls">
                <button class="mdl-button mdl-js-button mdl-button--raised" 
                        onclick="updateOrderStatus(${order.id}, 'pending')"
                        ${order.status === 'pending' ? 'disabled' : ''}>
                    Mark Pending
                </button>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" 
                        onclick="updateOrderStatus(${order.id}, 'completed')"
                        ${order.status === 'completed' ? 'disabled' : ''}>
                    Order Complete
                </button>
            </div>
        ` : `
            <div class="order-actions">
                <button class="mdl-button mdl-js-button mdl-button--raised delete-btn" 
                        onclick="openDeleteDialog(${order.id})">
                    <i class="material-icons">delete</i>
                    Delete
                </button>
            </div>
        `}
    `;
    
    return div;
}

// Load User Profile
function loadUserProfile() {
    if (!currentUser) return;
    
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profilePhone = document.getElementById('profile-phone');
    const profileAddress = document.getElementById('profile-address');
    
    if (profileName) profileName.textContent = currentUser.name;
    if (profileEmail) profileEmail.textContent = currentUser.email;
    if (profilePhone) profilePhone.textContent = currentUser.phone;
    if (profileAddress) profileAddress.textContent = currentUser.address;
}

// Admin Functions
function loadAllUsers() {
    const container = document.getElementById('users-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    users.forEach(user => {
        const userElement = createUserElement(user);
        container.appendChild(userElement);
    });
}

function createUserElement(user) {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
        <h4>${user.name}</h4>
        <div class="user-info">
            <div class="user-info-item">
                <i class="material-icons">email</i>
                <span>${user.email}</span>
            </div>
            <div class="user-info-item">
                <i class="material-icons">phone</i>
                <span>${user.phone}</span>
            </div>
            <div class="user-info-item">
                <i class="material-icons">home</i>
                <span>${user.address}</span>
            </div>
            <div class="user-info-item">
                <i class="material-icons">calendar_today</i>
                <span>Registered: ${user.registrationDate}</span>
            </div>
        </div>
    `;
    return div;
}

function loadAllOrders() {
    const container = document.getElementById('admin-orders-list');
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="material-icons">receipt</i><p>No orders yet</p></div>';
        return;
    }
    
    container.innerHTML = '';
    orders.forEach(order => {
        const orderElement = createOrderElement(order, true);
        container.appendChild(orderElement);
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        loadAllOrders();
        showSnackbar(`Order #${orderId} status updated to ${newStatus}`);
    }
}

// Enhanced Add Food Function with proper validation and error handling
function addFood() {
    console.log('addFood called');
    
    const nameInput = document.getElementById('food-name');
    const priceInput = document.getElementById('food-price');
    const categoryInput = document.getElementById('food-category');
    const imageInput = document.getElementById('food-image');
    const descriptionInput = document.getElementById('food-description');
    
    if (!nameInput || !priceInput || !categoryInput || !descriptionInput) {
        console.error('Add food form elements not found');
        showAddFoodError('Form elements not found. Please refresh the page.');
        return;
    }
    
    const name = nameInput.value.trim();
    const priceValue = priceInput.value.trim();
    const category = categoryInput.value.trim();
    const image = imageInput ? imageInput.value.trim() : '';
    const description = descriptionInput.value.trim();
    
    console.log('Add food form data:', { name, priceValue, category, description });
    
    // Hide previous messages
    hideAddFoodMessages();
    
    // Validate all required fields
    const validationErrors = [];
    
    if (!name) validationErrors.push('Food name is required');
    if (!priceValue || isNaN(parseFloat(priceValue)) || parseFloat(priceValue) <= 0) {
        validationErrors.push('Valid price is required');
    }
    if (!category) validationErrors.push('Category is required');
    if (!description) validationErrors.push('Description is required');
    
    // Validate image URL if provided
    if (image && !isValidUrl(image)) {
        validationErrors.push('Please provide a valid image URL');
    }
    
    if (validationErrors.length > 0) {
        console.log('Validation errors:', validationErrors);
        showAddFoodError(validationErrors[0]);
        return;
    }
    
    const price = parseFloat(priceValue);
    
    // Show loading
    showAddFoodLoading(true);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
        try {
            const newFood = {
                id: Math.max(...foodItems.map(f => f.id), 0) + 1,
                name: name,
                price: price,
                category: category,
                image: image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjY2NjY2NjIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rm9vZCBJbWFnZTwvdGV4dD4KPC9zdmc+',
                description: description
            };
            
            console.log('New food item created:', newFood);
            
            // Add to foodItems array
            foodItems.push(newFood);
            
            showAddFoodLoading(false);
            showAddFoodSuccess();
            
            // Clear form after successful addition
            setTimeout(() => {
                clearAddFoodForm();
                // Refresh admin search results if currently viewing
                const adminSearchScreen = document.getElementById('admin-search-screen');
                if (adminSearchScreen && !adminSearchScreen.classList.contains('hidden')) {
                    loadAdminSearchResults();
                }
            }, 2000);
            
            showSnackbar(`${name} added successfully to the menu!`);
            
        } catch (error) {
            showAddFoodLoading(false);
            showAddFoodError('Failed to add food item. Please try again.');
            console.error('Error adding food item:', error);
        }
    }, 1000);
}

function clearAddFoodForm() {
    console.log('clearAddFoodForm called');
    const formInputs = ['food-name', 'food-price', 'food-category', 'food-image', 'food-description'];
    
    formInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = '';
            const parent = input.closest('.mdl-textfield');
            if (parent) {
                parent.classList.remove('is-dirty', 'is-focused', 'is-invalid');
            }
        }
    });
    
    hideAddFoodMessages();
    setTimeout(initializeMDL, 100);
}

function showAddFoodError(message) {
    const errorDiv = document.getElementById('add-food-error');
    if (errorDiv) {
        const span = errorDiv.querySelector('span');
        if (span) span.textContent = message;
        errorDiv.classList.remove('hidden');
    }
}

function showAddFoodLoading(show) {
    const loadingDiv = document.getElementById('add-food-loading');
    if (loadingDiv) {
        if (show) {
            loadingDiv.classList.remove('hidden');
            setTimeout(initializeMDL, 100);
        } else {
            loadingDiv.classList.add('hidden');
        }
    }
}

function showAddFoodSuccess() {
    const successDiv = document.getElementById('add-food-success');
    if (successDiv) {
        successDiv.classList.remove('hidden');
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successDiv.classList.add('hidden');
        }, 3000);
    }
}

function hideAddFoodMessages() {
    const messageElements = ['add-food-error', 'add-food-loading', 'add-food-success'];
    messageElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Utility Functions
function showSnackbar(message) {
    console.log('Snackbar:', message);
    // Try to use MDL snackbar
    const snackbar = document.querySelector('#success-snackbar');
    if (snackbar && snackbar.MaterialSnackbar) {
        const data = {
            message: message,
            timeout: 3000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    } else {
        // Fallback: show temporary message at top of screen
        const messageDiv = document.createElement('div');
        messageDiv.className = 'snackbar-fallback';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 10000;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        `;
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 3000);
    }
}

// Handle Enter key on forms
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const target = event.target;
        
        // Handle login form
        if (target.closest('#login-form')) {
            event.preventDefault();
            userLogin();
        }
        // Handle signup form
        else if (target.closest('#signup-form')) {
            event.preventDefault();
            userSignup();
        }
        // Handle admin login
        else if (target.closest('#admin-login-screen') && !document.getElementById('admin-login-screen').classList.contains('hidden')) {
            event.preventDefault();
            adminLogin();
        }
        // Handle add food form
        else if (target.closest('#add-food-form')) {
            event.preventDefault();
            addFood();
        }
    }
});

// Global click handler for navigation and dialogs
document.addEventListener('click', function(event) {
    // Handle dialog clicks
    const orderDialog = document.querySelector('#order-dialog');
    const deleteDialog = document.querySelector('#delete-confirmation-dialog');
    
    if (event.target === orderDialog) {
        closeOrderDialog();
    }
    
    if (event.target === deleteDialog) {
        closeDeleteDialog();
    }
});

console.log('App.js loaded successfully');