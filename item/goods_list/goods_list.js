$(function(){
			$('#tt').datagrid({
				url: 'datagrid_data.json',
				width:  $(document).width(),
				height: $(document).height(),
				fitColumns: true,
				nowrap:true,
				singleSelect:true,
				idField:"itemid",
				pagination:true,
				rownumbers:true,
				fit:true,
				columns:[[
					{field:'img',title:'图片',width:30,editor:{type:'combobox',options:{required:true}},formatter:function(value,rowData,rowIndex){return "<img src='"+value+"' width='50px' height='50px'/>";}},
					{field:'price',title:'价格',width:120,align:'center'},
					{field:'status',title:'状态',width:80,align:'center'},
					{field:'color',title:'颜色',width:13,align:'center',formatter:function(value,rowData,rowIndex){
							return "<div style='background-color:"+value+";width:20px; height:20px;'></div>"
						}},
					{field:'size',title:'大小',width:250,align:'center'},
					{field:'itemid',title:'itemid',width:60,align:'center'}
				]],
				toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
					
						//添加
						$(".goods_add").show().dialog({
								title:"添加商品",
								modal:true,
								maximizable:true,
								resizable:true,
								closable:true,
								width:650,
								height:400,
								toolbar: [{
			                    	  text: '添加图片选项',
			                	      iconCls: 'icon-add',
			            	          handler: function() {
			        	                 $(".goods_add_img").append("<br/><input name=\"img\" type=\"file\"/><img src=\"../../js/themes/icons/no.png\" class=\"img_remove\"/>");
			    	                  }
				                 },{
			                    	  text: '添加参数',
			                	      iconCls: 'icon-add',
			            	          handler: function() {
										 $(".goods_param").append($(".goods_add_param").eq(0).clone().append("<img src=\"../../js/themes/icons/no.png\" class=\"img_remove\"/>"));
			    	                  }
				                 }],
								
								buttons:[{
											text:'提交',
											iconCls:'icon-ok',
											handler:function(){
												$.messager.confirm("提交","提交内容",function(b){
													$("#tt").datagrid('appendRow',
													{"img":"goods_item1.jpg","price":92.00,"status":"P","color":"red","size":"M","itemid":"EST-19"});
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
					text:'Excel 导出',
					iconCls:'icon-excel',
					handler:function(){
						$.messager.confirm("标题","删除?",function(b){
							if(b)
							 $.messager.alert("标题","Excel 导出!");
						});
					}
				}],
				
				onDblClickRow:function(){
					alert($("#tt").datagrid('getSelected').img);
				}
			});
			
			$(".goods_add_img .img_remove").click(function(){
				alert(123);
				$(this).prev().remove();
				$(this).remove();
			});
			
	});