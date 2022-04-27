server{
     listen 80;    #��ʾ����80�˿�
      server_name xuyanjie.cn www.xuyanjie.cn;
      root         /usr/local/nginx/html;
      location / {    #��80�˿�ǿ��תΪhttps
          rewrite (.*) https://www.xuyanjie.cn$1 permanent;
      }
}
server
{
        listen 443 ssl;    #��ʾ����443�˿ڼ�https
        server_name xuyanjie.cn www.xuyanjie.cn;

        ssl_certificate /etc/nginx/ssl/Nginx/1_www.xuyanjie.cn_bundle.crt;   #֤�鹫Կ�ļ�·��
        ssl_certificate_key /etc/nginx/ssl/Nginx/2_www.xuyanjie.cn.key;      #֤��˽Կ�ļ�·��
    
        ssl_session_timeout 5m;                                         #5����session�Ự����
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        location / {    #��ת��ʵ��Ӧ��
            proxy_pass http://127.0.0.1:8080;
            proxy_redirect   off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
    	   }
}