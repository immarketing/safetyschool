
<form class="form-signin ajax" method="post" action="./ajax.php">
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

	<div class="alert alert-info" style="margin-top: 15px;width:300px">
		<p>
			Нет данных для входа? <a href="/register.php">Заключите договор на обучение.</a>
	
	</div>
	<div class="g-recaptcha"
		data-sitekey="6LceChYTAAAAACSg0__mc6xS1BbKOVFNG-5r3AAt"></div>
		
	<button class="btn btn-large btn-primary" style="margin-top: 15px;width:300px" type="submit">Вход</button>
</form>

<?php
