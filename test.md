inline file condition:

1. response header: Content-Disposition: inline; filename="da9ff27376339fe285b7e115.jpg";
2. broswer: can open the file


ios:

- jpg/gif    ok
- mp4    ok
- xlxs   ok
- doc/docx ok

android;

- jpg/gif    ok
- mp4    ok
- xlxs   need extra broswer
- doc/docx need extra broswer


curl https://oi3srg3px.qnssl.com/da9ff27376339fe285b7e115.jpg -v
*   Trying 218.92.152.7...
* Connected to oi3srg3px.qnssl.com (218.92.152.7) port 443 (#0)
* found 148 certificates in /etc/ssl/certs/ca-certificates.crt
* found 597 certificates in /etc/ssl/certs
* ALPN, offering http/1.1
* SSL connection using TLS1.2 / ECDHE_RSA_AES_128_GCM_SHA256
*    server certificate verification OK
*    server certificate status verification SKIPPED
*    common name: *.qnssl.com (matched)
*    server certificate expiration date OK
*    server certificate activation date OK
*    certificate public key: RSA
*    certificate version: #3
*    subject: C=CN,L=Shanghai,O=Shanghai Qiniu Information Technologies Co.\, Ltd.,OU=IT Dept.,CN=*.qnssl.com
*    start date: Fri, 02 Feb 2018 00:00:00 GMT
*    expire date: Sat, 10 Nov 2018 12:00:00 GMT
*    issuer: C=US,O=DigiCert Inc,OU=www.digicert.com,CN=GeoTrust RSA CA 2018
*    compression: NULL
* ALPN, server accepted to use http/1.1
> GET /da9ff27376339fe285b7e115.jpg HTTP/1.1
> Host: oi3srg3px.qnssl.com
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Thu, 05 Apr 2018 06:53:55 GMT
< Content-Type: image/jpeg
< Content-Length: 8489
< Connection: keep-alive
< Server: openresty
< Accept-Ranges: bytes
< Access-Control-Allow-Origin: *
< Access-Control-Expose-Headers: X-Log, X-Reqid
< Access-Control-Max-Age: 2592000
< Cache-Control: public, max-age=31536000
< Content-Disposition: inline; filename="da9ff27376339fe285b7e115.jpg"; filename*=utf-8' 'da9ff27376339fe285b7e115.jpg
< Content-Transfer-Encoding: binary
< ETag: "FrxfolBzXHQin2aq5bKdLs25gsZx"
< Last-Modified: Thu, 05 Apr 2018 06:53:18 GMT
< X-Log: mc.g/404;rs37_14.sel;rwro.get;RS.dbs;RS;mc.s:1;DC/404;s.gh;PFDS;IO:36
< X-M-Log: QNM:tj11;QNM3
< X-M-Reqid: vwkAAJvb7J6ydyIV
< X-Qiniu-Zone: 0
< X-Qnm-Cache: Hit
< X-Reqid: cyIAAFJwE6yqdyIV
< X-Svr: IO
< X-Ser: BC23_dx-lt-yd-shandong-jinan-5-cache-8, BC12_dx-jiangsu-yancheng-3-cache-1
< X-Cache: HIT from BC12_dx-jiangsu-yancheng-3-cache-1(baishan)

< HTTP/1.1 200 OK
< Server: nginx
< Date: Thu, 05 Apr 2018 06:49:59 GMT
< Content-Type: image/jpeg
< Content-Length: 8489
< Connection: keep-alive
< Access-Control-Allow-Credentials: true
< Pragma: public
< Accept-Ranges: bytes
< Expires: 0
< Cache-Control: must-revalidate, post-check=0, pre-check=0
< Content-Transfer-Encoding: binary
< Content-Disposition: attachment; filename="1.jpg"
< X-Content-Type-Options: nosniff
< X-Content-Type-Options: nosniff


