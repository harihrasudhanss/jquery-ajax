<?php 

include_once("database.php");
$db =$conn;
$qualification = $_POST['qualification'];
$specification = $_POST['specification'];
$clname = $_POST["clname"];
$date = $_POST['date'];
$look = $_POST['look'];
$role = $_POST['role'];
$experience = $_POST['experience'];
$relocation = $_POST['relocation'];
$place = $_POST['place'];
session_start();
$email = $_SESSION['email'];
if(isset($email))
{
    if(!empty($qualification) && !empty($specification) && !empty($clname) && !empty($place))
    {
        $update = "UPDATE `details` SET `qualification`= '$qualification',`specification`= '$specification',`college`='$clname',`date`='$date',`look`='$look',`role`='$role',`experience`='$experience' ,`relocation`='$relocation',`place`='$place' WHERE email = '$email';";
        $updatedetails = $db->query($update);
        echo  mysqli_connect_error();
        if($updatedetails)
        {
            echo "submited";
        }
        else
        {
            echo  mysqli_connect_error();
        }
    }
    else
    {
        echo "<script>alert('all feild are required');</script>";
    }
}
else
{
    echo "<script>window.location = 'index.html';</script>";
}

?>