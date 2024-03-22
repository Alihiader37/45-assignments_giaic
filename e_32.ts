// Current usernames list
let current_users: string[] = ["john_doe84", "sarah_smith22", "coding_ninja007", "tech_guru99", "web_dev_pro22"];

// New usernames list
let new_users: string[] = ["john_doe84", "sarah_smith22", "new_user123", "coding_ninja007", "JOHN"];

// Function to check if a username already exists (case-insensitive)
function isUsernameTaken(username: string): boolean {
    return current_users.some(existingUser => existingUser.toLowerCase() === username.toLowerCase());
}

// Loop through new_users list and check for uniqueness
new_users.forEach(username => {
    if (isUsernameTaken(username)) {
        console.log(`Username "${username}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Username "${username}" is available.`);
    }
});
