require([
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function($, mvc) {
    var submitTokens = mvc.Components.get('submitted');
    
    submitTokens.on('change:value', function() {
        var hecUrl = submitTokens.get('hec_url');
        var hecToken = submitTokens.get('hec_token');
        var eventData = submitTokens.get('event_data');
        
        if (hecUrl && hecToken && eventData) {
            $.ajax({
                url: hecUrl,
                type: 'POST',
                headers: {
                    'Authorization': 'Splunk ' + hecToken
                },
                data: eventData,
                success: function(response) {
                    $('#result').html('<div class="alert alert-success">Data sent successfully!</div>');
                },
                error: function(xhr, status, error) {
                    $('#result').html('<div class="alert alert-danger">Error sending data: ' + error + '</div>');
                }
            });
        }
    });
});
