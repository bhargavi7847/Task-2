// Set up bar chart data and configuration for project progress
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar', // Bar chart for project progress
    data: {
        labels: ['Project Alpha', 'Project Beta', 'Project Gamma'], // Added 'Project Gamma'
        datasets: [{
            label: 'Project Completion',
            data: [60, 100, 10], // Example completion percentages, with new data for 'Project Gamma'
            backgroundColor: '#007bff', // Blue color for the bars
            borderColor: '#0056b3', // Darker blue for the borders
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100 // Max value for the y-axis
            }
        },
        plugins: {
            // Adding data labels on top of each bar
            datalabels: {
                anchor: 'end',
                align: 'top',
                font: {
                    weight: 'bold',
                    size: 14
                },
                color: '#fff', // Text color for the data labels
                formatter: function(value) {
                    return value + '%'; // Display percentage
                }
            }
        }
    }
});

// Set up pie chart data and configuration for overall project budget breakdown
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie', // Pie chart for budget breakdown
    data: {
        labels: ['Design', 'Development', 'Testing', 'Deployment',], // Project phases
        datasets: [{
            label: 'Budget Allocation',
            data: [20, 40, 30, 10], // Budget percentage for each phase
            backgroundColor: ['#ff9800', '#66bb6a', '#e57373', '#42a5f5',], // Colors for each phase
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

