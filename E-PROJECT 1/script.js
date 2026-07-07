const unitData = {
    Length: { units: ['Inches', 'Feet', 'Yards', 'Miles', 'Millimeters', 'Meters', 'Kilometers'], base: 'Meters', theme: 'var(--c-len)', toBase: { 'Inches': 0.0254, 'Feet': 0.3048, 'Yards': 0.9144, 'Miles': 1609.34, 'Millimeters': 0.001, 'Meters': 1, 'Kilometers': 1000 } },
    Area: { units: ['Square Millimeters', 'Square Inches', 'Square Feet', 'Square Yards', 'Acres', 'Sq Meters', 'Hectares', 'Square Kilometers', 'Square Miles'], base: 'Square Meters', theme: 'var(--c-area)', toBase: { 'Square Millimeters': 0.000001, 'Square Inches': 0.00064516, 'Square Feet': 0.092903, 'Square Yards': 0.836127, 'Acres': 4046.86, 'Square Meters': 1, 'Hectares': 10000, 'Square Kilometers': 1000000, 'Square Miles': 2589988 } },
    Volume: { units: ['Fluid Ounces (US)', 'Gallons (US)', 'Cubic Feet', 'Cubic Yards', 'Cubic Meters', 'Milliliters', 'Liters'], base: 'Liters', theme: 'var(--c-vol)', toBase: { 'Fluid Ounces (US)': 0.0295735, 'Gallons (US)': 3.78541, 'Cubic Feet': 28.3168, 'Cubic Yards': 764.555, 'Cubic Meters': 1000, 'Milliliters': 0.001, 'Liters': 1 } },
    Mass: { units: ['Ounces', 'Pounds', 'Grams', 'Kilograms', 'Short Tons', 'Metric Tons'], base: 'Kilograms', theme: 'var(--c-mass)', toBase: { 'Ounces': 0.0283495, 'Pounds': 0.453592, 'Grams': 0.001, 'Kilograms': 1, 'Short Tons': 907.184, 'Metric Tons': 1000 } },
    Temperature: { units: ['Celsius', 'Fahrenheit', 'Kelvin'], type: 'special', theme: 'var(--c-temp)' },
    Speed: { units: ['Miles per hour', 'Kilometers per hour', 'Meters per second', 'Knots'], base: 'Meters per second', theme: 'var(--c-speed)', toBase: { 'Miles per hour': 0.44704, 'Kilometers per hour': 0.277778, 'Meters per second': 1, 'Knots': 0.514444 } },
    Time: { units: ['Seconds', 'Minutes', 'Hours', 'Days', 'Years'], base: 'Seconds', theme: 'var(--c-time)', toBase: { 'Seconds': 1, 'Minutes': 60, 'Hours': 3600, 'Days': 86400, 'Years': 31557600 } },
    Pressure: { units: ['Pascals', 'PSI', 'Bar', 'Atm'], base: 'Pascals', theme: 'var(--c-pressure)', toBase: { 'Pascals': 1, 'PSI': 6894.76, 'Bar': 100000, 'Atm': 101325 } },
    Energy: { units: ['Joules', 'Kilojoules', 'Calories (kcal)', 'BTU', 'kWh'], base: 'Joules', theme: 'var(--c-energy)', toBase: { 'Joules': 1, 'Kilojoules': 1000, 'Calories (kcal)': 4184, 'BTU': 1055.06, 'kWh': 3600000 } },
    Currency: {
        units: [
            'US Dollar (USD)', 'Pakistani Rupee (PKR)', 'British Pound (GBP)', 'Omani Rial (OMR)',
            'Euro (EUR)', 'Japanese Yen (JPY)', 'Canadian Dollar (CAD)', 'Australian Dollar (AUD)',
            'Swiss Franc (CHF)', 'Chinese Yuan (CNY)', 'Indian Rupee (INR)', 'Saudi Riyal (SAR)',
            'UAE Dirham (AED)', 'Kuwaiti Dinar (KWD)', 'Bahraini Dinar (BHD)', 'Qatari Riyal (QAR)',
            'Turkish Lira (TRY)', 'Russian Ruble (RUB)', 'South African Rand (ZAR)', 'Singapore Dollar (SGD)',
            'Hong Kong Dollar (HKD)', 'New Zealand Dollar (NZD)', 'Mexican Peso (MXN)', 'Philippine Peso (PHP)',
            'Indonesian Rupiah (IDR)', 'Malaysian Ringgit (MYR)', 'Thai Baht (THB)', 'Bulgarian Lev (BGN)'
        ],
        base: 'US Dollar (USD)',
        theme: 'var(--c-currency)',
        toBase: {
            'US Dollar (USD)': 1,
            'Pakistani Rupee (PKR)': 278.5,
            'British Pound (GBP)': 0.79,
            'Omani Rial (OMR)': 0.385,
            'Euro (EUR)': 0.92,
            'Japanese Yen (JPY)': 151.5,
            'Canadian Dollar (CAD)': 1.36,
            'Australian Dollar (AUD)': 1.52,
            'Swiss Franc (CHF)': 0.90,
            'Chinese Yuan (CNY)': 7.23,
            'Indian Rupee (INR)': 83.4,
            'Saudi Riyal (SAR)': 3.75,
            'UAE Dirham (AED)': 3.67,
            'Kuwaiti Dinar (KWD)': 0.31,
            'Bahraini Dinar (BHD)': 0.38,
            'Qatari Riyal (QAR)': 3.64,
            'Turkish Lira (TRY)': 32.2,
            'Russian Ruble (RUB)': 92.5,
            'South African Rand (ZAR)': 18.6,
            'Singapore Dollar (SGD)': 1.35,
            'Hong Kong Dollar (HKD)': 7.82,
            'New Zealand Dollar (NZD)': 1.64,
            'Mexican Peso (MXN)': 16.9,
            'Philippine Peso (PHP)': 56.5,
            'Indonesian Rupiah (IDR)': 16200,
            'Malaysian Ringgit (MYR)': 4.76,
            'Thai Baht (THB)': 36.5,
            'Bulgarian Lev (BGN)': 1.80
        }
    }
};

