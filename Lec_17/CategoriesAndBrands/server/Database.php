  <?php
     require "Databaseconnection.php";

     function CATEGORIES($Value)
     {
          global $con;
     $selectquery="Select * from categories";
     $query=mysqli_query($con,$selectquery);
          while($row=mysqli_fetch_array($query))
          {
               $title=$row["Cname"];
               if($Value==0)
               echo "<li>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</li>" ;
               else
               echo "<option>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</option>" ;
          }
     }
     function BRANDS($Value)
     {
          global $con;
     $selectquery="Select * from brands";
     $query=mysqli_query($con,$selectquery);
          while($row=mysqli_fetch_array($query))
          {
               $title=$row["Bname"];
               if($Value==0)
               echo "<li>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</li>" ;
               else
               echo "<option>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</option>" ;
          }
     }
     
?>