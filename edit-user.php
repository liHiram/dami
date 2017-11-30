<?php 
//添加一个cors响应头
header('Access-Control-Allow-Origin:http://localhost:8000');
header('Access-Control-Allow-Methods','POST,GET');
header('Access-Control-Allow-Headers','Content-Type');

$users = [
	['name'=>'tom','role'=>'admin'],
	['name'=>'jerry','role'=>'user']
];

//update或add
$action=$_GET['action'];
$user=json_decode(file_get_contents('php://input'),true);
if ($action=='add'){
	try {
	array_push($users,$user);
	echo json_encode(['success'=>true,'data'=>$users]);
}catch(Exception $e){
	echo json_encode(['success'=>false]);
}
}else {//如果更新
	try {
	for ($i=0; $i < count($users); $i++) { 
		if ($users[$i]['name']==$user['name']){
			//更新
			$users[$i]['name'] = $user;
			exit(json_encode(['success'=>true,'data'=>$users]));
		}
	}
	echo json_encode(['success'=>false]);
}catch(Exception $e){
	echo json_encode(['success'=>false]);
}
}

// array_push($users,$_POST);































