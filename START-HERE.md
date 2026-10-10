# เริ่มใช้งาน · Start here

## ภาษาไทย

1. แตกไฟล์ ZIP ก่อน ไม่ต้องอัปโหลด ZIP ไป GitHub โดยตรง
2. สร้าง GitHub repository **ใหม่** สำหรับเกมชุดนี้
3. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดที่แตกออกมา ให้ `Dockerfile`, `package.json`, `railway.json`, `server.mjs` และ `public/` อยู่ที่ระดับบนสุดของ repository
4. ที่ Railway เลือก **New Project → Deploy from GitHub repo** แล้วเลือก repository ใหม่นี้ ไม่ต้องแก้เว็บไซต์หรือ service เดิมของคุณ
5. หลัง deploy สำเร็จ ไปที่ **Settings → Networking → Generate Domain** เพื่อสร้างลิงก์เข้าเกม
6. เปิดลิงก์บนมือถือ จะเห็นเกมครบเก้าเกม ภาษาไทยเป็นค่าเริ่มต้น ปุ่ม EN ใช้เปลี่ยนเป็นภาษาอังกฤษ

ไม่ต้องใส่ AI API key ไม่ต้องติดตั้งฐานข้อมูล และไม่ต้องจ่ายค่าโทเคนเพื่อเล่นเกม ค่าโฮสติ้ง Railway เป็นไปตามแพ็กเกจของคุณ

ถ้าอยากเล่นในคอมพิวเตอร์ก่อน ให้ติดตั้ง Node.js 22 หรือใหม่กว่า เปิด terminal ในโฟลเดอร์ที่แตกไฟล์ แล้วพิมพ์ `npm start` จากนั้นเปิด `http://localhost:3000` ไม่ต้องใช้ `npm install`

ดูคู่มือเต็มใน `README.md` และผลตรวจใน `VERIFICATION.md`

## English

1. **Extract the ZIP.** GitHub does not unpack uploaded ZIPs.
2. Create a **new GitHub repository** for this app.
3. Upload all extracted files/folders together. `Dockerfile`, `package.json`, `railway.json`, `server.mjs`, and `public/` must be at the repository root.
4. In Railway, choose **New Project → Deploy from GitHub repo**, then select this new repository. Leave your existing website/service alone.
5. Once deployment succeeds, open **Settings → Networking → Generate Domain**.
6. Open the generated HTTPS URL on your phone. You will see all nine games, with Thai selected by default and an English switch.

No AI API key or database is needed. Playing has no token charges; Railway hosting follows your plan.

For a local preview, install Node.js 22+, open a terminal in the extracted folder, run `npm start`, and visit `http://localhost:3000`. No dependency installation is needed.

See `README.md` for the full guide and `VERIFICATION.md` for checks and limits.
