# ⚡ Hướng dẫn nhanh: Setup domain hoanglong1812003.me

## 🎯 Mục tiêu
Host website tại: `https://hoanglong1812003.me`

---

## 📋 Checklist 5 bước

### ✅ Bước 1: Mua domain (30 phút)
- [ ] Truy cập https://www.namecheap.com
- [ ] Tìm kiếm: `hoanglong1812003.me`
- [ ] Mua và thanh toán (~$10-12/năm)
- [ ] Xác nhận email

### ✅ Bước 2: Cấu hình DNS (10 phút)
- [ ] Login Namecheap → Domain List → Manage
- [ ] Advanced DNS tab
- [ ] Thêm 4 A records:
  ```
  @ → 185.199.108.153
  @ → 185.199.109.153
  @ → 185.199.110.153
  @ → 185.199.111.153
  ```
- [ ] Thêm 1 CNAME record:
  ```
  www → YOUR_USERNAME.github.io
  ```
- [ ] Save

### ✅ Bước 3: Push CNAME file (2 phút)
```bash
cd d:\github-profile\phatvphat.github.io
git add CNAME
git commit -m "Add custom domain"
git push
```

### ✅ Bước 4: Cấu hình GitHub Pages (5 phút)
- [ ] GitHub repo → Settings → Pages
- [ ] Custom domain: `hoanglong1812003.me`
- [ ] Save
- [ ] Đợi DNS check pass (màu xanh)
- [ ] Enable "Enforce HTTPS"

### ✅ Bước 5: Đợi DNS propagation (1-48 giờ)
- [ ] Kiểm tra: https://dnschecker.org
- [ ] Test website: https://hoanglong1812003.me

---

## 🔍 DNS Records cần thêm

Copy paste vào DNS management:

```
Type    Host    Value                       TTL
A       @       185.199.108.153             Auto
A       @       185.199.109.153             Auto
A       @       185.199.110.153             Auto
A       @       185.199.111.153             Auto
CNAME   www     YOUR_USERNAME.github.io     Auto
```

**⚠️ Thay YOUR_USERNAME bằng GitHub username của bạn!**

---

## ⏱️ Timeline

- **0h**: Mua domain + cấu hình DNS
- **1h**: Push CNAME + cấu hình GitHub
- **1-4h**: DNS bắt đầu propagate
- **24-48h**: DNS propagate hoàn toàn
- **✅ Xong**: Website hoạt động tại hoanglong1812003.me

---

## 💰 Chi phí

- Domain: ~$10-12/năm
- GitHub Pages: Miễn phí
- SSL: Miễn phí

**Tổng: ~$10-12/năm**

---

## 🆘 Gặp vấn đề?

### DNS check failed?
→ Đợi thêm 24-48 giờ

### Website không load?
→ Kiểm tra DNS tại dnschecker.org

### HTTPS không hoạt động?
→ Đợi 10-15 phút sau khi enable

---

## 📞 Liên hệ hỗ trợ

- Namecheap Support: https://www.namecheap.com/support/
- GitHub Docs: https://docs.github.com/en/pages

---

## ✨ Kết quả

Website của bạn sẽ hoạt động tại:
```
https://hoanglong1812003.me
```

**Chuyên nghiệp và dễ nhớ!** 🚀
