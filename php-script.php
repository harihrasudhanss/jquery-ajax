<?php

include_once("database.php");
$db = $conn;
define('tableName', 'user');
$userData = $_POST;
registerUser($db, $userData);
function registerUser($db, $userData) 
{
   $firstName      = $userData['fname'];
   $lastName       = $userData['lname'];
   $phone          = $userData['phone'];
   $email       = $userData['email'];
   $password = $userData['password'];
   $cpassword = $userData['cpassword'];
   if(!empty($firstName) && !empty($lastName) && !empty($phone) && !empty($email) && !empty($password))
   {
      if($cpassword === $password) 
      {
         $query = "INSERT INTO ". tableName;
         $query .= " (firstName, lastName, phone, email, password) ";
         $query .= "VALUES ('$firstName', '$lastName', '$phone', '$email', '$password')";
         $execute = $db->query($query);
         echo $db->error;
         if($execute) 
         {
            echo "registered sucessfully";
            session_start();
            $_SESSION['email']=$email;
            $details = "INSERT into details(email) values('$email');";
            $donedetails = $db->query($details);
            echo $db->error;
            if($donedetails)
            {
               echo "registered done";
            }
         }
      } 
      else
      {
         echo "Wrong Confirm password";
      }
   } 
   else 
   {
      echo "All Fields are required";
   }
}