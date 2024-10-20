$(document).ready(function () {

    // 1. DOM Manipulation - Add a To-Do item
    $('#todo-form').submit(function (event) {
        event.preventDefault(); // Prevent page reload
        let task = $('#todo-input').val().trim();
        if (task) {
            $('#todo-list').append(`<li>${task} <button class="delete-task">Delete</button></li>`);
            $('#todo-input').val(''); // Clear input field
        }
    });

    // 2. Event Handling - Delete a task
    $(document).on('click', '.delete-task', function () {
        $(this).parent().remove(); // Delete task
    });

    // 3. AJAX Requests - Fetch weather data
    $('#weather-form').submit(function (event) {
        event.preventDefault();
        let city = $('#city-input').val().trim();
        if (city) {
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_api_key&units=metric`,
                method: 'GET',
                success: function (response) {
                    $('#weather-info').html(`
                        <h3>${response.name}</h3>
                        <p>Temperature: ${response.main.temp}°C</p>
                        <p>Weather: ${response.weather[0].description}</p>
                    `);
                },
                error: function () {
                    alert('Could not fetch weather data. Please try again.');
                }
            });
        }
    });

    // 4. Effects and Animations - Toggle and Fade elements
    $('#toggle-btn').click(function () {
        $('#todo-list').toggle(500); // Toggle the visibility of the to-do list
    });

    $('#fade-btn').click(function () {
        $('#weather-info').fadeToggle(500); // Fade in/out the weather info
    });

    // 5. Form Validation - Validate input before adding task
    $('#todo-form').submit(function (event) {
        let task = $('#todo-input').val().trim();
        if (!task) {
            alert('Please enter a task!');
            event.preventDefault();
        }
    });

    // 6. jQuery Plugin - Sortable list using jQuery UI (optional plugin)
    $('#todo-list').sortable(); // Make the to-do list sortable using jQuery UI
});
