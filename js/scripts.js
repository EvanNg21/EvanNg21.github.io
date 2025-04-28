function copyEmailToClipboard() {
    const email = 'evanwng21@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard!');
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
}