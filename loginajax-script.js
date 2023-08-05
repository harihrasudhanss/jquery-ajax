$(document).ready(function()
{
    $(document).on("submit","#loginForm",function(e)
    {
        e.preventDefault();
        var user = $("#lmail").val();
        var password = $("#lpassword").val();
        var lvalidemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(user.length==0)
        {
            alert("enter the email");
        }
        else if(!lvalidemail.test(user))
        {
            alert("enter the valid email");
        }
        else if(password.length==0)
        {
            alert("enter the password");
        }
        else
        {
            $.ajax
            (
                {
                    type :"POST",
                    url: "login.php",
                    data: "email="+user+"&password="+password,
                    success: function(data)
                    {
                        
                        $('#msg').html(data);
                       var output = $('#loginForm').find('input').val('');
                    }
                }
            );
        }
    });
});