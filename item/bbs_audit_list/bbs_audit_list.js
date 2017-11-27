$(function(){
			$('#tt').datagrid({
				url: 'datagrid_data.json',
				width:  $(document).width(),
				height: $(document).height(),
				fitColumns: true,
				nowrap:true,
				singleSelect:true,
				idField:"id",
				showFooter:true,
				pagination:true,
				rownumbers:true,
				fit:true,
				columns:[[
					{field:'img',title:'图片',width:30,formatter:function(value,rowData,rowIndex){
							return "<img src='"+value+"' width='50px' height='50px'/>"
						}},
					{field:'title',title:'标题',width:120,align:'center'},
					{field:'text',title:'内容',width:80,align:'center'},
					{field:'date_time',title:'时间 ',width:13,align:'center'},
					{field:'id',title:'id',width:60,align:'center'}
				]],
				toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
					
						//添加
						$(".goods_add").show().dialog({
								title:"添加",
								modal:true,
								shadow:true,
								closable:true,
								width:250,
								height:210,
								buttons:[{
											text:'提交',
											iconCls:'icon-ok',
											handler:function(){
												$.messager.confirm("提交","提交内容",function(b){
													$("#tt").datagrid('appendRow',
													{"productid":"FI-SW-01","unitcost":10.00,"status":"P","listprice":36.50,"attr1":"Large","itemid":"EST-1"});
													$(".goods_add").dialog("close");
												});
											}
										},{
											text:'取消',
											iconCls:'icon-cancel',
											handler:function(){
												$(".goods_add").dialog("close");
											}
										}]
							});
					}
				},{
					text:'修改',
					iconCls:'icon-cut',
					handler:function(){
						var selectedRow = $('#tt').datagrid('getSelected');
						if(!selectedRow){
							return;	
						}
						$(".goods_add input:eq(0)").val(selectedRow.itemid);
						$(".goods_add input:eq(1)").val(selectedRow.productid);
						$(".goods_add input:eq(2)").val(selectedRow.listprice);
						$(".goods_add input:eq(3)").val(selectedRow.unitcost);
						$(".goods_add input:eq(4)").val(selectedRow.attr1);
						$(".goods_add").show().dialog({
								title:"添加",
								modal:true,
								shadow:true,
								closable:true,
								width:250,
								height:210,
								buttons:[{
											text:'提交',
											iconCls:'icon-ok',
											handler:function(){
												$.messager.confirm("提交","提交内容",function(b){
													$(".goods_add").dialog("close");
												});
											}
										},{
											text:'取消',
											iconCls:'icon-cancel',
											handler:function(){
												$(".goods_add").dialog("close");
											}
										}]
							});
					}
				},'-',{
					text:'删除',
					iconCls:'icon-cancel',
					handler:function(){
						$.messager.confirm("标题","删除?",function(b){
								if(b){
									var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);
								}
							});
						
						
					}
				},{
					text:'通过审核',
					iconCls:'icon-ok',
					handler:function(){
						$.messager.confirm("标题","通过审核?",function(b){
							if(b)
							 $.messager.alert("标题","通过审核!");
						});
					}
				}]
			});
			
			
	});