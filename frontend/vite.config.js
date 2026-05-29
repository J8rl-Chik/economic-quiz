import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 브라우저에서 '/api'로 시작하는 요청을 보내면 가로챕니다.
      '/api': {
        target: 'http://localhost:8080', // 백엔드 서버 주소
        changeOrigin: true, // 대상 서버 구성에 맞게 호스트 헤더 변경
        rewrite: path => path.replace(/^\/api/, '') // URL에서 '/api'를 제거하고 백엔드에 전달
      }
    }
  }
});
