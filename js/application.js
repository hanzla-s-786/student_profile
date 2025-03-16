function downloadChallan() {
    fetch('/api/generate-challan', {  // Change this URL based on your backend route
        method: 'GET',
        headers: {
            'Accept': 'application/pdf'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch challan');
            }
            return response.blob();
        })
        .then(blob => {
            // Create a URL for the downloaded file
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Challan.pdf';  // File name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Error downloading challan:', error);
            alert('Error downloading challan. Please try again.');
        });
}