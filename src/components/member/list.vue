<template>
  	<div class="list-wrapper">
  		<div class="search-group">
  			 <form class="form-horizontal listForm">
            <div class="row">
              <div class="col-md-10">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="inputEmail3" class="col-md-5 control-label">会员账号：</label>
                      <div class="col-md-7">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="请输入会员账号">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="inputPassword3" class="col-md-5 control-label">驾照编号：</label>
                      <div class="col-md-7">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="请输入驾照编号">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="inputPassword3" class="col-md-5 control-label">手机号码：</label>
                      <div class="col-md-7">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="请输入手机号">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <div class="col-md-offset-2 col-md-4">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> 搜索</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
  		</div>
  		<div class="table-wrapper">
  			<table id="listTable">
        </table>
  		</div>
  	</div>
  
</template> 
 
<script> 
const OK_STATUS = 0;
export default { 

  data () { 
    return { 
   		option: {}
      }; 
  },
  methods:{
  	tableInit(res){
		  $('#listTable').bootstrapTable({
          columns: [
            {
              checkbox: true
            },{
              field: 'uname',
              title: '用户名'
            },{
              field: 'idcard',
              title: '身份证号'
            },{
              field: "sex",
              title: '性别'
            },{
              field: "age",
              title: "年龄"
            },{
              field: "driverNo",
              title: "驾驶证号"
            },{
              field: "idcard_photo_a",
              title: "身份证正面"
            },{
              field: "idcard_photo_b",
              title: "身份证反面"
            },{
              field: "driver_photo_a",
              title: "驾驶证正面"
            },{
              field: "driver_photo_b",
              title: "驾驶证反面"
            },{
              field: "phone",
              title: "手机号"
            },{
              field: "upwd",
              title: "用户密码"
            },{
              field: "create_date",
              title: "创建日期"
            },{
              field: "realName",
              title: "真实姓名"
            }
        ],
          data: res,
          striped: true,
          pagination: true,
          sidePagination: 'server',
          showColumns: true,
          pageSize: 10,
          pageNumber: 1,
          pageList: [10, 25, 50, 100],
          clickToSelect: true,
          queryParamsType: '',
          showToggle: true,
          search: true,
          showRefresh: true,
          /*queryParams: queryParams,
          responseHandler: responseHandler,*/
          contentType: "application/x-www-form-urlencoded"
      });  		
  	}
  },
  created () {
    // this.tableInit();
  	this.$http.get('/api/memberList').then((res) => {
  		if(res.body.data.executeResult){
        this.tableInit(res.body.data.result.rows);
  		}else{
        alert(res.body.data.message);
      }
  	}, (err) => {
  		alert(err);
  	})
  }
}; 
</script> 
 
<style scoped> 
.listForm{
  background-color: #fff;
  margin-bottom: 15px;
}
.listForm .form-group{
  padding:15px;
  padding-bottom: 0;
}
.table-wrapper{
  background-color: #fff;
  padding: 15px;
}
</style> 