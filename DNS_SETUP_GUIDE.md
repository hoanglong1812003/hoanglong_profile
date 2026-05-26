# 🌐 DNS Setup Guide for GitHub Pages

## ❌ Current Error

```
Both hoanglong1812003.me and its alternate name are improperly configured
Domain's DNS record could not be retrieved.
```

**Cause**: DNS records are not configured or not propagated yet.

---

## ✅ Solution

### Step 1: Check if You Own the Domain

**Do you own hoanglong1812003.me?**

- **YES** → Follow Option A (Configure DNS)
- **NO** → Follow Option B (Use GitHub URL)

---

## 📋 Option A: Configure DNS (If You Own the Domain)

### 1. Login to Your Domain Provider

Common providers:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- HostGator
- etc.

### 2. Add DNS Records

Go to DNS Management section and add these records:

#### A Records (Required)
Add **4 A records** pointing to GitHub's IP addresses:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### CNAME Record (For www subdomain)
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Example Configuration

**For domain: hoanglong1812003.me**
**GitHub username: hoanglong1812003**

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   hoanglong1812003.github.io
```

### 4. Wait for DNS Propagation

- **Time**: 24-48 hours (usually faster, 1-4 hours)
- **Check status**: https://dnschecker.org

### 5. Verify in GitHub Pages Settings

1. Go to your repository on GitHub
2. Settings → Pages
3. Custom domain should show: `hoanglong1812003.me`
4. Wait for DNS check to pass (green checkmark)
5. Enable "Enforce HTTPS" (after DNS check passes)

---

## 📋 Option B: Use GitHub Pages URL (No Custom Domain)

### If You Don't Own the Domain:

1. **Remove CNAME file** (already done)
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Remove CNAME - use GitHub Pages URL"
   git push
   ```

3. **Your site will be available at**:
   ```
   https://YOUR_USERNAME.github.io
   ```

4. **Update links in your resume/LinkedIn**:
   - Use GitHub Pages URL instead
   - Example: `https://hoanglong1812003.github.io`

---

## 🔍 Troubleshooting

### Error: "Domain's DNS record could not be retrieved"

**Causes**:
1. DNS records not added yet
2. DNS not propagated yet
3. Wrong DNS records
4. Domain doesn't exist

**Solutions**:
1. Double-check DNS records
2. Wait 24-48 hours
3. Use `dig` or `nslookup` to verify:
   ```bash
   dig hoanglong1812003.me
   nslookup hoanglong1812003.me
   ```
4. Contact domain provider support

### Error: "CNAME already taken"

**Cause**: Another GitHub repository is using this domain

**Solution**: 
- Make sure you own the domain
- Remove CNAME from other repositories
- Contact GitHub support if needed

### DNS Not Propagating

**Check propagation**:
- https://dnschecker.org
- https://www.whatsmydns.net

**Speed up**:
- Clear DNS cache on your computer
- Use different DNS servers (8.8.8.8, 1.1.1.1)
- Wait longer (up to 48 hours)

---

## 📝 Step-by-Step for Common Providers

### GoDaddy

1. Login to GoDaddy
2. My Products → Domains
3. Click domain → DNS
4. Add records as shown above
5. Save

### Namecheap

1. Login to Namecheap
2. Domain List → Manage
3. Advanced DNS tab
4. Add records as shown above
5. Save

### Cloudflare

1. Login to Cloudflare
2. Select domain
3. DNS tab
4. Add records as shown above
5. Proxy status: DNS only (gray cloud)
6. Save

### Google Domains

1. Login to Google Domains
2. My domains → Manage
3. DNS tab
4. Custom records
5. Add records as shown above
6. Save

---

## ✅ Verification Checklist

After configuring DNS:

- [ ] Added 4 A records (185.199.108.153, 109, 110, 111)
- [ ] Added CNAME record for www
- [ ] Waited 1-4 hours minimum
- [ ] Checked DNS propagation (dnschecker.org)
- [ ] GitHub Pages shows green checkmark
- [ ] HTTPS enabled
- [ ] Site loads at custom domain
- [ ] www subdomain redirects correctly

---

## 🎯 Recommended Approach

### For Now (Immediate):
1. **Use GitHub Pages URL** (CNAME removed)
2. Deploy and test your site
3. Share: `https://YOUR_USERNAME.github.io`

### Later (When You Have Domain):
1. Purchase domain `hoanglong1812003.me`
2. Configure DNS records
3. Add CNAME file back
4. Wait for propagation
5. Update links

---

## 📞 Need Help?

### GitHub Pages Documentation:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### DNS Checker:
https://dnschecker.org

### GitHub Support:
https://support.github.com

---

## 💡 Quick Fix (Right Now)

**To get your site working immediately:**

```bash
# CNAME file already removed
# Just commit and push:

git add .
git commit -m "Remove custom domain, use GitHub Pages URL"
git push
```

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io
```

**No DNS configuration needed!**

---

## 🎉 Summary

**Problem**: Custom domain not configured
**Quick Fix**: Use GitHub Pages URL (CNAME removed)
**Long-term**: Buy domain + configure DNS

**Your site is ready to deploy with GitHub Pages URL!** 🚀

---

*Last Updated: May 26, 2026*
