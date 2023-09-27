var downloadType = "";

try {
    setInterval(() => {
        var elements = document.querySelectorAll('a[faturaindirbtn]');
        if (elements && elements.length > 0) {
            for (const element of elements) {
                element.onclick = function (e) {
                    downloadType = element.getAttribute("downloadtype");
                }
            }
        }
    }, 1000);
} catch {

}


function blobDownload(blobUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', blobUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
        if (this.status == 200) {
            var blob = this.response;
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64data = reader.result;
                var base64ContentArray = base64data.split(",");
                var mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
                var decodedFile = base64ContentArray[1];
                if (mimeType === "text/plain") {
                    if (downloadType === "html") {
                        mimeType = "text/html";
                    }
                    if (downloadType === "xml") {
                        mimeType = "text/xml";
                    }
                }

                alert(mimeType);

                window.flutter_inappwebview.callHandler('blob_download_done', decodedFile, mimeType);
            };
        };
    };
    xhr.send();

}