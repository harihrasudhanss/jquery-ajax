$(document).ready(function()
{
    $("#fname").on('input',function(e)
    {
        e.preventDefault();
        var fname = $('#fname').val();
        var validfname = /^[a-zA-Z]*$/;
        $('.error').remove();
        if(fname.length==0)
        {
            $("#fname").after('<span class="error">The Feild is Required</span>');
        }
        else if(!validfname. test (fname))
        {
            $("#fname").after('<span class="error">Enter Valid First Name</span>');
        }
        else if(validfname.test(fname))
        {
            $("#fname").after('<span class="error">Done</span>');
        }
    });
    $("#lname").on('input',function(e)
    {
        e.preventDefault();
        var lname = $('#lname').val();
        var validlname = /^[a-zA-Z]*$/;
        $('.error').remove();
        if(lname.length==0)
        {
            $("#lname").after('<span class="error">The Feild is Required</span>');
        }
        else if(!validlname. test(lname))
        {
            $("#lname").after('<span class="error">Enter Valid Last Name</span>');
        }
        else if(validlname. test(lname))
        {
            $("#lname").after('<span class="error">Done</span>');
        }
    });
    $("#phone").on('input',function(e)
    {
        e.preventDefault();
        var phone = $('#phone').val();
        var validphone = /^\d*$/;
        $('.error').remove();
        if(phone.length==0)
        {
            $("#phone").after('<span class="error">The Feild is Required</span>');
        }
        else if(!validphone. test(phone))
        {
            $("#phone").after('<span class="error">Invalid Mobile Number</span>');
        }   
        else if(phone.length!=10)
        {
            $("#phone").after('<span class="error">Enter the Correct Mobile Number</span>');   
        }
        else 
        {
            $("#phone").after('<span class="error">Done</span>'); 
        }
    });
    $("#email").on('input',function(e)
    {
        e.preventDefault();
        var email = $('#email').val();
        var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        $('.error').remove();
        if(!validemail.test(email))
        {
            $("#email").after('<span class="error">Enter Valid Email</span>');
        }
        else
        {
            $("#email").after('<span class="error">Done</span>');
        }
    });
    $("#password").on('input',function(e)
    {
        e.preventDefault();
        var password = $('#password').val();
        var cpassword = $("#cpassword").val();
        $('.error').remove();
        if(password.length ==0)
        {
            $("#password").after('<span class="error">Enter Your Password<br></span>');
        }
        else if(password.length<8)
        {
            $("#password").after('<span class="error">Password Should Be More Than 8 Digits/Characters</span>');
        }
        else if(password.length > 15)
        {
            $("#password").after('<span class="error">Password Should Be Less Than 15 Digits/Characters</span>');
        }
        else if(password != cpassword)
        {
            $("#password").after('<span class="error"> Password & Confirm Password is Not Matching</span>');
            $("#cpassword").after('<span class="error"> Password & Confirm Password is Not Matching</span>');
        } 
        else 
        {
            $("#password").after('<span class="error">done</span><br>');
        }
    });
    $("#cpassword").on('input',function(e)
    {
        e.preventDefault();
        var password = $('#password').val();
        var cpassword = $('#cpassword').val();
        $('.error').remove();
        if(cpassword.length==0)
        {
            $("#cpassword").after('<span class="error">The Feild is Required</span>');
        }
        else if(cpassword!=password)
        {
            $("#cpassword").after('<span class="error">Password & Confirm Password is Not Matching</span>');
        }
    });
    $("#showpassword").on('click',function()
    {
        var passinput = $("#password");
        if(passinput.attr('type')=='password')
        {
            passinput.attr('type','text');
        }
        else
        {
            passinput.attr('type','password')
        }
    });
    $("#showcpassword").on('click',function()
    {
        var passinput = $("#cpassword");
        if(passinput.attr('type')=='password')
        {
            passinput.attr('type','text');
        }
        else
        {
            passinput.attr('type','password')
        }
    });
    $(document).on('submit','#registrationForm',function(e)
    {
        // passing value
        var sfname = $("#fname").val();
        var svalidfname = /^[a-zA-Z]*$/;
        var slname =$("#lname").val();
        var svalidlname = /^[a-zA-Z]*$/;
        var sphone = $("#phone").val();
        var svalidphone = /^\d*$/;
        var semail =$("#email").val();
        var svalidemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var spassword =$("#password").val();
        var scpassword =$("#cpassword").val();
        e.preventDefault();
        if(sfname.length==0)
        {
            alert("Enter the first Name");
        }
        else if(!svalidfname.test(sfname))
        {
            alert("Enter The Valid First Name");
        }
        else if(slname.length==0)
        {
            alert("Enter The Last Name");
        }
        else if(!svalidlname.test(slname))
        {
            alert("Enter The Valid Last Name");
        }
        else if(sphone.length==0)
        {
            alert("Enter The Phone Number");
        }
        else if(sphone.length!=10)
        {
            alert("Enter The Valid Phone Number");
        }
        else if(!svalidphone.test(sphone))
        {
            alert("Enter The Valid Phone Number");
        }
        else if(semail.length==0)
        {
            alert("Enter The E-Mail");
        }
        else if(!svalidemail.test(semail))
        {
            alert("Enter The Valid E-Mail");
        }
        else if(spassword.length == 0)
        {
            alert("Enter The Phone Number");
        }
        else if(spassword.length <8)
        {
            alert("Password Should Be More Than 8 ");
        }
        else if(spassword.length >15)
        {
            alert("Password Should Be Less Than 15 Digit/Character")
        }
        else if(scpassword != scpassword)
        {
            alert("Password & Confirm Password is Not Matching");
        }
        else
        {
            $.ajax
            (
                {
                    type :"POST",
                    url: "php-script.php",
                    data: "fname="+sfname+"&lname="+slname+"&phone="+sphone+"&email="+semail+"&password="+spassword+"&cpassword="+scpassword,
                    success: function(data)
                    {
                        window.location = "home.html";
                        $('#msg').html(data);
                        $('#registrationForm').find('input').val('');
                    }
                }
            );
        }
    });
});