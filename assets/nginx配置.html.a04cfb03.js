import{_ as n,o as s,c as r,F as t,a as e}from"./app.659fa32e.js";const o={},_=e("p",null,"server{ listen 80; #\uFFFD\uFFFD\u02BE\uFFFD\uFFFD\uFFFD\uFFFD80\uFFFD\u02FF\uFFFD server_name xuyanjie.cn www.xuyanjie.cn; root /usr/local/nginx/html; location / { #\uFFFD\uFFFD80\uFFFD\u02FF\uFFFD\u01FF\uFFFD\uFFFD\u05EA\u03AAhttps rewrite (.*) https://www.xuyanjie.cn$1 permanent; } } server { listen 443 ssl; #\uFFFD\uFFFD\u02BE\uFFFD\uFFFD\uFFFD\uFFFD443\uFFFD\u02FF\u06BC\uFFFDhttps server_name xuyanjie.cn www.xuyanjie.cn;",-1),a=e("pre",null,[e("code",null,`    ssl_certificate /etc/nginx/ssl/Nginx/1_www.xuyanjie.cn_bundle.crt;   #\u05A4\uFFFD\u9E6B\u053F\uFFFD\u013C\uFFFD\xB7\uFFFD\uFFFD
    ssl_certificate_key /etc/nginx/ssl/Nginx/2_www.xuyanjie.cn.key;      #\u05A4\uFFFD\uFFFD\u02FD\u053F\uFFFD\u013C\uFFFD\xB7\uFFFD\uFFFD

    ssl_session_timeout 5m;                                         #5\uFFFD\uFFFD\uFFFD\uFFFDsession\uFFFD\u1EF0\uFFFD\uFFFD\uFFFD\uFFFD
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    location / {    #\uFFFD\uFFFD\u05EA\uFFFD\uFFFD\u02B5\uFFFD\uFFFD\u04E6\uFFFD\uFFFD
        proxy_pass http://127.0.0.1:8080;
        proxy_redirect   off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
	   }
`)],-1),c=e("p",null,"}",-1);function i(l,x){return s(),r(t,null,[_,a,c],64)}var p=n(o,[["render",i],["__file","nginx\u914D\u7F6E.html.vue"]]);export{p as default};
