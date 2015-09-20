<?php



if ($_SERVER["REQUEST_METHOD"] == "GET"){

        // else render form
        require("loginForm.php");
    }
    // else if user reached page via POST (as by submitting a form via POST)


else if ($_SERVER["REQUEST_METHOD"] == "POST"){
        
        // query database for user
        $rows = DB::query("SELECT * FROM students WHERE username = %s", $_POST["mtkusername"]);
        // if we found user, check password
        if (count($rows) == 1)
        {
            // first (and only) row
            $row = $rows[0];
            // compare hash of user's input against hash that's in database
            if ($_POST["mtkpassword"] == $row["password"])
            {
                // remember that user's now logged in by storing user's ID in session
                
                $_SESSION["id"] = $row["username"];
                
                require ("loginProfile.php");
        }
        else{
        echo("Invalid username and/or password.");
    }
    }
}
?>