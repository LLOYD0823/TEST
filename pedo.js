document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("wrapper").classList.toggle("toggled");
});

const ctxExpenditure = document.getElementById('expenditureChart').getContext('2d');
const expenditureChart = new Chart(ctxExpenditure, {
    type: 'bar',
    data: {
        labels: ['Italy', 'Australia', 'Spain', 'Japan', 'USA', 'UK', 'Filipino', 'France', 'Germany', 'China', 'Other'],
        datasets: [{
            label: 'Total Trip Expenditure',
            data: [1500000, 1200000, 1000000, 1300000, 1100000, 1250000, 1400000, 1350000, 1150000, 1450000, 1050000],
            backgroundColor: [
                '#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#f77825', '#c9cbcf', '#8bc34a', '#ff9800', '#e91e63', '#9c27b0'
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxDestination = document.getElementById('destinationChart').getContext('2d');
const destinationChart = new Chart(ctxDestination, {
    type: 'bar',
    data: {
        labels: ['Buenavista', 'Jordan', 'Nueva Valencia', 'San Lorenzo', 'Sibunag'],
        datasets: [{
            label: 'Number of Visits',
            data: [800, 750, 950, 900, 850],
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850']
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
