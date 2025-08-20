# Dashboard Przedszkoli - System Zarządzania

## Opis

Nowoczesny dashboard do zarządzania formularzami i arkuszami kalkulacyjnymi dla 7 przedszkoli. Dashboard oferuje intuicyjny interfejs z dużymi kafelkami umożliwiającymi szybki dostęp do:

- Formularzy obecności
- Arkuszy danych obecności  
- Formularzy dziennej pracy wychowawczo-dydaktycznej
- Arkuszy danych dziennej pracy

## Struktura projektu

```
dashboard-przedszkola-józefa/
├── index.html          # Główny plik HTML
├── styles.css          # Style CSS
├── script.js           # Logika JavaScript
└── README.md           # Ten plik
```

## Funkcjonalności

### ✨ Główne cechy
- **Responsywny design** - działa na komputerach, tabletach i telefonach
- **Nowoczesny interfejs** - gradient tła, efekty hover, animacje
- **7 kart przedszkoli** - każda z własnymi ikonami
- **Modal z 4 kafelkami** dla każdego przedszkola
- **Łatwa personalizacja** - możliwość zmiany linków i nazw

### 🎨 Design
- Gradient niebieski tła
- Białe karty z efektami szkła (glassmorphism)
- Kolorowe kafelki dla różnych typów formularzy
- Animacje hover i ładowania
- Ikony Font Awesome

## Personalizacja

### Zmiana linków dla przedszkoli

W pliku `script.js` znajdź sekcję `tilesConfig` i zmień URLs:

```javascript
const tilesConfig = [
    {
        title: "Formularz Obecności",
        description: "Rejestracja obecności dzieci",
        icon: "fas fa-check-circle",
        class: "attendance",
        url: "TWÓJ_LINK_DO_FORMULARZA_OBECNOŚCI"
    },
    // ... pozostałe kafelki
];
```

### Zmiana nazw przedszkoli

W pliku `script.js` znajdź sekcję `preschoolsData` i zmień nazwy:

```javascript
const preschoolsData = [
    {
        id: 1,
        name: "Twoja Nazwa Przedszkola",
        description: "Opis przedszkola",
        icon: "fas fa-school"
    },
    // ... pozostałe przedszkola
];
```

### Dostępne ikony

Możesz używać dowolnych ikon z Font Awesome 6:
- `fas fa-school` - szkoła
- `fas fa-graduation-cap` - czapka absolwenta  
- `fas fa-child` - dziecko
- `fas fa-baby` - niemowlę
- `fas fa-users` - użytkownicy
- `fas fa-heart` - serce
- `fas fa-star` - gwiazda
- `fas fa-home` - dom
- `fas fa-rainbow` - tęcza

### Kolory kafelków

W pliku `styles.css` możesz zmienić kolory kafelków:

```css
.tile.attendance {
    background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
}
```

## Uruchamianie

1. Otwórz plik `index.html` w przeglądarce internetowej
2. Dashboard zostanie automatycznie załadowany
3. Kliknij na kartę przedszkola, aby zobaczyć dostępne opcje
4. Kliknij na kafelek, aby przejść do odpowiedniego formularza/arkusza

## Wymagania techniczne

- Nowoczesna przeglądarka internetowa (Chrome, Firefox, Safari, Edge)
- Połączenie z internetem (dla ikon Font Awesome i czcionek Google)
- Żadne dodatkowe oprogramowanie nie jest wymagane

## Wsparcie

Dashboard jest w pełni funkcjonalny i gotowy do użycia. Wszystkie linki używają obecnie linków placeholder - zamień je na właściwe linki dla każdego przedszkola.

### Struktura linków dla każdego przedszkola:

Każde przedszkole powinno mieć 4 unikalne linki:
1. **Formularz obecności** - link do Microsoft Forms
2. **Arkusz obecności** - link do SharePoint/Excel Online  
3. **Formularz dziennej pracy** - link do Microsoft Forms
4. **Arkusz dziennej pracy** - link do SharePoint/Excel Online

## Licencja

Projekt utworzony dla klienta - wszystkie prawa zastrzeżone.
