// Links for each preschool (using placeholder links as base)
const preschoolLinks = {
    1: { // Grupa 1
        attendanceForm: "https://forms.office.com/e/NCZqXKtqLK",
        attendanceSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EQryeBu5OiVFsiE3hhGJDnMByiAL27MBVO_GskqMQ-TYZg?e=fIJBaG",
        attendanceDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=2Ec2TAMBQhO8V9YoqNh6R0FLz5qUBNm0&id=A7t7Nm0wM0mb_CdbZb0qxDGrWZg3i2VIjZD57KkDBPRUQUdRSFBGV0o3UEw0WkExWjZBVU5DV05PTy4u",
        preschoolForm: "https://forms.office.com/e/0P3QC08zLr",
        preschoolSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EcJ4NRBofRVKsBMgC0lPucIB_nrruPOtv8TfnWXHJK8pJA?e=e44eYV",
        rehabForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMVFVOVk2QlY3VDdFWUVHN1VYRDBXSlZFVC4u",
        rehabSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B093BA5B9-5072-417E-98DA-886B62CF07A5%7D&file=Dziennik%20Rewalidacji.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=5971411d-afc0-4dac-ade0-382e1de43dc5&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMzVZOVkwMDVZUlA2MElVN0tFSFFUN0I3Mi4u",
        specialistSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B8A702412-1D31-4C80-B03D-2229F9C253C4%7D&file=Dziennik%20specjalisty.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=1370df0e-64ad-45bb-9379-12507c2fcc61&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=qwcTU0IfjHwqEPFOzeUyUXFgNXanPNUg&id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMzVZOVkwMDVZUlA2MElVN0tFSFFUN0I3Mi4u"
    },
    2: { // Grupa 2
        attendanceForm: "https://forms.office.com/e/d1b1SRfryj",
        attendanceSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EeFyJzNlmVtBoRkbiD4XvEcB0x_WMhVZmPyT1VFqnG7CYA?e=yaCdmN",
        attendanceDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=HpvagH1nG1pkwbd02huf8K7O4nlpcxyq&id=A7t7Nm0wM0mb_CdbZb0qxDGrWZg3i2VIjZD57KkDBPRURDlQMVNROVE0VVVTMjBNODdDVVRNSDZZOS4u",
        preschoolForm: "https://forms.office.com/e/0P3QC08zLr",
        preschoolSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EcJ4NRBofRVKsBMgC0lPucIB_nrruPOtv8TfnWXHJK8pJA?e=e44eYV",
        rehabForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMVFVOVk2QlY3VDdFWUVHN1VYRDBXSlZFVC4u",
        rehabSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B093BA5B9-5072-417E-98DA-886B62CF07A5%7D&file=Dziennik%20Rewalidacji.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=5971411d-afc0-4dac-ade0-382e1de43dc5&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUM0dMSzBQSTkyUDlOUlJQNkJPWjZBTU02WC4u",
        specialistSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B8A702412-1D31-4C80-B03D-2229F9C253C4%7D&file=Dziennik%20specjalisty.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=1370df0e-64ad-45bb-9379-12507c2fcc61&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=qwcTU0IfjHwqEPFOzeUyUXFgNXanPNUg&id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMzVZOVkwMDVZUlA2MElVN0tFSFFUN0I3Mi4u"
    },
    3: { // Grupa 3
        attendanceForm: "https://forms.office.com/e/YXXQbrtw9i",
        attendanceSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EatkfVDJh-hHhrElFFhe8AsBa-EP9v1MNEexNyjBGgTiXw?e=Rc0z54",
        attendanceDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=bABueSvID25Cuzu5TWd86jkH9Q7nRKL1&id=A7t7Nm0wM0mb_CdbZb0qxDGrWZg3i2VIjZD57KkDBPRUNUYzRzZYWEc3M0w3UlhQOVBWMTk3T0ROVC4u",
        preschoolForm: "https://forms.office.com/e/0P3QC08zLr",
        preschoolSheet: "https://ubiquora-my.sharepoint.com/:x:/p/sebastian_rolek/EcJ4NRBofRVKsBMgC0lPucIB_nrruPOtv8TfnWXHJK8pJA?e=e44eYV",
        rehabForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMVFVOVk2QlY3VDdFWUVHN1VYRDBXSlZFVC4u",
        rehabSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B093BA5B9-5072-417E-98DA-886B62CF07A5%7D&file=Dziennik%20Rewalidacji.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=5971411d-afc0-4dac-ade0-382e1de43dc5&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUM0dMSzBQSTkyUDlOUlJQNkJPWjZBTU02WC4u",
        specialistSheet: "https://ubiquora-my.sharepoint.com/:x:/r/personal/augustyn_kozak_ubiquora_com/_layouts/15/Doc.aspx?sourcedoc=%7B8A702412-1D31-4C80-B03D-2229F9C253C4%7D&file=Dziennik%20specjalisty.xlsx&action=edit&mobileredirect=true&wdMsFormsCorrelationId=1370df0e-64ad-45bb-9379-12507c2fcc61&wdtf=%20Microsoft.Office.Excel.FMsFormsMetadataInWorkbookMetadata%3Atrue",
        specialistDashboard: "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=qwcTU0IfjHwqEPFOzeUyUXFgNXanPNUg&id=A7t7Nm0wM0mb_CdbZb0qxMKo6Rtve-tIhAzb-2XxBqVUMzVZOVkwMDVZUlA2MElVN0tFSFFUN0I3Mi4u"
    }
};

