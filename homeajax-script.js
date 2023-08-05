$(document).ready(function()
{
    $(document).on("submit","#homeForm",function(e)
    {
        e.preventDefault();
        var qualification = $("#qualification").val();
        validtextonly = /^[a-zA-Z]*$/;
        var specification = $("#specification").val();
        var clname = $("#clname").val();
        var date = $("#datep").val();
        var validdate = /^\d{4}-\d{2}-\d{2}$/;
        var look = $("#look").val();
        var role = $("#role").val();
        var experience = $("#experience").val();
        var relocation = $("#relocation").val();
        var place = $("#place").val();

        if(qualification.length  ==0)
        {
            alert("Enter the qualification");
        }
        else if(specification.length==0)
        {
            alert("Enter the specification");
        }
        else if(clname.length ==0)
        {
            alert("Enter the college / Institute name");
        }
        else if(!validdate.test(date))
        {
            alert('Select the date');
        }
        else if(look =="Select")
        {
            alert("select what you looking for");
        }
        else if(role=="Select")
        {
            alert("Select the role what you were looking");
        }
        else if(experience == "Select")
        {
            alert("Select the level of experience");
        }
        else if (relocation == "Select")
        {
            alert("Select the relocation status")
        }
        else if(place.length==0)
        {
            alert('Enter your current location');
        }
        else if(!validtextonly.test(qualification))
        {
            alert('Enter the valid qualification');
        }
        else if(!validtextonly.test(specification))
        {
            alert("Enter the valid specification");
        }
        else if(!validtextonly.test(clname))
        {
            alert('Enter thw valid college/institute name');
        }
        else if(!validtextonly.test(place))
        {
            alert("Enter the valid location");
        }
        else
        {
            $.ajax
            (
                {
                    type :"POST",
                    url: "home.php",
                    data: "qualification="+qualification+"&specification="+specification+"&clname="+clname+"&date="+date+"&look="+look+"&role="+role+"&experience="+experience+"&relocation="+relocation+"&place="+place,
                    success: function(data)
                    {
                        $('#msg').html(data);
                        $('#homeForm').find('input').val('');
                        
                    }
                }
            );
        }
    });
});