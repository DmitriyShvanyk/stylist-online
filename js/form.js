$('document').ready(function() {
    $('#form_ipad').validate({

        rules: {

            fname_ipad: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_ipad: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname_ipad": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_ipad": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-ipad',

                success: function(data) {

					/*if ($('#input-radio-1a').is(':checked'){						
						$(location).attr('href', 'google.com');
					} else {
						$(location).attr('href', 'yandex.ru');
					}*/
				
                    /*$.fancybox({
                        "content": $("#thnks").clone()
                    });				

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);*/

                    $("#form_ipad").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form_ipad_2').validate({

        rules: {

            fname_ipad_2: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_ipad_2: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname_ipad_2": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_ipad_2": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-ipad-2',

                success: function(data) {

					/*if ($('#input-radio-1a').is(':checked'){						
						$(location).attr('href', 'google.com');
					} else {
						$(location).attr('href', 'yandex.ru');
					}*/
				
                    /*$.fancybox({
                        "content": $("#thnks").clone()
                    });				

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);*/

                    $("#form_ipad_2").clearForm();
                }
            })
        }

    });
});



$('document').ready(function() {
    $('#form_ipad_3').validate({

        rules: {

            fname_ipad_3: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_ipad_3: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname_ipad_3": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_ipad_3": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-ipad-3',

                success: function(data) {				

                    $("#form_ipad_3").clearForm();
                }
            })
        }

    });
});

$('document').ready(function() {
    $('#form_ipad_4').validate({

        rules: {

            fname_ipad_4: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_ipad_4: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname_ipad_4": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_ipad_4": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-ipad-4',

                success: function(data) {				

                    $("#form_ipad_4").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form_write_us').validate({

        rules: {

            fname_write_us: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_write_us: {
                required: true,
                email: true
            },
			
			msg_write_us: {
                required: true,
                minlength: 10,
                maxlength: 300
            }
        },

        messages: {

            "fname_write_us": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_write_us": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            },
			
			"msg_write_us": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }
			
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-write-us',

                success: function(data) {

					
                    $.fancybox({
                        "content": $("#thnks2").clone()
                    });				

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form_write_us").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form_ask').validate({

        rules: {

            fname_ask: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
			
            email_ask: {
                required: true,
                email: true
            },
			
			msg_ask: {
                required: true,
                minlength: 10,
                maxlength: 300
            }
        },

        messages: {

            "fname_ask": {
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },

            "email_ask": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            },
			
			"msg_ask": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }
			
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-ask',

                success: function(data) {

					
                    $.fancybox({
                        "content": $("#thnks2").clone()
                    });				

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form_ask").clearForm();
                }
            })
        }

    });
});