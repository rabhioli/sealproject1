const apiKey = "25b5c59ba17b43289a6fef958ae90621";
const baseURL = "https://api.rawg.io/api";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Define the monthNames array
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

// Function to remove html tags from a string
function stripHtmlTags(input) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.body.textContent || "";
}

// Function to fetch games for a given year and month from Api using jQuery AJAX
function fetchGamesForMonth(year, month) {
    // Updating display style of navigation buttons based on the current date
    $('#prevMonth').css('display', (month <= new Date().getMonth() - 1 && year === new Date().getFullYear()) ? 'none' : 'block');
    $('#nextMonth').css('display', (month >= new Date().getMonth() + 1 && year === new Date().getFullYear()) ? 'none' : 'block');

    // Performing the API request to fetch games
    $.ajax({
        url: `${baseURL}/games?dates=${year}-${month + 1}-01,${year}-${month + 1}-30&key=${apiKey}`,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const games = data.results.filter(game => game.background_image);

            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let htmlContent = '';
            for (let i = 1; i <= daysInMonth; i++) {
                let gamesForDay = games.filter(game => new Date(game.released).getDate() === i);

                htmlContent += `
                    <div class="date">
                        <strong>${i}</strong>
                        ${gamesForDay.map(game => `
                            <div class="game" data-id="${game.id}">
                                <img src="${game.background_image}" alt="${game.name} Thumbnail">
                                <div class="game-details">${game.name}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            $('#calendar').html(htmlContent);
            $('#currentMonthYear').text(`${monthNames[month]} ${year}`);
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}

// Event listener for the previous month button
$('#prevMonth').on('click', function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    fetchGamesForMonth(currentYear, currentMonth);
});

// Event listener for the next month button
$('#nextMonth').on('click', function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    fetchGamesForMonth(currentYear, currentMonth);
});

// Event delegation for dynamically created elements
$(document).on('mouseenter', '.game', function () {
    // Code to handle hover over a game title
    // You can add any specific behavior you want when hovering over a game title
    $(this).addClass('hovered'); // Add a class or any other styling
});

$(document).on('mouseleave', '.game', function () {
    // Code to handle mouse leave from a game title
    // You can remove the styles or perform any cleanup
    $(this).removeClass('hovered');
});

// Event listener for clicking on a game
$(document).on('click', '.game', function () {
    const gameId = $(this).data('id');

    // Clear modal content before updating
    $('#gameTitle').text('');
    $('#gameImage').attr('src', '');
    $('.modal-content p strong').text('');
    $('#gameReleaseDate').text('');
    $('#gameRating').text('');
    $('#gamePlatforms').text('');

    // Fetch game details
    $.ajax({
        url: `${baseURL}/games/${gameId}?key=${apiKey}`,
        method: 'GET',
        dataType: 'json',
        success: function (gameDetails) {
            // Update modal content with game details
            $('#gameTitle').text(gameDetails.name);
            $('#gameImage').attr('src', gameDetails.background_image);
            const descriptionElement = $('.modal-content p strong');
            descriptionElement.text(stripHtmlTags(gameDetails.description || "No description available."));
            $('#gameReleaseDate').text(`Release Date: ${gameDetails.released}`);
            $('#gameRating').text(`Rating: ${gameDetails.rating || "N/A"}`);
            
            // Update platforms with proper handling
            const platforms = gameDetails.platforms.map(platform => platform.platform.name).join(', ');
            $('#gamePlatforms').text(`Platforms: ${platforms || "N/A"}`);
            
            $('#gameModal').css('display', 'block');
        },
        error: function (error) {
            console.error('Error fetching game details:', error);
        }
    });
});

// Close modal function
$('.close').on('click', function () {
    $('#gameModal').css('display', 'none');
});

// Event listener for closing modal on window click
$(window).on('click', function (event) {
    if (event.target === document.getElementById('gameModal')) {
        $('#gameModal').css('display', 'none');
    }
});

// Call the initial fetch
fetchGamesForMonth(currentYear, currentMonth);