// Preschool data with placeholder links
const preschoolsData = [
    {
        id: 1,
        name: "Przedszkole Nr 1",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-school"
    },
    {
        id: 2,
        name: "Przedszkole Nr 2",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 3,
        name: "Przedszkole Nr 3",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-child"
    },
    {
        id: 4,
        name: "Przedszkole Nr 4",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-baby"
    },
    {
        id: 5,
        name: "Przedszkole Nr 5",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-users"
    },
    {
        id: 6,
        name: "Przedszkole Nr 6",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-heart"
    },
    {
        id: 7,
        name: "Przedszkole Nr 7",
        description: "Zarządzanie formularzami i danymi",
        icon: "fas fa-star"
    }
];

// Tile configurations with placeholder links
const tilesConfig = [
    {
        title: "Formularz Obecności",
        description: "Rejestracja obecności dzieci",
        icon: "fas fa-check-circle",
        class: "attendance",
        url: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUM0dMSzBQSTkyUDlOUlJQNkJPWjZBTU02WC4u&origin=lprLink&route=shorturl"
    },
    {
        title: "Arkusz Obecności",
        description: "Przeglądanie danych obecności",
        icon: "fas fa-table",
        class: "spreadsheet",
        url: "https://ubiquora-my.sharepoint.com/:x:/p/michal_listek/ET54uxftUU5OhWTwQNHGL5gBiqCswlhnV_oVewPm8nT-Bg?e=qAi4nL"
    },
    {
        title: "Dzienny Zapis Pracy",
        description: "Formularz dziennej pracy wychowawczo-dydaktycznej",
        icon: "fas fa-clipboard-list",
        class: "daily-report",
        url: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUQkMzTUVRSThLWUM3T1pTMjBJODMwM1paNi4u"
    },
    {
        title: "Arkusz Dziennej Pracy",
        description: "Przeglądanie danych dziennej pracy",
        icon: "fas fa-chart-line",
        class: "daily-spreadsheet",
        url: "https://ubiquora-my.sharepoint.com/:x:/p/michal_listek/ET54uxftUU5OhWTwQNHGL5gBiqCswlhnV_oVewPm8nT-Bg?e=qAi4nL"
    }
];

// DOM elements
const preschoolsGrid = document.getElementById('preschoolsGrid');
const modal = document.getElementById('preschoolModal');
const modalTitle = document.getElementById('modalTitle');
const modalTiles = document.getElementById('modalTiles');
const closeModal = document.getElementById('closeModal');

// Initialize the dashboard
function initDashboard() {
    renderPreschools();
    setupEventListeners();
}

// Render preschool cards
function renderPreschools() {
    preschoolsGrid.innerHTML = '';
    
    preschoolsData.forEach(preschool => {
        const card = createPreschoolCard(preschool);
        preschoolsGrid.appendChild(card);
    });
}

// Create preschool card element
function createPreschoolCard(preschool) {
    const card = document.createElement('div');
    card.className = 'preschool-card';
    card.dataset.preschoolId = preschool.id;
    
    card.innerHTML = `
        <i class="${preschool.icon} preschool-icon"></i>
        <h3>${preschool.name}</h3>
        <p>${preschool.description}</p>
    `;
    
    card.addEventListener('click', () => openPreschoolModal(preschool));
    
    return card;
}

// Open preschool modal with tiles
function openPreschoolModal(preschool) {
    modalTitle.textContent = preschool.name;
    modalTiles.innerHTML = '';
    
    tilesConfig.forEach(tile => {
        const tileElement = createTile(tile, preschool.id);
        modalTiles.appendChild(tileElement);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Create tile element
function createTile(tile, preschoolId) {
    const tileElement = document.createElement('a');
    tileElement.className = `tile ${tile.class}`;
    tileElement.href = tile.url;
    tileElement.target = '_blank';
    tileElement.rel = 'noopener noreferrer';
    
    tileElement.innerHTML = `
        <i class="${tile.icon} tile-icon"></i>
        <h4>${tile.title}</h4>
        <p>${tile.description}</p>
    `;
    
    // Add click tracking
    tileElement.addEventListener('click', (e) => {
        console.log(`Clicked: ${tile.title} for Preschool ${preschoolId}`);
        // You can add analytics tracking here if needed
    });
    
    return tileElement;
}

// Close modal
function closeModalHandler() {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.95)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 200);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal events
    closeModal.addEventListener('click', closeModalHandler);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', debounce(() => {
        // Handle responsive adjustments if needed
        console.log('Window resized');
    }, 250));
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Animation utilities
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.preschool-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    
    // Add loading animation after a short delay
    setTimeout(addLoadingAnimation, 100);
});

// Export functions for potential future use
window.DashboardApp = {
    initDashboard,
    openPreschoolModal,
    closeModalHandler,
    preschoolsData,
    tilesConfig
};
