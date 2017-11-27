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
					{field:'img',title:'图片',width:30,formatter:function(value,rowData,rowIndex){
							return "<img src='"+value+"' width='50px' height='50px'/>"
						}},
					{field:'price',title:'价格',width:120,align:'center'},
					{field:'status',title:'状态',width:80,align:'center'},
					{field:'color',title:'颜色',width:13,align:'center',formatter:function(value,rowData,rowIndex){
							return "<div style='background-color:"+value+";width:20px; height:20px;'></div>"
						}},
					{field:'size',title:'大小',width:250,align:'center'},
					{field:'itemid',title:'itemid',width:60,align:'center'}
				]],
				toolbar:[{
					text:'退贷',
					iconCls:'icon-back',
					handler:function(){
						//添加
						$.messager.confirm("标题","为选择的商品退贷?",function(b){
								if(b){
									/*var rows = $('#tt').datagrid("getSelected");
									var index = $('#tt').datagrid('getRowIndex',rows);
									$('#tt').datagrid('deleteRow',index);*/
									$.messager.alert("标题","退贷测试！");
								}
							});
					}
				},'-',{
					text:'送贷',
					iconCls:'icon-ok',
					handler:function(){
						$.messager.confirm("标题","为选择的商品送贷?",function(b){
								if(b){
									$.messager.alert("标题","送贷测试！");
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
						$.messager.confirm("标题","删除?",function(b){
							if(b)
							 $.messager.alert("标题","Excel 导出!");
						});
					}
				}]
			});
			
			
	});