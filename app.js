// Email JS

(function() {
    emailjs.init("UpGo5HVgblR06Ep-b");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const serviceID = 'service_01onb0n'; 
    const templateID = 'template_zm2deyn';
    
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        popup("Email envoyé avec succès à Florence.")
    }, (err) => {
        alert('L\'envoi de l\'email a échoué!\r\n Response:\n ' + JSON.stringify(err));
    });
    
    document.getElementById('contact-form').reset();
    
});

// Télechargement CV

function downloadCV() {
    const link = document.createElement('a');

    link.href = 'assets/CV/CV.pdf';
    link.download = 'CV_Florence_Baillargeat.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Téléchargement Compétences

function downloadCompt() {
    const link = document.createElement('a');

    link.href = 'assets/Competences/Port-Compt.pdf';
    link.download = 'C.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}