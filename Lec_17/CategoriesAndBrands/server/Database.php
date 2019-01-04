  <?php
     require "Databaseconnection.php";

     function CATEGORIES($Value)
     {
          global $con;
          static $count=0;
     $selectquery="Select * from categories";
     $query=mysqli_query($con,$selectquery);
          while($row=mysqli_fetch_array($query))
          {
               $count++;
               $title=$row["Cname"];
               if($Value==0)
               echo "<li>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</li>" ;
               else
               echo "<option value='$count'>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</option>" ;
          }
     }
     function BRANDS($Value)
     {
          global $con;
          static $count=0;
     $selectquery="Select * from brands";
     $query=mysqli_query($con,$selectquery);
          while($row=mysqli_fetch_array($query))
          {
               $count++;
               $title=$row["Bname"];
               if($Value==0)
               echo "<li>" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</li>" ;
               else
               echo "<option value='$count' >" . '<a class="nav-link"  href="#">'.$title. "</a>" . "<br>" . "</option>" ;
          }
     }
     
?>