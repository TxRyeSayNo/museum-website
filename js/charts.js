// Pie Chart - Topic Distribution
const topicCtx = document.getElementById('topicChart');
if (topicCtx) {
    new Chart(topicCtx, {
        type: 'doughnut',
        data: {
            labels: ['Hùng Vương', 'Phong Kiến', 'Bắc Thuộc', 'Hiện Đại', 'Thuộc Pháp'],
            datasets: [{
                data: [25, 30, 20, 10, 15],
                backgroundColor: [
                    '#8B4513',
                    '#E74C3C',
                    '#2C3E50',
                    '#F39C12',
                    '#34495E'
                ],
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Bar Chart - Weekly Activity
const weeklyCtx = document.getElementById('weeklyChart');
if (weeklyCtx) {
    new Chart(weeklyCtx, {
        type: 'bar',
        data: {
            labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
            datasets: [
                {
                    label: 'Giờ học',
                    data: [2, 1.5, 3, 2.5, 4, 3.5, 2],
                    backgroundColor: '#d32f2f',
                    borderRadius: 4,
                    borderSkipped: false
                },
                {
                    label: 'Bài học',
                    data: [3, 2, 4, 3, 5, 4, 2],
                    backgroundColor: '#ffd54f',
                    borderRadius: 4,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 8,
                    grid: {
                        color: 'rgba(0,0,0,0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#666'
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#666'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#666',
                        usePointStyle: true,
                        padding: 15
                    }
                }
            }
        }
    });
}

// Line Chart - Score Trend
const trendCtx = document.getElementById('trendChart');
if (trendCtx) {
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
            datasets: [{
                label: 'Điểm số',
                data: [75, 82, 88, 95],
                borderColor: '#d32f2f',
                backgroundColor: 'rgba(211, 47, 47, 0.05)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#ffd54f',
                pointBorderColor: '#d32f2f',
                pointBorderWidth: 2,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0,0,0,0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#666'
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#666'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#666',
                        usePointStyle: true,
                        padding: 15
                    }
                }
            }
        }
    });
}