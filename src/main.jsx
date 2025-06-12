import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil'; // 💡 Thêm dòng này
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot> {/* 💡 Bọc App trong RecoilRoot */}
      <App />
    </RecoilRoot>
  </StrictMode>
);
