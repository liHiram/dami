<?php
$callback=$_GET['jsonp_callback'];  
$users = [
	['name'=>'tom','role'=>'admin'],
	['name'=>'jerry','role'=>'user']
];
// jsopn_callback(json_encode($users))
echo $callback.'('. json_encode($users).')';






























