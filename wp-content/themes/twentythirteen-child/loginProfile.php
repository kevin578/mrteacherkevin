
<?php
require_once ("meekrodb.php");

	if (empty($_SESSION["id"])){
		require ("login.php");
		echo "session is empty";
	}

	else {

		$rows = DB::query("SELECT * FROM students WHERE username =%s", $_SESSION["id"]);
		$name = $rows[0]["Name"];
		render("profileForm.php", ['name' => $name]);
		echo "sesson is set";
	}