let currentType = 'Length';

function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    let navId = 'nav-' + sectionId;
    if (sectionId.startsWith('app-')) { navId = 'nav-apps'; }
    const navLink = document.getElementById(navId);
    if (navLink) navLink.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleHomeSelectChange(value) { if (value) { setConverterType(value); navigateTo('converter'); } }
function handleConverterTypeChange(value) { if (value) { setConverterType(value); } }

function setConverterType(type) {
    // ADDED GUARD FOR ROBUSTNESS
    if (!type || !unitData[type]) return;

    currentType = type;
    document.getElementById('conv-title').innerText = type + ' Converter';
    const fromSelect = document.getElementById('unit-from');
    const toSelect = document.getElementById('unit-to');
    fromSelect.innerHTML = ''; toSelect.innerHTML = '';
    const units = unitData[type].units;
    units.forEach(unit => { fromSelect.add(new Option(unit, unit)); toSelect.add(new Option(unit, unit)); });
    toSelect.selectedIndex = 1;
    document.getElementById('input-from').value = '';
    document.getElementById('input-to').value = '';
    document.getElementById('result-text').innerText = '0';
    document.getElementById('conversion-result').style.background = unitData[type].theme;
}

function performConversion(direction) {
    // ADDED GUARD FOR ROBUSTNESS
    if (!unitData[currentType]) return;

    const inputFrom = document.getElementById('input-from');
    const inputTo = document.getElementById('input-to');
    const unitFrom = document.getElementById('unit-from').value;
    const unitTo = document.getElementById('unit-to').value;
    let result;
    if (currentType === 'Temperature') {
        const val = direction === 'forward' ? parseFloat(inputFrom.value) : parseFloat(inputTo.value);
        if (isNaN(val)) return;
        if (direction === 'forward') {
            result = convertTemperature(val, unitFrom, unitTo);
            inputTo.value = parseFloat(result.toFixed(4));
        } else {
            result = convertTemperature(val, unitTo, unitFrom);
            inputFrom.value = parseFloat(result.toFixed(4));
        }
        document.getElementById('result-text').innerText = parseFloat(result.toFixed(4));
        document.getElementById('result-unit').innerText = direction === 'forward' ? unitTo : unitFrom;
        return;
    }

    const factors = unitData[currentType].toBase;
    const fromFactor = factors[unitFrom];
    const toFactor = factors[unitTo];

    if (currentType === 'Currency') {
        // CURRENCY LOGIC FIX:
        // The data stores rates as "1 Base Unit = X Target Units" (e.g., 1 USD = 278.5 PKR).
        // Metric logic assumes "1 Source Unit = X Base Units".
        // Therefore, we must invert the multiplication/division logic for Currency.

        if (direction === 'forward') {
            const val = parseFloat(inputFrom.value);
            if (isNaN(val)) return;
            // (Value * RateTo) / RateFrom
            // e.g. 1 USD -> PKR: (1 * 278.5) / 1 = 278.5
            result = (val * toFactor) / fromFactor;
            inputTo.value = parseFloat(result.toFixed(4));
        } else {
            const val = parseFloat(inputTo.value);
            if (isNaN(val)) return;
            // e.g. 278.5 PKR -> USD: (278.5 * 1) / 278.5 = 1
            result = (val * fromFactor) / toFactor;
            inputFrom.value = parseFloat(result.toFixed(4));
        }
    } else {
        // ORIGINAL METRIC LOGIC PRESERVED
        if (direction === 'forward') {
            const val = parseFloat(inputFrom.value);
            if (isNaN(val)) return;
            result = (val * fromFactor) / toFactor;
            inputTo.value = parseFloat(result.toFixed(6));
        } else {
            const val = parseFloat(inputTo.value);
            if (isNaN(val)) return;
            result = (val * toFactor) / fromFactor;
            inputFrom.value = parseFloat(result.toFixed(6));
        }
    }

    document.getElementById('result-text').innerText = parseFloat(result.toFixed(4)); // Use 4 for currency consistency, or 6 if metric. Used 4 here as safe middle ground for display.
    // Better: Update precision based on type
    const precision = currentType === 'Currency' ? 4 : 6;
    document.getElementById('result-text').innerText = parseFloat(result.toFixed(precision));

    document.getElementById('result-unit').innerText = direction === 'forward' ? unitTo : unitFrom;
}

