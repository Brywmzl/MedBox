---
title: 曲线拟弧
# date: 2020-01-01
tag:
  - Curve
---

<div class="image-preview">
  <img src="https://theme-hope.vuejs.press/assets/image/1.jpg" />
  <img src="https://theme-hope.vuejs.press/assets/image/2.jpg" />
  <img src="https://theme-hope.vuejs.press/assets/image/3.jpg" />
  <img src="https://theme-hope.vuejs.press/assets/image/1.jpg" />
  <img src="https://theme-hope.vuejs.press/assets/image/2.jpg" />
  <img src="https://theme-hope.vuejs.press/assets/image/3.jpg" />
</div>

<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 5px;
     border-radius: 12px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!--
<YouTube id="0JJPfz5dg20" />


```card:json
{
  "title": "Mr.Hope",
  "desc": "Where there is light, there is hope",
  "logo": "https://mister-hope.com/logo.svg",
  "link": "https://mister-hope.com",
  "color": "rgba(253, 230, 138, 0.15)"
}
```

-->