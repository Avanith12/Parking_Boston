// ===============================
// REAL DATA FROM YOUR NOTEBOOK
// ===============================

const monthLabels = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const monthlyTotals = [
    2135, 4722, 9739, 32372, 46791, 78789, 35501, 0, 0, 0, 0, 0
];

const monthlyDelta = [
    0,
    2587,
    5017,
    22633,
    14419,
    31998,
    -43288,
    -35501,
    0,
    0,
    0,
    0
];

const seasonLabels = ["Winter", "Spring", "Summer"];
const seasonAverages = [5.993881118881118, 51.8076923076923, 66.6025641025641];

const topZonesLabels = [
    "North Charles between Boylston and Beacon",
    "East Newbury between Arlington and Berkeley",
    "South Newbury between Mass and Charlesgate E",
    "East Newbury between Clarendon and Dartmouth",
    "North Boylston between Clarendon and Berkeley",
    "West Newbury between Berkeley and Clarendon",
    "West Newbury between Arlington and Berkeley",
    "East Newbury between Berkeley and Clarendon",
    "North Boylston between Arlington and Charles",
    "South Boylston between Berkeley and Arlington"
];

const topZonesValues = [3795, 3308, 3135, 3071, 2941, 2901, 2828, 2762, 2724, 2683];

const bottomZonesLabels = [
    "North Cummington between Blanford and Hinsda",
    "North St between Mass and Symphony",
    "South Brookline between Park Dr and Kilmarnoc",
    "South Westland between Henenway and Mass.",
    "South Kneeland between Monsignor Shea Road and",
    "South Commonwealth between Hinsdale and Bland",
    "South Summer between Melcher and West Side",
    "East Cambridge between Court and Sudbury",
    "West Trinity between Garage and Stuart",
    "West Arlington between Beacon and Marlborough"
];

const bottomZonesValues = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];

const top5Trend = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "North Charles between Boylston and Beacon",
            data: [147, 456, 602, 719, 714, 841, 316]
        },
        {
            label: "East Newbury between Arlington and Berkeley",
            data: [138, 289, 600, 640, 632, 703, 306]
        },
        {
            label: "South Newbury between Mass and Charlesgate E",
            data: [0, 0, 4, 540, 825, 1289, 477]
        },
        {
            label: "East Newbury between Clarendon and Dartmouth",
            data: [119, 340, 457, 502, 558, 773, 322]
        },
        {
            label: "North Boylston between Clarendon and Berkeley",
            data: [104, 248, 470, 529, 605, 687, 298]
        }
    ]
};

const peakMonthLabels = ["January", "April", "May", "June", "July"];
const peakMonthCounts = [3, 39, 38, 421, 71];

const totalTransactions = 210044;
const top10Transactions = 30148;
const otherTransactions = totalTransactions - top10Transactions;

// ===============================
// CHART STYLING
// ===============================

const monoPalette = [
    "#ffffff",
    "#d9d9d9",
    "#bdbdbd",
    "#9c9c9c",
    "#7d7d7d",
    "#5f5f5f"
];

Chart.defaults.color = "#b8b8b8";
Chart.defaults.font.family = "Arial, Helvetica, sans-serif";
Chart.defaults.borderColor = "#262626";

const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: "index",
        intersect: false
    },
    plugins: {
        legend: {
            labels: {
                color: "#f0f0f0",
                boxWidth: 14
            }
        },
        tooltip: {
            backgroundColor: "#111",
            borderColor: "#333",
            borderWidth: 1,
            titleColor: "#fff",
            bodyColor: "#e0e0e0"
        }
    },
    scales: {
        x: {
            ticks: {
                color: "#b8b8b8",
                maxRotation: 45,
                minRotation: 45
            },
            grid: {
                color: "#1b1b1b"
            }
        },
        y: {
            ticks: {
                color: "#b8b8b8"
            },
            grid: {
                color: "#1b1b1b"
            }
        }
    }
};

// ===============================
// 1. MONTHLY TOTALS
// ===============================

new Chart(document.getElementById("monthlyChart"), {
    type: "line",
    data: {
        labels: monthLabels,
        datasets: [{
            label: "Monthly transactions",
            data: monthlyTotals,
            borderColor: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.08)",
            fill: true,
            tension: 0.25,
            pointRadius: 3,
            pointHoverRadius: 5
        }]
    },
    options: commonOptions
});

// ===============================
// 2. MONTH-TO-MONTH CHANGE
// ===============================

new Chart(document.getElementById("deltaChart"), {
    type: "bar",
    data: {
        labels: monthLabels,
        datasets: [{
            label: "Monthly change",
            data: monthlyDelta,
            backgroundColor: monthlyDelta.map(v => v >= 0 ? "#d9d9d9" : "#5f5f5f"),
            borderColor: "#ffffff",
            borderWidth: 1
        }]
    },
    options: commonOptions
});

// ===============================
// 3. SEASONAL AVERAGES
// ===============================