function convertTemperature(value, from, to) {
    if (from === to) return value;
    let celsius = from === 'Celsius' ? value : from === 'Fahrenheit' ? (value - 32) * 5 / 9 : value - 273.15;
    if (to === 'Celsius') return celsius;
    if (to === 'Fahrenheit') return (celsius * 9 / 5) + 32;
    return celsius + 273.15;
}

/* --- DOWNLOAD SIMULATION LOGIC --- */
function triggerDownload(platform) {
    const link = document.createElement('a');

    // Dummy file content
    const fileContent = "Metric Converter App Installer\n\nThank you for downloading " + platform.toUpperCase() + " version.\n\n(This is a demo file for web showcase).";

    // Create blob
    const blob = new Blob([fileContent], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    // Determine filename
    const filename = platform === 'android' ? 'MetricConverter-Pro-Android.apk' : 'MetricConverter-Pro-iOS.ipa';

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);

    // Trigger click
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show toast notification
    showToast("Download started for " + platform.toUpperCase());
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}

/* --- CHARTS LOGIC --- */
function createChartCard(category, data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const card = document.createElement('div');
    card.className = 'chart-card';
    card.style.borderRadius = "24px";
    card.style.overflow = "hidden";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.setAttribute('data-category', category);
    card.setAttribute('data-units', JSON.stringify(data.units));

    let tableHtml = '';
    if (category === 'Temperature') {
        tableHtml = `<table class="chart-table"><thead><tr><th>From</th><th>To</th><th>Formula</th></tr></thead><tbody><tr><td>Fahrenheit</td><td>Celsius</td><td>(°F - 32) ×5/9</td></tr><tr><td>Celsius</td><td>Fahrenheit</td><td>(°C × 9/5) + 32</td></tr></tbody></table>`;
    } else if (category === 'Currency') {
        tableHtml = `<p style="text-align:center; color: #7f8c8d; padding: 1rem;">Use Converter tool for live calculations.</p>`;
    } else {
        const units = data.units.slice(0, 5);
        tableHtml = `<table class="chart-table"><thead><tr><th>Unit</th><th>To ${data.base}</th><th>Factor</th></tr></thead><tbody>`;
        units.forEach(u => { if (u !== data.base) tableHtml += `<tr><td>${u}</td><td>${data.base}</td><td>${data.toBase[u]}</td></tr>`; });
        tableHtml += `</tbody></table>`;
    }
    card.innerHTML = `<div class="chart-card-header" style="background:${data.theme}"><h3>${category}</h3></div><div class="chart-body">${tableHtml}</div>`;
    container.appendChild(card);
}

