$(function(){
			$('#tt').datagrid({
				url: 'datagrid_data.json',
				width:  $(document).width(),
				height: $(document).height(),
				fitColumns: true,
				nowrap:true,
				singleSelect:true,
				idField:"itemid",
				showFooter:true,
				pagination:true,
				rownumbers:true,
				fit:true,
				columns:[[
					{field:'UserName',title:'用户名',width:30,align:'center'},
					{field:'PWD',title:'密码',width:120,align:'center'},
					{field:'E-Mail',title:'E-mail',width:80,align:'center'},
					{field:'age',title:'年龄',width:13,align:'center'},
					{field:'sex',title:'性别',width:250,align:'center'},
					{field:'id',title:'ID',width:60,align:'center'}
				]],
				toolbar:[{
					text:'新增',
					iconCls:'icon-add',
					handler:function(){
						$.messager.confirm("标题","新增?",function(b){
								if(b){
									$.messager.alert("标题","新增！");
									/*var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);*/
								}
							});
					}
				},{
					text:'修改',
					iconCls:'icon-edit',
					handler:function(){
						$.messager.confirm("标题","修改?",function(b){
								if(b){
									$.messager.alert("标题","修改！");
									/*var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);*/
								}
							});
					}
				},{
					text:'删除',
					iconCls:'icon-cancel',
					handler:function(){
						$.messager.confirm("标题","删除?",function(b){
								if(b){
									$.messager.alert("标题","删除！");
									/*var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);*/
								}
							});
					}
				},{
					text:'查询',
					iconCls:'icon-ok',
					handler:function(){
						$.messager.confirm("标题","查询?",function(b){
								if(b){
									$.messager.alert("标题","删除！");
									/*var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);*/
								}
							});
					}
				},{
					text:'Excel 导出',
					iconCls:'icon-excel',
					handler:function(){
						$.messager.confirm("标题","Excel 导出?",function(b){
							if(b)
							 $.messager.alert("标题","Excel 导出!");
						});
					}
				}]
			});
			
			
	});