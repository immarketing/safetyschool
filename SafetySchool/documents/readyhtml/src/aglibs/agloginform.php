
<form class="form-signin ajax" method="post" action="index.php?XDEBUG_SESSION_START=<?php echo $_REQUEST['XDEBUG_SESSION_START'];?>&KEY=<?php echo $_REQUEST['KEY'];?>">
	<div class="main-error alert alert-error hide"></div>

	<h2 class="form-signin-heading">Введите ваш логин и пароль</h2>
	<input name="username" type="text" class="input-block-level"
		placeholder="Логин" autofocus> <input name="password"
		type="password" class="input-block-level" placeholder="Пароль"> 
		<!-- <label
		class="checkbox"> 
		<input name="remember-me" type="checkbox"
		value="remember-me" checked> Remember me
	</label>  -->
	<input type="hidden" name="act" value="login">

<input type="hidden" name="XDEBUG_SESSION_START" value="<?php echo $_REQUEST['XDEBUG_SESSION_START'];?>">
<input type="hidden" name="KEY" value="<?php echo $_REQUEST['KEY'];?>">	

	<div class="alert alert-info" style="margin-top: 15px;width:300px">
		<p>
			Нет данных для входа? <a href="/register.php">Заключите договор на обучение.</a>
	
	</div>
	<div class="g-recaptcha"
		data-sitekey="6LceChYTAAAAACSg0__mc6xS1BbKOVFNG-5r3AAt"></div>
		
	<button class="btn btn-large btn-primary" style="margin-top: 15px;width:300px" type="submit">Вход</button>
</form>

<?php
// XDEBUG_SESSION_START=ECLIPSE_DBGP_14537961555322
// http://sfty.local/p/index.php?XDEBUG_SESSION_START=ECLIPSE_DBGP&KEY=14537965235811
/*<input type="hidden" name="XDEBUG_SESSION_START" value="<?php echo $_GET['XDEBUG_SESSION_START'];?>">
<input type="hidden" name="KEY" value="<?php echo $_GET['KEY'];?>">*/
/*
 * 
<input type="hidden" name="XDEBUG_SESSION_START" value="<?php echo $_REQUEST['XDEBUG_SESSION_START'];?>">
<input type="hidden" name="XDEBUG_SESSION" value="<?php echo $_REQUEST['XDEBUG_SESSION'];?>">
<input type="hidden" name="KEY" value="<?php echo $_REQUEST['KEY'];?>">
<input type="hidden" name="XDEBUG_SESSION" value="<?php echo $_COOKIE['XDEBUG_SESSION'];?>">

<form class="form-signin ajax" method="post" action="index.php">

<form class="form-signin ajax" method="post" action="index.php?XDEBUG_SESSION_START=<?php echo $_REQUEST['XDEBUG_SESSION_START'];?>&KEY=<?php echo $_REQUEST['KEY'];?>">

*/
