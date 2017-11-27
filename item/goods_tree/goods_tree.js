$(function(){
	//tree 树
	
	var selectNode=null;
	$('#tt').tree({
		onlyLeafCheck:true,
		onClick:function(node){
			$("#easy_id").html(node.id);
			$("#easy_title").html(node.text);
		},
		onContextMenu:function(e,node){
			e.preventDefault();
			$('.class_type_tree_contextMenu').menu('show', {
				left: e.pageX,
				top: e.pageY
			});
			selectNode=node;
		}
	});
	//树 右键操作
	$('.class_type_tree_contextMenu').find(".class_type_tree_add").bind('click',function(){
					$(".add_class_type").show().dialog({
								modal:true,
								shadow:true,
								width:250,
								height:115,
								closable:true,
								title:"修改分类",
								buttons:[{
										text:'提交',
										iconCls:'icon-ok',
										handler:function(){
											var nodes = [{
															"id":13,
															"text":$(".type_class").val()
														}];
											$('#tt').tree('append', {
												parent:selectNode.target,
												data:nodes
											});	
											$(".add_class_type").dialog("close");
											$(".type_class").val("");
										}
									},{
										text:'取消',
										iconCls:'icon-cancel',
										handler:function(){
											$(".add_class_type").dialog("close");
										}
								  }]
							});
					
				}).end().find(".class_type_tree_edit").bind('click',function(event){
					$(".type_class").val("");
					var node=$('#tt').tree("getSelected");
					$(".type_class").val(node.text);
					$(".add_class_type").show().dialog({
								modal:true,
								shadow:true,
								width:250,
								height:115,
								closable:true,
								title:"修改分类",
								buttons:[{
										text:'提交',
										iconCls:'icon-ok',
										handler:function(){
												//selectNode.text=$(".type_class").val();
												var node=$('#tt').tree("getSelected");
												//var a=i;
												if(node){
													 node.text=$(".type_class").val();
												}
												 $('#tt').tree('update',node);
												
												$(".add_class_type").dialog("close");
												$(".type_class").val("");
											}
									},{
										text:'取消',
										iconCls:'icon-cancel',
										handler:function(){
											$(".add_class_type").dialog("close");
										}
								  }]
							});
					
				}).end().find(".class_type_tree_remove").bind('click',function(){
					$.messager.alert("标题",selectNode.text+"remove");
					$('#tt').tree('remove',selectNode.target);
				}).end().find(".class_type_tree_addmessage").bind('click',function(){
						$.messager.alert("标题","添加详情!!");
				});
	//改变大小自适应
	$(".class_type_main").panel({
			onResize:function(widths,heights){
				$(".class_type_main").layout("resize");
			}
		});
	//品牌操作
	$(".class_type_list").panel({
		  	fit: true,
			cls:'panel_css',
			headerCls:'panel_css',
			tools:[{
			//tools:[{
				text:"添加品牌",
				iconCls:'icon-add',
				handler:function(){
						//alert("添加品牌");
						$(".add_class_brand").show().dialog({
								modal:true,
								shadow:true,
								width:300,
								height:150,
								closable:true,
								title:"添加品牌",
								buttons:[{
										text:'提交',
										iconCls:'icon-ok',
										handler:function(){
											$.messager.confirm("提交","提交内容",function(b){
													if(b){
													//$(".class_type_list ul").append("<li><img src='"+$(".add_class_brand").val()+"'/></li>");
													$(".add_class_brand").dialog("close");	
													}
												});
											}
									},{
										text:'取消',
										iconCls:'icon-cancel',
										handler:function(){
											$(".add_class_brand").dialog("close");
									}
								  }]
							});
					}
			  },{
				iconCls:'icon-cancel',
				handler:function(){
					if($(".class_type_list .ping").length==0){
						$.messager.alert("标题","请鼠标点中品牌选择上品牌!");
						return;
					}
					$.messager.confirm("标题","删除品牌!",function(b){
							if(b)
								$(".class_type_list .ping").remove();
						});
				}
			  }]
		});
	
	$(".class_type_list ul li").live('mouseover',function(){
									$(this).addClass("select");
								})
								.live('mouseout',function(){
									$(this).removeClass("select");
								})
								.live('click',function(){
									$(this).siblings().removeClass("ping");
									$(this).addClass("ping");
								});
});