// Preschool data
const preschoolsData = [
    {
        id: 1,
        name: "Pierwsza",
        description: "Zarządzanie formularzami i danymi dla grupy Pierwszej",
        icon: "fas fa-shapes"
    },
    {
        id: 2,
        name: "Druga",
        description: "Zarządzanie formularzami i danymi dla grupy Drugiej",
        icon: "fas fa-robot"
    },
    {
        id: 3,
        name: "Trzecia",
        description: "Zarządzanie formularzami i danymi dla grupy Trzeciej",
        icon: "fas fa-gamepad"
    }
];

// Tile configurations organized by categories
const tilesConfig = [
    // KATEGORIA 1: Lista Obecności
    {
        title: "Formularz Obecności",
        description: "Rejestracja obecności dzieci",
        icon: "fas fa-check-circle",
        class: "attendance-form",
        category: "lista-obecnosci",
        linkKey: "attendanceForm"
    },
    {
        title: "Arkusz Obecności",
        description: "Przeglądanie danych obecności",
        icon: "fas fa-table",
        class: "attendance-sheet",
        category: "lista-obecnosci",
        linkKey: "attendanceSheet"
    },
    // KATEGORIA 2: Dziennik Zajęć Przedszkola
    {
        title: "Dzienny Zapis Pracy",
        description: "Formularz dziennej pracy wychowawczo-dydaktycznej",
        icon: "fas fa-clipboard-list",
        class: "preschool-form",
        category: "dziennik-zajec",
        linkKey: "preschoolForm"
    },
    {
        title: "Arkusz Dziennej Pracy",
        description: "Przeglądanie danych dziennej pracy",
        icon: "fas fa-chart-line",
        class: "preschool-sheet",
        category: "dziennik-zajec",
        linkKey: "preschoolSheet"
    },
    // KATEGORIA 3: Dziennik Rewalidacyjny
    {
        title: "Dziennik Rewalidacji",
        description: "Formularz rewalidacji",
        icon: "fas fa-heartbeat",
        class: "rehab-form",
        category: "dziennik-rewalidacyjny",
        linkKey: "rehabForm"
    },
    {
        title: "Odpowiedzi Do Dziennika Rewalidacji",
        description: "Odpowiedzi do dziennika rewalidacji",
        icon: "fas fa-file-medical",
        class: "rehab-sheet",
        category: "dziennik-rewalidacyjny",
        linkKey: "rehabSheet"
    },
    // KATEGORIA 4: Dziennik Specjalisty
    {
        title: "Dziennik Specjalisty",
        description: "Formularz dziennika specjalisty",
        icon: "fas fa-user-md",
        class: "specialist-form",
        category: "dziennik-specjalisty",
        linkKey: "specialistForm"
    },
    {
        title: "Odpowiedzi Do Dziennika Specjalisty",
        description: "Odpowiedzi do dziennika specjalisty",
        icon: "fas fa-stethoscope",
        class: "specialist-sheet",
        category: "dziennik-specjalisty",
        linkKey: "specialistSheet"
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

// Open preschool modal with tiles grouped by categories
function openPreschoolModal(preschool) {
    modalTitle.textContent = preschool.name;
    modalTiles.innerHTML = '';
    
    // Group tiles by category
    const categories = {
        'lista-obecnosci': 'Lista Obecności',
        'dziennik-zajec': 'Dziennik Zajęć Przedszkola',
        'dziennik-rewalidacyjny': 'Dziennik Rewalidacyjny',
        'dziennik-specjalisty': 'Dziennik Specjalisty'
    };
    
    Object.keys(categories).forEach(categoryKey => {
        const categoryTiles = tilesConfig.filter(tile => tile.category === categoryKey);
        
        if (categoryTiles.length > 0) {
            // Create category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `<h3>${categories[categoryKey]}</h3>`;
            modalTiles.appendChild(categoryHeader);
            
            // Create category grid
            const categoryGrid = document.createElement('div');
            categoryGrid.className = `category-grid ${categoryKey}`;
            
            categoryTiles.forEach(tile => {
                const tileElement = createTile(tile, preschool.id);
                categoryGrid.appendChild(tileElement);
            });
            
            modalTiles.appendChild(categoryGrid);
        }
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    /*
    setTimeout(() => {
        modal.querySelectorAll('.modal-content').forEach((el) => {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
        });
    }, 10);
    */
}

// Create tile element
function createTile(tile, preschoolId) {
    const tileElement = document.createElement('a');
    tileElement.className = `tile ${tile.class}`;
    
    // Get the URL for this specific preschool and tile type
    const preschoolSpecificLinks = preschoolLinks[preschoolId];
    const url = preschoolSpecificLinks && preschoolSpecificLinks[tile.linkKey] 
        ? preschoolSpecificLinks[tile.linkKey] 
        : '#';
    
    tileElement.href = url;
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
    tilesConfig,
    preschoolLinks
};
