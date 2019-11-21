
(function ($) {
    "use strict";
    console.log("TESTYAS")
    /*==================================================================
    [ Validate ]*/
    let input = $('.validate-input .input100');

    $('#predict-button').on('click',function(){
        console.log("TEST")
        let check = true;

        for(let i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            let featureValues = []

            for (let i = 1; i <= 5; i++) {
                featureValues.push($(`#feature${i}`).val())
            }

            console.log(featureValues);

            let url = `http://sexybabes666.pythonanywhere.com/api?feature1=${featureValues[0]}&feature2=${featureValues[1]}&feature3=${featureValues[2]}&feature4=${featureValues[3]}&feature5=${featureValues[4]}`

            console.log(url)

            d3.json(url, function(error, data) {
                console.log(data);

                d3.select("#result")
                    .style("display", "block");

                d3.select("#result-text")
                    .html(data["status"])

                d3.select("#result")
                    .on("click", () => {
                        d3.select("#result")
                            .style("display", "none")
                    })
            });

        }
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        let thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        let thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);