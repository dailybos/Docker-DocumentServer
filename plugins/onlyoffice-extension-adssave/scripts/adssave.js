(function (window, undefined) {
    window.Asc.plugin.init = function () {
        var _textbox = document.getElementById("commit_info");
        _textbox.oninput = _textbox.onpaste = function (e) {
            this.style.borderColor = "";
            document.getElementById("input_error_id").style.display = "none";
        };
    };

    window.Asc.plugin.button = function (id) {
        if (id == 0) {
            var that = this;
            var _textbox = document.getElementById("commit_info");
            var commitinfo = _textbox.value;

            if (commitinfo == "") {
                document.getElementById("commit_info").style.borderColor = "#d9534f";
                document.getElementById("input_error_id").style.display = "block";
                return;
            }
            window.Asc.plugin.executeMethod("GetFileToDownload", [""], function (res) {
                let data = {
                    docUrl: res,
                    comment: commitinfo
                };

                // 向父级窗口发送消息
                window.top.postMessage(
                    JSON.stringify(data),
                    "*"
                );
                alert("签入成功");
                that.executeCommand("close", "");
            });
        }
        else {
            this.executeCommand("close", "");
        }
    };
})(window, undefined);
