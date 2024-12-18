// Set up chart
const ctx = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctx, {
  type: 'bar', // Choose the chart type (bar, line, pie, etc.)
  data: {
    labels: [], // Categories (Food, Travel, etc.)
    datasets: [{
      label: 'Spending',
      data: [], // Amounts spent in each category
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Handle form submission (add new expense)
document.getElementById('finance-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const date = document.getElementById('date').value;

  // Add new data to the chart (this is basic, but you can improve it)
  spendingChart.data.labels.push(category);
  spendingChart.data.datasets[0].data.push(amount);

  // Update chart to show the new data
  spendingChart.update();

  // Reset the form after submission
  document.getElementById('finance-form').reset();
});

// Filter by category
document.getElementById('category-filter').addEventListener('change', function() {
  const filterValue = this.value;

  if (filterValue === 'all') {
    spendingChart.data.labels = ['Food', 'Travel', 'Entertainment']; // Just an example
    spendingChart.data.datasets[0].data = [100, 200, 150]; // Example amounts
  } else {
    // Filter data based on selected category
    spendingChart.data.labels = [filterValue];
    spendingChart.data.datasets[0].data = [100]; // Example amount for the selected category
  }

  spendingChart.update();
});
