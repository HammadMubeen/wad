<?php
		
		if(isset($_POST["button"]))
        {
        $P_TITLE=$_POST["pro_title"];
        $P_CAT=$_POST["pro_cat"];
        $P_BRAND=$_POST["pro_brand"];
        $P_PRICE=$_POST["pro_price"];
        $P_DESC=$_POST["pro_desc"];
        $P_KEYWORDS=$_POST["pro_kw"];
        require "../server/Databaseconnection.php";
        $insertquery= "insert into products (Ptitle,Pcat,Pbrand,Pprice,Pdesc,Pkeywords) value('$P_TITLE','$P_CAT','$P_BRAND','$P_PRICE','$P_DESC','$P_KEYWORDS')";	
        $query=mysqli_query($con,$insertquery);
    }
?>