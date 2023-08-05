<?php 
include_once("database.php");
session_start();
$email = $_SESSION['email'];
if(isset($email))
{
    $sql = "SELECT * FROM user where email = '$email';";
    $result = mysqli_query($conn,$sql);
    $userarray = array();
    while ($row= mysqli_fetch_assoc($result))
    {
        $userarray[]=$row;
    }
    $sql = "SELECT * FROM details where email = '$email';";
    $result = mysqli_query($conn,$sql);
    $detailsarray = array();
    while ($row= mysqli_fetch_assoc($result))
    {
        $detailsarray[]=$row;
    }
    echo json_encode($userarray);
    echo json_encode($detailsarray);
    $fp = fopen('user.json','w');
    fwrite($fp, json_encode($userarray));
    fwrite($fp, json_encode($detailsarray));
    fclose($fp);

    

}
?>