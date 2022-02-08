var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './SendEmailUsingSpfx.module.scss';
var SendEmailUsingSpfx = /** @class */ (function (_super) {
    __extends(SendEmailUsingSpfx, _super);
    function SendEmailUsingSpfx(props) {
        var _this = _super.call(this, props) || this;
        _this.showUploadedfiles = function () {
            var files = [];
            if (_this.state.files != null) {
                for (var i = 0; i < _this.state.files.length; i++) {
                    files.push(React.createElement("div", { key: i, className: styles.uploadedFile },
                        React.createElement("span", { className: styles.uploadedFile1 }, _this.state.files[i].name),
                        React.createElement("span", { className: styles.uploadedFile2 }, _this.formatBytes(_this.state.files[i].size))));
                }
            }
            return files;
        };
        _this.reader = new FileReader();
        _this.state = {
            email: "",
            subject: "",
            message: "",
            files: null,
            blobs: [],
        };
        _this.showUploadedfiles = _this.showUploadedfiles.bind(_this);
        return _this;
    }
    SendEmailUsingSpfx.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return (React.createElement("div", { className: styles.sendEmailUsingSpfx },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("span", { className: styles.title }, "Send Email using Graph API In SharePoint"),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { className: styles.subject, type: "text", onChange: this.emailHandler.bind(this), placeholder: "To:", value: this.state.email, title: "Please enter email address" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { className: styles.subject, type: "text", onChange: this.subjectHandler.bind(this), placeholder: "Subject", value: this.state.subject, title: "Subject" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("textarea", { className: styles.message, rows: 6, onChange: this.messageHandler.bind(this), placeholder: "Message", value: this.state.message, title: "Message" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: styles.inputFileWraper },
                        React.createElement("input", { className: styles.inputFile, type: "file", name: "filename", multiple: true, onChange: function (file) { _this.uploadHandler(file); }, title: "Drag & drop files here" })),
                    React.createElement("div", null, this.showUploadedfiles()),
                    React.createElement("br", null),
                    React.createElement("button", { className: styles.button, onClick: function () { _this.sendMail(); } }, "Send")))));
    };
    SendEmailUsingSpfx.prototype.emailHandler = function (e) {
        this.setState({ email: e.target.value });
    };
    SendEmailUsingSpfx.prototype.subjectHandler = function (e) {
        this.setState({ subject: e.target.value });
    };
    SendEmailUsingSpfx.prototype.messageHandler = function (e) {
        this.setState({ message: e.target.value });
    };
    SendEmailUsingSpfx.prototype.formatBytes = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes == 0)
            return '0 Bytes';
        var k = 1024, dm = decimals <= 0 ? 0 : decimals || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    SendEmailUsingSpfx.prototype.uploadHandler = function (e) {
        this.setState({ files: e.target.files });
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            this.attachFile(files[i]);
        }
    };
    SendEmailUsingSpfx.prototype.attachFile = function (file) {
        var _this = this;
        this.setState({ blobs: [] });
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
                var blobs = _this.state.blobs.slice();
                var bytes = reader.result.toString().substring(reader.result.toString().indexOf(",") + 1);
                blobs.push(bytes);
                _this.setState({ blobs: blobs });
            };
        });
    };
    SendEmailUsingSpfx.prototype.sendMail = function () {
        var _this = this;
        var mail = {
            message: {
                subject: this.state.subject,
                body: {
                    contentType: "Text",
                    content: this.state.message
                },
                toRecipients: [
                    {
                        emailAddress: {
                            address: this.state.email
                        }
                    }
                ],
                attachments: []
            }
        };
        if (this.state.files != null) {
            for (var i = 0; i < this.state.files.length; i++) {
                mail.message.attachments.push({
                    "@odata.type": "#microsoft.graph.fileAttachment",
                    "name": this.state.files[i].name,
                    "contentBytes": this.state.blobs[i],
                    "contentType": this.state.files[i].type
                });
            }
        }
        this.props.graph.getClient().then(function (client) {
            client.api('me/sendMail')
                .post(mail)
                .then(function (response) {
                _this.setState({
                    email: "",
                    subject: "",
                    message: "",
                    files: null,
                    blobs: [],
                });
            }).catch(function (ex) {
                console.log(ex);
                alert("Something went wrong! Please try again later.");
            });
        });
    };
    return SendEmailUsingSpfx;
}(React.Component));
export default SendEmailUsingSpfx;
//# sourceMappingURL=SendEmailUsingSpfx.js.map