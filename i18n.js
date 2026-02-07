// ===== i18n System =====
let currentLanguage = 'en';
let translations = {};

// Supported languages
const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'pl'];

// Detect user's preferred language
function detectLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && supportedLanguages.includes(savedLang)) {
        console.log(`[i18n] Using saved language: ${savedLang}`);
        return savedLang;
    }

    // Detect from browser
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    const langCode = browserLang.split('-')[0].toLowerCase();

    console.log(`[i18n] Browser language: ${browserLang}, detected code: ${langCode}`);
    console.log(`[i18n] All browser languages:`, navigator.languages);

    // Return language if supported, otherwise default to English
    const finalLang = supportedLanguages.includes(langCode) ? langCode : 'en';
    console.log(`[i18n] Final language selection: ${finalLang}`);
    return finalLang;
}

// Load translations from JSON
async function loadTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) throw new Error('Translation file not found');
        translations = await response.json();
        currentLanguage = lang;
        applyTranslations();
        updateHtmlLang();
        return true;
    } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
        // Fallback to English if not already trying English
        if (lang !== 'en') {
            return loadTranslations('en');
        }
        return false;
    }
}

// Apply translations to the page
function applyTranslations() {
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update HTML content (for elements with HTML tags inside)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const translation = getNestedTranslation(key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update meta description
    const metaDesc = document.querySelector('[data-i18n-meta]');
    if (metaDesc) {
        const metaKey = metaDesc.getAttribute('data-i18n-meta');
        const metaTranslation = metaKey ? getNestedTranslation(metaKey) : translations.meta?.description;
        if (metaTranslation) {
            metaDesc.setAttribute('content', metaTranslation);
        }
    }

    // Update document title (skip if <title> already has a data-i18n attribute, which is handled above)
    const titleEl = document.querySelector('title');
    if (!titleEl?.hasAttribute('data-i18n') && translations.meta?.title) {
        document.title = translations.meta.title;
    }
}

// Get nested translation by key (e.g., "hero.title")
function getNestedTranslation(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations);
}

// Update HTML lang attribute
function updateHtmlLang() {
    document.documentElement.setAttribute('lang', currentLanguage);
}

// Change language
async function changeLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
        console.warn(`Language ${lang} not supported, falling back to English`);
        lang = 'en';
    }

    localStorage.setItem('preferredLanguage', lang);
    await loadTranslations(lang);

    // Update the language switcher
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
        switcher.value = lang;
    }

    // Update audio source if the function exists (index.html)
    if (typeof window.updateAudioSource === 'function') {
        window.updateAudioSource();
    }
}

// Initialize i18n on page load
async function initI18n() {
    const preferredLang = detectLanguage();
    await loadTranslations(preferredLang);

    // Set up language switcher
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
        switcher.value = currentLanguage;
        switcher.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
}

// Initialize i18n as early as possible
initI18n();