new Chart(document.getElementById("seasonChart"), {
    type: "bar",
    data: {
        labels: seasonLabels,
        datasets: [{
            label: "Average transactions per zone per month",
            data: seasonAverages,
            backgroundColor: ["#ffffff", "#a8a8a8", "#5f5f5f"],
            borderColor: "#ffffff",
            borderWidth: 1
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            x: {
                ticks: { color: "#b8b8b8" },
                grid: { color: "#1b1b1b" }
            },
            y: {
                ticks: { color: "#b8b8b8" },
                grid: { color: "#1b1b1b" }
            }
        }
    }
});

// ===============================
// 4. TOP 10 ZONES
// ===============================

new Chart(document.getElementById("topZonesChart"), {
    type: "bar",
    data: {
        labels: topZonesLabels,
        datasets: [{
            label: "Yearly total",
            data: topZonesValues,
            backgroundColor: "#d9d9d9",
            borderColor: "#ffffff",
            borderWidth: 1
        }]
    },
    options: {
        ...commonOptions,
        indexAxis: "y",
        scales: {
            x: {
                ticks: { color: "#b8b8b8" },
                grid: { color: "#1b1b1b" }
            },
            y: {
                ticks: { color: "#b8b8b8" },
                grid: { display: false }
            }
        }
    }
});

// ===============================
// 5. BOTTOM 10 ZONES
// ===============================

new Chart(document.getElementById("bottomZonesChart"), {
    type: "bar",
    data: {
        labels: bottomZonesLabels,
        datasets: [{
            label: "Yearly total",
            data: bottomZonesValues,
            backgroundColor: "#7d7d7d",
            borderColor: "#ffffff",
            borderWidth: 1
        }]
    },
    options: {
        ...commonOptions,
        indexAxis: "y",
        scales: {
            x: {
                ticks: { color: "#b8b8b8" },
                grid: { color: "#1b1b1b" }
            },
            y: {
                ticks: { color: "#b8b8b8" },
                grid: { display: false }
            }
        }
    }
});

// ===============================
// 6. TOP 5 TREND LINES
// ===============================

new Chart(document.getElementById("top5TrendChart"), {
    type: "line",
    data: {
        labels: top5Trend.labels,
        datasets: top5Trend.datasets.map((d, i) => ({
            ...d,
            borderColor: monoPalette[i],
            backgroundColor: monoPalette[i],
            tension: 0.25,
            pointRadius: 2.5,
            pointHoverRadius: 4,
            fill: false
        }))
    },
    options: commonOptions
});

// ===============================
// 7. PEAK MONTH COUNTS
// ===============================

new Chart(document.getElementById("peakMonthChart"), {
    type: "bar",
    data: {
        labels: peakMonthLabels,
        datasets: [{
            label: "Number of zones peaking in this month",
            data: peakMonthCounts,
            backgroundColor: "#bdbdbd",
            borderColor: "#ffffff",
            borderWidth: 1
        }]
    },
    options: commonOptions
});

// ===============================
// 8. SHARE OF ACTIVITY
// ===============================

new Chart(document.getElementById("shareChart"), {
    type: "doughnut",
    data: {
        labels: ["Top 10 zones", "All other zones"],
        datasets: [{
            data: [top10Transactions, otherTransactions],
            backgroundColor: ["#ffffff", "#5f5f5f"],
            borderColor: "#000000",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "#f0f0f0"
                }
            },
            tooltip: {
                backgroundColor: "#111",
                borderColor: "#333",
                borderWidth: 1,
                titleColor: "#fff",
                bodyColor: "#e0e0e0",
                callbacks: {
                    label: function (context) {
                        const value = context.raw;
                        const pct = ((value / totalTransactions) * 100).toFixed(2);
                        return `${context.label}: ${value.toLocaleString()} (${pct}%)`;
                    }
                }
            }
        },
        cutout: "62%"
    }
});

// ===============================
// LEAFLET MAP
// Illustrative only: no lat/long in source data
// ===============================

const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: false
}).setView([42.3495, -71.0836], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const points = [
    {
        name: "North Charles between Boylston and Beacon",
        coords: [42.3534, -71.0777],
        total: 3795
    },
    {
        name: "East Newbury between Arlington and Berkeley",
        coords: [42.3500, -71.0765],
        total: 3308
    },
    {
        name: "South Newbury between Mass and Charlesgate E",
        coords: [42.3490, -71.0887],
        total: 3135
    },
    {
        name: "East Newbury between Clarendon and Dartmouth",
        coords: [42.3497, -71.0808],
        total: 3071
    },
    {
        name: "North Boylston between Clarendon and Berkeley",
        coords: [42.3518, -71.0802],
        total: 2941
    }
];

points.forEach((p) => {
    const radius = Math.max(8, p.total / 180);
    L.circleMarker(p.coords, {
        radius,
        color: "#ffffff",
        weight: 1.2,
        fillColor: "#d9d9d9",
        fillOpacity: 0.55
    })
        .addTo(map)
        .bindPopup(`<strong>${p.name}</strong><br>Total transactions: ${p.total.toLocaleString()}`);
});

// ===============================
// SCROLL FADE-IN
// ===============================

const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

faders.forEach((el) => observer.observe(el));