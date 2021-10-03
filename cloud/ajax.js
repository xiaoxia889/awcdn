function qiandao() {
//每日签到
    layer.load(0, { shade:  [0.2, '#000'] });
    $.ajax({
        type: 'POST',
        url: '/user/qiandao.php',
        data: {},
        dataType: 'json',
        success: function(data) {
            if (data['code'] == '1') {
                layer.alert(data.msg, {icon: 'success'});
            } else {
                layer.alert(data.msg, {icon: 'error'});
            }
        layer.closeAll('loading');
        }
    });
}
function gongdantijiao() {
//工单提交
    var title = $("input[name='title']").val();
    var content = $("textarea[name='content']").val();
    if(title.length < 1 || content.length < 1){
        layer.alert('请确保必填项不可为空!');
        return false;
    }
    layer.load(0, { shade:  [0.2, '#000'] });
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
                layer.alert(data.msg, {icon: 'success'});
                layer.closeAll('loading');
            } else {
                layer.alert(data.msg, {icon: 'error'});
                layer.closeAll('loading');
            }
        }
    });
}
function gongdanhuifu() {
//工单回复
    var reply = $("input[name='reply']").val();
    var id = $("input[name='id']").val();
    if(reply.length < 1 ||id.length < 1){
        layer.alert('请确保必填项不可为空!');
        return false;
    }
    layer.load(0, { shade:  [0.2, '#000'] });
    $.ajax({
        type: 'POST',
        url: '/api/user-api.php',
        data: {
            act: 'gongdanhuifu',
            id: id,
            reply: reply,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                layer.alert(data.msg, {icon: 'success'});
                layer.closeAll('loading');
            } else {
                layer.alert(data.msg, {icon: 'error'});
                layer.closeAll('loading');
            }
        }
    });
}

function service_notes() {
    //服务备注修改
    var user = $("input[name='user']").val();
    var pass = $("input[name='pass']").val();
    var service = $("input[name='service']").val();
    layer.prompt({
        title: '修改备注',
        formType: 0
    }, function (beizhu, index) {
        layer.close(index);
        layer.load(0, {shade: [0.2, '#000']});
        $.ajax({
            type: 'POST',
            url: '/api/bz.php',
            data: {
                user: user,
                pass: pass,
                username: service,
                bz: beizhu,
            },
            dataType: 'json',
            success: function (data) {
                if (data.status == 'success') {
					layer.alert(data.msg, {icon: 'success'});
					layer.closeAll('loading');
                } else {
                    layer.alert(data.msg, {icon: 'error'});
                    layer.closeAll('loading');
                }
            }
        });
    });
}

function service_pass() {
    //服务密码修改
    var user = $("input[name='user']").val();
    var pass = $("input[name='pass']").val();
    var service = $("input[name='service']").val();
    layer.prompt({
        title: '修改密码',
        formType: 1
    }, function (mima, index) {
        layer.close(index);
        if (mima.length < 1) {
            layer.alert('密码不可为空!');
            return false;
        }
        layer.load(0, {shade: [0.2, '#000']});
        $.ajax({
            type: 'POST',
            url: '/api/mm.php',
            data: {
                user: user,
                pass: pass,
                username: service,
                mm: mima,
            },
            dataType: 'json',
            success: function (data) {
                if (data.code == '1') {
                    layer.alert(data.msg, {icon: 'success'});
                    layer.closeAll('loading');
                } else {
                    layer.alert(data.msg, {icon: 'error'});
                    layer.closeAll('loading');
                }
            }
        });
    });
}


function service_renewal() {
    //服务续费
    var time = $("select[name='time']").val();
    var id = $("input[name='id']").val();
    if (time.length < 1) {
        layer.alert('请确保必填项不可为空!');
        return false;
    } else {
        layer.load(0, {shade: [0.2, '#000']});
        $.ajax({
            type: 'POST',
            url: '/api/user-api.php',
            data: {
                act: 'xufei',
                id: id,
                time: time
            },
            dataType: 'json',
            success: function (data) {
                layer.alert(data.msg);
                layer.closeAll('loading');
            }
        });
    }
}

function dns_add() {
    //添加域名
    var sub_domain = $("input[name='sub_domain']").val();
    var domain = $("select[name='domain']").val();
    var record_type = $("select[name='record_type']").val();
    var value = $("input[name='value']").val();
    layer.load(0, {shade: [0.2, '#000']});
    $.ajax({
        type: 'POST',
        url: '//dns.92rbq.com/api/index.php',
        data: {
            act: 'tianjia',
            username: $("input[name='user']").val(),
            password: $("input[name='pass']").val(),
            domain: domain,
            sub_domain: sub_domain,
            record_type: record_type,
            value: value,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                setTimeout(function () {
                    location.href = './dnsp.php'
                }, 1000);
                layer.alert(data.msg, {icon: 'success'});
                layer.closeAll('loading');
            } else {
                layer.alert(data.msg, {icon: 'error'});
                layer.closeAll('loading');
            }
        }
    });
}

function dns_delete() {
    //域名删除
    var id = $(this).attr('buy');
    layer.load(0, {shade: false});
    $.ajax({
        type: 'post',
        url: '//dns.92rbq.com/api/index.php',
        data: {
            act: 'shanchu',
            username: $("input[name='user']").val(),
            password: $("input[name='pass']").val(),
            id: id,
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                setTimeout(function () {
                    location.href = './dnsp.php'
                }, 1000);
                layer.alert(data.msg, {icon: 'success'});
                layer.closeAll('loading');
            } else {
                layer.alert(data.msg, {icon: 'error'});
                layer.closeAll('loading');
            }
        }
    });
}

function service_buy() {
    //服务购买
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var product = $("input[name='product']").val();
    var promo_code = $("input[name='promo_code']").val();
    var time = $("select[name='time']").val();
    layer.load(0, { shade:  [0.2, '#000'] });
    $.ajax({
        type: 'POST',
        url: '/api/user-api.php',
        data: {
            act: 'buy',
            username: username,
            password: password,
            product: product,
            time: time,
            promo_code: promo_code
        },
        dataType: 'json',
        success: function (data) {
            if (data.code == 1) {
                layer.alert(data.msg, {icon: 'success'});
                layer.closeAll('loading');
            } else {
                layer.alert(data.msg, {icon: 'error'});
                layer.closeAll('loading');
            }
        }
    });
}
function info() {
//修改信息
    layer.load(0, { shade:  [0.2, '#000'] });
    $.ajax({
        type: 'POST',
        url: '/api/user-api.php',
        data: {
            act:'xgxx',
            email: $("input[name='email']").val(),
            password: $("input[name='password']").val(),
        },
        dataType: 'json',
        success: function(data) {
            if (data['code'] == '1') {
                layer.alert(data.msg, {icon: 'success'});
            } else {
                layer.alert(data.msg, {icon: 'error'});
            }
        layer.closeAll('loading');
        }
    });
}