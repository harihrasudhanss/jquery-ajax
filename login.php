<html lang="en">
    <html>

<?php 
include_once("database.php");
$db =$conn;
$lemail = $_POST['email'];
$lpassword = $_POST['password'];
if(!empty($lemail) || !empty($lpassword))
{
    $fetch = "SELECT email,password FROM user WHERE email='$lemail' && password='$lpassword' ;";
    $fetch_check = mysqli_query($db,$fetch);
    if (mysqli_num_rows($fetch_check)>0)
    {
        while ($row = mysqli_fetch_assoc($fetch_check)){
            $femail = $row['email'];
            $fpassword= $row['password'];
            
        }
    }
    if($lemail != $femail)
    {
        echo "email is not found";
    }
    elseif($lpassword != $fpassword)
    {
        echo "enter the correct password";
    }
    else
    {
        session_start();
        $_SESSION['email'] = $femail;
        if(isset($_SESSION["email"])){
        echo "<script>window.location = 'home.html';</script>";};
        
    }
}

?>
</html>