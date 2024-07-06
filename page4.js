function shareOnWhatsApp() {
    closeSharingModal();
    // Replace this link with your actual WhatsApp group invite link
    var groupInviteLink = 'https://chat.whatsapp.com/YourGroupInviteLink';
    var foodType = document.getElementById("foodType").value;
    var additionalInfo = document.getElementById("additionalInfo").value;
    var location = getElementById("location").value;
    
    var message = 'Pet food donation details:\nFood Type: ' + foodType +
                  '\nAdditional Info: ' + additionalInfo +
                  '\nLocation: ' + location;
    
    var whatsappLink = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(message) + '&link=' + encodeURIComponent(groupInviteLink);
    window.open(whatsappLink, '_blank');
}
