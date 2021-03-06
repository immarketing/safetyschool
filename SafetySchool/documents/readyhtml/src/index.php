<?php
if (! empty ( $_COOKIE ['sid'] )) {
	// check session id in cookies
	session_id ( $_COOKIE ['sid'] );
}

session_start ();

require_once 'classes/Auth.class.php';
require_once './aglibs/agdbg.php'; // как будто идет подключение
require_once 'ajax.php'; // как будто идет подключение

?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="AlGo">


<title>Демонстрационная страница обучения пожарного минимуму</title>

<script>
	var minified = ''; // min.
	document.write('<link href="../css/bootstrap.'+minified+'css" rel="stylesheet">');
	document.write('<link href="../css/bootstrap-treeview.'+minified+'css" rel="stylesheet">');
</script>


<!-- Bootstrap core CSS 
<link href="../css/bootstrap.min.css" rel="stylesheet">-->

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="assets/css/ie10-viewport-bug-workaround.css"
	rel="stylesheet">

<!-- Custom styles for this template -->
<link href="footer-navbar.css" rel="stylesheet">

<!-- Bootstrap treeview core CSS 
<link href="../css/bootstrap-treeview.min.css" rel="stylesheet">-->

<!-- Bootstrap treeview core CSS -->
<link href="../css/algo.css" rel="stylesheet">

<link type="text/css" href="../skin/pink.flag/jplayer.pink.flag.css"
	rel="stylesheet" />

<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Open+Sans+Condensed:300,700&subset=latin,cyrillic'
	rel='stylesheet' type='text/css'>

<script src='https://www.google.com/recaptcha/api.js'></script>
</head>

<body>
      <?php if (Auth\User::isAuthorized()): ?>
	<!-- Fixed navbar -->
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Школа безопасности</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Главная</a></li>
					<li><a href="#about">О нас</a></li>
					<li><a href="#contact">Контакты</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">Dropdown <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li role="separator" class="divider"></li>
							<li class="dropdown-header">Nav header</li>
							<li><a href="#">Separated link</a></li>
							<li><a href="#">One more separated link</a></li>
						</ul></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<div class='container'>

		<div class='row'>
			<div class='col-md-3'>
				<div id="tree">The tree</div>
			</div>
			<div class='col-md-9'>
				<div class='col-md-10'>
					<div id='itemIdHolder'>Пустое место</div>
					<!-- video player -->
					<div id="jp_container_1" class="jp-video " role="application"
						aria-label="media player">
						<div class="jp-type-single">
							<div id="jquery_jplayer_1" class="jp-jplayer"></div>
							<div class="jp-gui">
								<div class="jp-video-play">
									<button class="jp-video-play-icon" role="button" tabindex="0">play</button>
								</div>
								<div class="jp-interface">
									<div class="jp-progress">
										<div class="jp-seek-bar">
											<div class="jp-play-bar"></div>
										</div>
									</div>
									<div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
									<div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
									<div class="jp-details">
										<div class="jp-title" aria-label="title">&nbsp;</div>
									</div>
									<div class="jp-controls-holder">
										<div class="jp-volume-controls">
											<button class="jp-mute" role="button" tabindex="0">mute</button>
											<button class="jp-volume-max" role="button" tabindex="0">max
												volume</button>
											<div class="jp-volume-bar">
												<div class="jp-volume-bar-value"></div>
											</div>
										</div>
										<div class="jp-controls">
											<button class="jp-play" role="button" tabindex="0">play</button>
											<button class="jp-stop" role="button" tabindex="0">stop</button>
										</div>
										<div class="jp-toggles">
											<button class="jp-repeat" role="button" tabindex="0">repeat</button>
											<button class="jp-full-screen" role="button" tabindex="0">full
												screen</button>
										</div>
									</div>
								</div>
							</div>
							<div class="jp-no-solution">
								<span>Update Required</span> To play the media you will need to
								either update your browser to a recent version or update your <a
									href="http://get.adobe.com/flashplayer/" target="_blank">Flash
									plugin</a>.
							</div>
						</div>
					</div>
					<!-- /video player -->
				</div>
				<div class='col-md-2'></div>
			</div>
		</div>
	</div>
	<footer class="footer">
		<div class="container">
			<div class="text-muted inlblock btn btn-primary">Place sticky footer
				content here.</div>
			<div class="text-muted inlblock btn btn-default active">text text
				text</div>
			<div class="text-muted inlblock btn btn-danger">in blk</div>
		</div>
	</footer>

      <?php else: ?>

      <?php require './aglibs/agloginform.php';?>

      <?php endif; ?>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script>
		//var minified = ''; // min.
		window.jQuery
				|| document
						.write('<script src="../js/jquery.'+minified+'js"><\/script>');
		document
				.write('<script src="../js/bootstrap.'+minified+'js"><\/script>');
		document
				.write('<script src="../js/bootstrap-treeview.'+minified+'js"><\/script>');
		document
				.write('<script src="../js/jquery.jplayer.'+minified+'js"><\/script>');
	</script>
	<!--
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/bootstrap-treeview.min.js"></script>
	<script src="../js/jquery.jplayer.min.js"></script>
	-->
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="assets/js/ie10-viewport-bug-workaround.js"></script>
	<script src="test.nodejs.js"></script>

	<script src="./js/ajax-form.js"></script>
</body>
</html>

<?php
?>

