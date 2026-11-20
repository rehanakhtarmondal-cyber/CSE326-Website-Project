// Football Hub - JavaScript

// Sample points table data
var leagueData = {
    premier: [
        ["Manchester City", 38, 28, 7, 3, 91],
        ["Arsenal", 38, 26, 6, 6, 84],
        ["Liverpool", 38, 24, 10, 4, 82],
        ["Aston Villa", 38, 20, 8, 10, 68],
        ["Tottenham", 38, 20, 6, 12, 66]
    ],

    laliga: [
        ["Real Madrid", 38, 29, 8, 1, 95],
        ["Barcelona", 38, 26, 7, 5, 85],
        ["Girona", 38, 25, 6, 7, 81],
        ["Atletico Madrid", 38, 24, 4, 10, 76],
        ["Athletic Bilbao", 38, 19, 6, 13, 63]
    ],

    bundesliga: [
        ["Bayer Leverkusen", 34, 28, 6, 0, 90],
        ["Stuttgart", 34, 23, 4, 7, 73],
        ["Bayern Munich", 34, 23, 3, 8, 72],
        ["RB Leipzig", 34, 19, 8, 7, 65],
        ["Borussia Dortmund", 34, 18, 9, 7, 63]
    ],

    seriea: [
        ["Inter Milan", 38, 29, 7, 2, 94],
        ["AC Milan", 38, 22, 9, 7, 75],
        ["Juventus", 38, 19, 14, 5, 71],
        ["Atalanta", 38, 21, 6, 11, 69],
        ["Bologna", 38, 18, 14, 6, 68]
    ]
};


// Function to update the points table
function updateTable() {

    var selectedLeague = document.getElementById("league-select").value;

    var teams = leagueData[selectedLeague];

    var tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    for (var i = 0; i < teams.length; i++) {

        var row = "<tr>";

        row += "<td>" + (i + 1) + "</td>";

        for (var j = 0; j < teams[i].length; j++) {
            row += "<td>" + teams[i][j] + "</td>";
        }

        row += "</tr>";

        tableBody.innerHTML += row;
    }
}


// Change table when a different league is selected
document.getElementById("league-select").addEventListener("change", updateTable);


// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    document.getElementById("form-message").textContent =
        "Thank you, " + name + "! Your message has been received.";

    document.getElementById("contact-form").reset();

});


// Display current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();


// Load the points table when the website opens
updateTable();
