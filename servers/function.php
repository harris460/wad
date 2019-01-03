<?php
require db_server.php;

function getcatadmin()
{
    global $con;
    $getQuery="select * from category";
    $getRes=mysqli_query($con,$getQuery);
    while($row=mysqli_fetch_assoc($getRes))
    {
        $id=$row['cat_id'];
        $title=$row['cat_title'];
        echo"<option>$title</option>option>";
    }

}
function getbrandadmin()
{
    global $con;
    $getQuery="select * from brand";
    $getRes=mysqli_query($con,$getQuery);
    while($row=mysqli_fetch_assoc($getRes))
    {
        $id=$row['brand_id'];
        $title=$row['brand_title'];
        echo"<option>$title</option>option>";
    }

}

function getcat()
{
    global $con;
    $getQuery="select * from category";
    $getRes=mysqli_query($con,$getQuery);
    while($row=mysqli_fetch_assoc($getRes))
    {
        $id=$row['cat_id'];
        $title=$row['cat_title'];
        echo"<li>
                    <a class='nav-link' href='#'>$title</a>
            </li>";
    }

}
function getbrand()
{
    global $con;
    $getQuery="select * from brand";
    $getRes=mysqli_query($con,$getQuery);
    while($row=mysqli_fetch_assoc($getRes))
    {
        $id=$row['brand_id'];
        $title=$row['brand_title'];
        echo"<li>
                    <a class='nav-link' href='#'>$title</a>
            </li>";
    }

}
