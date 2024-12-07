// config.js
export const config = {
  // 開發時切換這個變數就可以了
  useNgrok: true,  
  
  // API URLs
  urls: {
    local: 'http://localhost:3000',
    ngrok: 'https://4127-140-119-134-119.ngrok-free.app'
  },

  // 根據 useNgrok 決定使用哪個 URL
  get baseURL() {
    return this.useNgrok ? this.urls.ngrok : this.urls.local;
  }
};