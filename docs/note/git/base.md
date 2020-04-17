生成密钥
```git
ssh-keygen -t rsa -C "你的邮箱"
Enter passphrase (empty for no passphrase):（验证密码，可选，我一般直接回车）
Enter same passphrase again:（同上）

The key fingerprint is:
SHA256:JTDpHwn57X1ctogIvlPJ0WZSAgGkQx0d22B2L2yiF+o 你的邮箱
The key's randomart image is:
+---[RSA 2048]----+
|   .o+*X+.       |
|  . ..*+*...     |
|   o . *.B=.     |
|    . +.B=o+    o|
|     o.oSoB....o.|
|    . ...=....o. |
|     E  o    .   |
|       o         |
|        .        |
+----[SHA256]-----+

```
查看密钥位置
```git
1.输入  cd ~/.ssh  进入到.ssh 文件夹
2.输入 ls 查看.ssh 文件夹里面有 id_rsa  id_rsa.pub  known_hosts 文件
3.输入pwd 查看.ssh 文件路径位置地址
```
