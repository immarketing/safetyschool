<?php
function ____setDBGCOOKIE($http_only = false, $days = 7) {
	$sid = session_id ();
	
	$expire = time () + $days * 24 * 3600;
	$domain = ""; // default domain
	$secure = false;
	$path = "/";
	if ($_GET['XDEBUG_SESSION_START']) {
		//$cookie = setcookie("XDEBUG_SESSION_START", $_REQUEST['XDEBUG_SESSION_START'], $expire, $path, $domain, $secure, $http_only);
		//$cookie = setcookie("XDEBUG_SESSION", $_REQUEST['XDEBUG_SESSION'], $expire, $path, $domain, $secure, $http_only);
		//$cookie = setcookie("KEY", $_REQUEST['KEY'], $expire, $path, $domain, $secure, $http_only);
	} else {
		//$cookie = setcookie("XDEBUG_SESSION_START", $_COOKIE['XDEBUG_SESSION_START'], $expire, $path, $domain, $secure, $http_only);
		//$cookie = setcookie("XDEBUG_SESSION", $_COOKIE['XDEBUG_SESSION'], $expire, $path, $domain, $secure, $http_only);
		//$cookie = setcookie("KEY", $_COOKIE['KEY'], $expire, $path, $domain, $secure, $http_only);
		
	}
	
}
____setDBGCOOKIE();