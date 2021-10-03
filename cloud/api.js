function qiandao() {
//每日签到
    lightyear.loading('show');
    $.ajax({
        type: 'POST',
        url: '/user/qiandao.php',
        data: {},
        dataType: 'json',
        success: function(data) {
            if (data['code'] == '1') {
                $.confirm({
                    title: '签到成功',
                    content: data['msg'],
                    type: 'green',
                    buttons: {
                        omg: {text: '谢谢',btnClass: 'btn-green',},
                    }
                });
            } else {
                $.confirm({
                    title: '签到失败',
                    content: data['msg'],
                    type: 'red',
                    buttons: {
                        omg: {text: '好的',btnClass: 'btn-red',},
                    }
                });
            }
        lightyear.loading('hide');
        }
    });
}
function gongdantijiao() {
//工单提交
    var title = $("input[name='title']").val();
    var content = $("textarea[name='content']").val();
    if(title.length < 1 || content.length < 1){
        $.confirm({title: '提交失败',content: '请确保必填项不可为空!',type: 'red'});
        return false;
    }
    lightyear.loading('show');
    $.ajax({
        type: 'POST',
        url: '/api/user-api.php',
        data: {
            act: 'gongdantijiao',
            title: title,
            content: content,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                $.confirm({
                    title: '提交成功',
                    content: data['msg'],
                    type: 'green',
                    buttons: {
                        omg: {
                            text: '确定',
                            btnClass: 'btn-green',
                            action: function () {
                                location.href = './worder.php'
                            }
                        },
                    }
                });
            } else {
                $.confirm({
                    title: '提交失败',
                    content: data['msg'],
                    type: 'red',
                });
            }
        }
    });
    lightyear.loading('hide');
}
function gongdanhuifu() {
//工单回复
    var reply = $("input[name='reply']").val();
    var id = $("input[name='id']").val();
    if(reply.length < 1 ||id.length < 1){
        $.confirm({title: '回复失败',content: '请确保必填项不可为空!',type: 'red'});
        return false;
    }
    lightyear.loading('show');
    $.ajax({
        type: 'POST',
        url: '/api/user-api.php',
        data: {
            act: 'gongdanhuifu',
            id: '<?php echo $id;?>',
            reply: reply,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                $.confirm({
                    title: '回复成功',
                    content: data['msg'],
                    type: 'green',
                    buttons: {
                        omg: {
                            text: '确定',
                            btnClass: 'btn-green',
                            action: function () {location.href = './worderdetail.php?id=' + id}
                        },
                    }
                });
            } else {
                $.confirm({title: '回复失败',content: data['msg'],type: 'red',});
            }
        }
    });
    lightyear.loading('hide');
}
$('.jiagezu').click(function () {
    //价格组升级
    lightyear.loading('show');
    var id = $(this).attr('buy');
    $.ajax({
        type: 'get',
        url: '/api/user-api.php',
        data: {
            act: 'jiagezu',
            update: id,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                $.confirm({
                    title: '升级成功',
                    content: data['msg'],
                    type: 'green',
                    buttons: {
                        omg: {text: '好的',btnClass: 'btn-green'},
                    }
                });
            } else {
                $.confirm({
                    title: '升级失败',
                    content: data['msg'],
                    type: 'red',
                });
            }
        }
    });
    lightyear.loading('hide');
});

function service_notes() {
    //服务备注修改
    var user = $("input[name='user']").val();
    var pass = $("input[name='pass']").val();
    var service = $("input[name='service']").val();
    $.confirm({
        title: '填写备注',
        content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<input type="text" placeholder="备注" class="name form-control" required />' +
            '</div>' +
            '</form>',
        buttons: {
            formSubmit: {
                text: '提交',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    if (!name) {
                        $.alert('备注输入为空');
                        return false;
                    }
                    lightyear.loading('show');
                    $.ajax({
                        type: 'POST',
                        url: '/api/bz.php',
                        data: {
                            user: user,
                            pass: pass,
                            username: service,
                            bz: name,
                        },
                        dataType: 'json',
                        success: function (data) {
                            if (data['code'] == '1') {
                                $.alert(data['msg']);
                            } else {
                                $.alert(data['msg']);
                            }
                        }
                    });
                    lightyear.loading('hide');
                }
            },
            cancel: {
                text: '取消'
            },
        },
        onContentReady: function () {
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                e.preventDefault();
                jc.$$formSubmit.trigger('click');
            });
        }
    })
}
function service_pass() {
    //服务密码修改
    var user = $("input[name='user']").val();
    var pass = $("input[name='pass']").val();
    var service = $("input[name='service']").val();
    $.confirm({
        title: '重置密码',
        content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<input type="text" placeholder="请输入新密码" class="name form-control" required />' +
            '</div>' +
            '</form>',
        buttons: {
            formSubmit: {
                text: '提交',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    if (!name) {
                        $.alert('新密码输入为空');
                        return false;
                    }
                    lightyear.loading('show');
                    $.ajax({
                        type: 'POST',
                        url: '/api/mm.php',
                        data: {
                            user: user,
                            pass: pass,
                            username: service,
                            mm: name,
                        },
                        dataType: 'json',
                        success: function (data) {
                            if (data['code'] == '1') {
                                $.alert(data['msg']);
                            } else {
                                $.alert(data['msg']);
                            }
                        }
                    });
                    lightyear.loading('hide');
                }
            },
            cancel: {
                text: '取消'
            },
        },
        onContentReady: function () {
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                e.preventDefault();
                jc.$$formSubmit.trigger('click');
            });
        }
    })
}

function service_renewal() {
//服务续费
    var time = $("select[name='time']").val();
    var id = $("input[name='id']").val();
    if (time.length < 1) {
        $.alert('周期不可为空');
        return false;
    } else {
        lightyear.loading('show');
        $.ajax({
            type: 'POST',
            url: '/api/user-api.php',
            data: {
                act: 'xufei',
                id: id,
                time: time
            },
            dataType: 'json',
            success: function(data) {
            $.alert(data['msg']);
                  lightyear.loading('hide');
            }
        });
    }
}