function renderCharts() {
    // Render for Dedicated Chart Section
    const container = document.getElementById('charts-container');
    if (container) {
        container.innerHTML = '';
        for (const [category, data] of Object.entries(unitData)) {
            createChartCard(category, data, 'charts-container');
        }
    }

    // Render for Home Page Section
    const homeContainer = document.getElementById('charts-container-home');
    if (homeContainer) {
        homeContainer.innerHTML = '';
        for (const [category, data] of Object.entries(unitData)) {
            createChartCard(category, data, 'charts-container-home');
        }
    }
}

function filterCharts() {
    const query = document.getElementById('chart-search').value.toLowerCase();
    if (!query && !document.getElementById('chart-search')) return;
    const container = document.getElementById('charts-container');
    if (container) {
        container.querySelectorAll('.chart-card').forEach(card => {
            const cat = card.getAttribute('data-category');
            const units = card.getAttribute('data-units');
            if (cat.toLowerCase().includes(query) || units.toLowerCase().includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// New function for Home Page Search
function filterChartsHome() {
    const query = document.getElementById('chart-search-home').value.toLowerCase();
    if (!query) return;
    const container = document.getElementById('charts-container-home');
    if (container) {
        container.querySelectorAll('.chart-card').forEach(card => {
            const cat = card.getAttribute('data-category');
            const units = card.getAttribute('data-units');
            if (cat.toLowerCase().includes(query) || units.toLowerCase().includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

/* --- FAQ LOGIC (CORRECTED) --- */
function toggleFaq(el) {
    const card = el.parentElement;
    const body = card.querySelector('.faq-body');
    const toggle = card.querySelector('.faq-toggle');
    const isActive = card.classList.contains('active');

    // 1. Close all other FAQs to ensure accordion behavior
    // Note: This will close FAQs on both Home page and FAQ page if both are visible
    // But since only one section is visible at a time via display:none, this works fine.
    document.querySelectorAll('.faq-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
            c.querySelector('.faq-toggle').innerText = '+';
            c.querySelector('.faq-body').style.maxHeight = null;
        }
    });

    // 2. Toggle clicked FAQ
    if (!isActive) {
        // If it was closed, open it
        card.classList.add('active');
        toggle.innerText = '-';
        body.style.maxHeight = body.scrollHeight + "px";
    } else {
        // If it was open, close it
        card.classList.remove('active');
        toggle.innerText = '+';
        body.style.maxHeight = null;
    }
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

window.onscroll = function () {
    const btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
};

window.onload = function () { navigateTo('home'); renderCharts(); }