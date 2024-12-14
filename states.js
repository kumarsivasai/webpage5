// js/states.js

// List of US States
const STATES = [
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"
];

// Function to Populate a Select Element with States
function populateStateDropdown(selectElementId, defaultOption = "Select a State") {
    const select = document.getElementById(selectElementId);
    if (!select) {
        console.warn(`Element with ID '${selectElementId}' not found.`);
        return;
    }

    // Clear existing options
    select.innerHTML = '';

    // Add default disabled option
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = defaultOption;
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    select.appendChild(defaultOpt);

    // Add state options
    STATES.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });
}

// Optionally, you can expose STATES if needed elsewhere
// window.STATES = STATES;