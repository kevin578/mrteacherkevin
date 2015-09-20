
<?php
require_once ("meekrodb.php");


	if (empty($_SESSION["id"])){
		require ("login.php");
	}

	else {

		$rows = DB::query("SELECT * FROM users WHERE username =%s", $_SESSION["id"]);
		$name = $rows[0]["Name"];
		render("profile.php", ['name' => $name]);
	}