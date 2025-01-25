
// Funkcja zmieniająca tekst na stronie w zależności od języka
function changeLanguage(language) {
    const translations = {
        'pl': {
            'store-name': 'GadgetsWorld',
            'nav-product1': 'Produkt 1',
            'nav-product2': 'Produkt 2',
            'nav-product3': 'Produkt 3',
            'hero-title': 'Witaj w GadgetsWorld!',
            'hero-desc': 'Oferujemy szeroką gamę elektroniki w najlepszych cenach. Sprawdź nasze propozycje!',
            'product1-title': 'Smartwatch',
            'product1-desc': 'Opis produktu: Nowoczesny smartwatch z wieloma funkcjami!',
            'product2-title': 'Słuchawki Bluetooth',
            'product2-desc': 'Opis produktu: Wygodne słuchawki Bluetooth z dźwiękiem najwyższej jakości.',
            'product3-title': 'Powerbank',
            'product3-desc': 'Opis produktu: Mocny powerbank, który naładuje Twoje urządzenia w podróży!',
            'buy-btn1': 'Kup teraz',
            'buy-btn2': 'Kup teraz',
            'buy-btn3': 'Kup teraz',
            'footer-text': '&copy; 2025 GadgetsWorld. Wszystkie prawa zastrzeżone.'
        },
        'en': {
            'store-name': 'GadgetsWorld',
            'nav-product1': 'Product 1',
            'nav-product2': 'Product 2',
            'nav-product3': 'Product 3',
            'hero-title': 'Welcome to GadgetsWorld!',
            'hero-desc': 'We offer a wide range of electronics at the best prices. Check out our suggestions!',
            'product1-title': 'Smartwatch',
            'product1-desc': 'Product description: A modern smartwatch with many features!',
            'product2-title': 'Bluetooth Headphones',
            'product2-desc': 'Product description: Comfortable Bluetooth headphones with top-quality sound.',
            'product3-title': 'Powerbank',
            'product3-desc': 'Product description: A powerful powerbank that will charge your devices on the go!',
            'buy-btn1': 'Buy now',
            'buy-btn2': 'Buy now',
            'buy-btn3': 'Buy now',
            'footer-text': '&copy; 2025 GadgetsWorld. All rights reserved.'
        }
    };

    // Pobierz tłumaczenia dla danego języka
    const translation = translations[language] || translations['pl']; // Domyślnie polski

    // Zaktualizuj elementy na stronie
    for (const [key, value] of Object.entries(translation)) {
        document.getElementById(key).innerHTML = value;
    }
}

// Sprawdź język przeglądarki i ustaw odpowiedni
const userLanguage = navigator.language || navigator.userLanguage; // np. "pl", "en"
const languageCode = userLanguage.split('-')[0]; // Pobierz kod języka: "pl", "en"

// Jeśli dostępne tłumaczenie, zmień język
changeLanguage(languageCode);
