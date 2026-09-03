# JOZING Ceramics B2B Website

JOZING 陶瓷餐具 B2B 独立站，包含首页、Ready Stock 产品、OEM/ODM、工厂展示、About Us、Contact 和 FAQ 页面。

本版本已完成第一阶段 AI/GEO 优化：24个独立产品页、6篇采购指南、Product/Offer/Breadcrumb/Article/Organization结构化数据、OAI-SearchBot抓取规则、自动Sitemap、IndexNow通知及`llms.txt`。

## 发布到 GitHub Pages

为了保证图片与页面链接正常，请把仓库命名为：

`你的GitHub用户名.github.io`

例如用户名是 `jozingceramics`，仓库名称应为 `jozingceramics.github.io`。

1. 在 GitHub 新建上述名称的公开仓库。
2. 将本压缩包解压后的全部文件上传到仓库根目录。
3. 仓库默认分支使用 `main`。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
6. 打开 **Actions** 页面，等待 `Deploy JOZING Website to GitHub Pages` 完成。
7. 网站地址为 `https://你的GitHub用户名.github.io/`。

## 本地预览

需要 Node.js 22 或更高版本：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 修改网站

- 首页和产品数据：`app/page.tsx`
- 全站样式：`app/globals.css`
- About Us：`app/about/page.tsx`
- Contact：`app/contact/page.tsx`
- FAQ：`app/faq/page.tsx`
- 产品与工厂图片：`public/products`、`public/factory`

## 联系资料

- WhatsApp: +86 152 8018 6517
- Email: sales_b2b@jozing.cn
- Address: No. 3, Gubantou Village, Chao'an District, Chaozhou, Guangdong, China
