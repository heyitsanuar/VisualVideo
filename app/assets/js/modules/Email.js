import $ from 'jquery';

class Email {
    constructor(){
        this.btnSend = $('#form-send');
        this.message = $('#form-notification');

        this.events();
    }

    events(){
        this.btnSend.click(this.sendEmail.bind(this));
    }
    
    sendEmail(){
        var name = $('#form-name').val();
        var email = $('#form-email').val();
        var message = $('#form-message').val();

        var data = {
            name: name,
            email: email,
            message: message
        }

        var thisPrev = this;

        $.ajax({
            type: 'post',
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',
            url: '/send-email',
            success: function(data){
                thisPrev.message.text(data.message);
            },
            error: function(data){
                thisPrev.message.text(data.message);
            }
        });
    }

}

export default Email;