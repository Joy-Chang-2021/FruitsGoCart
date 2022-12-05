# Shopping Cart

[Github page](https://Joy-Chang-2021.github.io/FruitsGo_Cart/)

模擬7-11的賣貨便網站，可選擇商品品項及數量、交易取貨的方式，結帳後顯示交易的詳細資料畫面。

---

## 目標功能

- [x] 使用 Vue Cli 或 Nuxt 完成以下功能
  - 此次嘗試使用 Vue 3 進行實作
- [x] 以 SCSS 撰寫內容樣式
  - 此次嘗試使用 Tailwind css 進行實作，並結合 SCSS 樣式管理
- [x] 應用 Component 功能
  - 例：商品卡片、購物車狀態、訂單表格等，幫助劃分整理架構及功能
- [x] 應用 Computed 功能
  - 例：商品及運費的價錢總計，根據使用者的選擇即時顯示畫面資料
- [x] 製作輸入類型: text, radio, select，同一 Component 切換 prop 來改變對應的輸入類型，並可套用 v-model
  -  根據結帳的步驟，顯示相應的結帳選項，並轉換需要使用的輸入樣式
- [x] 可切換頁面
  - 使用 Vue-router 切換商品及結帳頁面
- [x] 設定頁面 title, description
  - 使用 Vue-router 的路由守衛 router.beforeEach，根據路由切換不同的 title 和 description
- [x] 設定 Global 參數，讓頁面的顏色、主題會隨著更換
  - 點擊頁首右側的日蝕icon，可轉換網頁的燈光/夜間模式 
- [x] 串接一組列表資料 API
  - 使用 fake API 網站製作簡易商店介紹資料，使用 axios 套件串接資料並渲染畫面
- [x] 程式架構做到最大的沿用性、維護性，並於 Readme 說明想法
  - 購物車畫面的格式及排列皆不太相同，盡量將相同類型的資料放在同一個 Component 中，例：商品明細、付款及取貨方法、訂購及取貨人資料等，再根據購物的階段切換顯示每個 Component 內容
  - 所有畫面的共用樣式、各自畫面的共用樣式及獨立元件的樣式，使用不同的 SCSS 檔案進行整理
- [ ] 使用 Firebase Hosting，提供連結進行瀏覽

- [x] 提供 Github 程式碼

---

## 專案下載

1. 於終端機輸入下方指令，將專案複製至本機的目標資料夾
```
git clone https://github.com/Joy-Chang-2021/FruitsGo_Cart.git
```
2. 進入專案資料夾
```
cd FruitsGo_Cart
```
3. 安裝 npm 套件
```
npm install
```
4. 啟動專案
```
npm run dev
```
5. 根據終端機顯示之網址，於瀏覽器開啟查看網站