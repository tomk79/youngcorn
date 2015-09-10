window.cont = new (function(){

	this.init = function(){
		/**
		 * initialize
		 */
		main.init(function(){
			main.it79.fnc({}, [
				function(it1, data){
					console.log('setup env...');
					setTimeout(function(){
						it1.next(data);
					}, 10);
				},
				function(it1, data){
					// Parse Query string parameters
					data.projectIdx = main.php.intval($.url(window.location.href).param('projectIdx'));
					console.log( data );
					it1.next(data);
				} ,
				function(it1, data){
					// プロジェクト情報を取得
					main.socket.send('getProject', {'projectIdx': data.projectIdx}, function(result){
						// console.log( result );
						data.projectInfo = result.projectInfo;
						data.config = result.config;
						data.path_homedir = result.path_homedir;
						it1.next(data);
					});
				} ,
				function(it1, data){
					// プロジェクト情報を描画
					// console.log(row);
					var html =
						twig({data: document.getElementById('template-projectInfo').innerHTML})
						.render(data)
					;
					document.querySelector('.cont_project_info').innerHTML = html;
					it1.next(data);
				} ,
				function(it1, data){
					console.log('Started!');
					console.log(data);
					it1.next(data);
				}
			]);
		});
	}

})();
