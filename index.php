
<?php

if (isset($_POST['sendpost'])) {

	$message = $_POST['message'];
	$webhook = $_POST['webhook'];
	$data = ['content' => $message];
	$options = [
		'http' => [
			'method' => 'POST',
			'header' => 'Content-Type: application/json',
			'content' => json_encode($data)
		]
	];

	$context = stream_context_create($options);
	$result = file_get_contents($webhook, false, $context);
}
?>
<html>
			<body>
				<div>
					<main>
					<form method="POST">
							<div>
								<center><h2>Welcome to Discord-Simple by <a href="https://github.com/lRusian">Vuhp</a></h2></center>
							<center>
							<br>
								<table>
								<div class="container">

								  <div class="row">
									<div class="column left">
									  <span class="dot" style="background:#ED594A;"></span>
									  <span class="dot" style="background:#FDD800;"></span>
									  <span class="dot" style="background:#5AC05A;"></span>
									</div>
									<div class="column middle">
									  <input type="text" name="webhook" value="https://discord.com/api/webhooks/97506725164696352/cVVYgGeAzoUTI-WXu4tkQtGgKMzHaB2rlKhECw2ksvBQfh7TM8hkp-gIurd0ZcaIS">
									</div>
									<div class="column right">
									  
									</div>
								  </div>

								  <div class="content">
									<h3>Website Developed by [Vuhp]</h3>
									<div class="row">
									<p><textarea class="col-75" type="text" name="message" placeholder="Write something.."></textarea></p>
									</div>
									<br>
									<p>Download this website by <a href="https://github.com/lRusian/discord-simple">CLICK HERE</a></p>
									  
										<input type="submit" name="sendpost" value="SEND"> </input>

								  </div>
								</div>
								</table>
							<br><br>

							</center>
							</div>
					</form>
					</main>
				</div>
			</body><style>
body {
  font-family: Arial
}

* {
  box-sizing: border-box;
}

/* The browser window */
.container {
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* Container for columns and the top "toolbar" */
.row {
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* Create three unequal columns that floats next to each other */
.column {
  float: left;
}

.left {
  width: 15%;
}

.right {
  width: 10%;
}

.middle {
  width: 75%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Three dots */
.dot {
  margin-top: 4px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

/* Style the input field */
input[type=text] {
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;
}

/* Three bars (hamburger menu) */
.bar {
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
}

/* Page content */
.content {
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

.col-75 {
  float: left;
  width: 100%;
  margin-top: 6px;
}


* {
  box-sizing: border-box;
}

</style>
</html>
