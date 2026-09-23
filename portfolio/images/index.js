function isError(value) {
    return value === 'Error';
}

function handleError() {
    screen.value = 'Error';
    clearScreen();
}