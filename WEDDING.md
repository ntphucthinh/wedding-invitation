# Chuyển đổi Landing Page LadiPage sang ReactJS + TailwindCSS + SCSS

## 1. Mục tiêu

Chuyển đổi toàn bộ landing page được export từ LadiPage sang một dự án ReactJS hiện đại sử dụng:

- ReactJS (Vite)
- TailwindCSS
- SCSS
- React Router (nếu cần)
- Framer Motion (animation)
- React Hook Form (form)
- SwiperJS (gallery)
- DayJS (nếu có xử lý thời gian)
- TypeScript (khuyến khích nhưng không bắt buộc)

---

# 2. Yêu cầu

## 2.1 Giữ nguyên giao diện

Toàn bộ giao diện phải giống với file HTML gốc:

- Font
- Màu sắc
- Khoảng cách
- Responsive
- Animation
- Popup
- Gallery
- Countdown
- Form

Sai lệch tối đa khoảng 1~2%.

---

## 2.2 Không sử dụng code của LadiPage

Loại bỏ hoàn toàn:

- ladipage.min.js
- class ladi-*
- javascript của LadiPage
- inline style
- inline animation

Thay thế bằng code React thuần.

---

# 3. Công nghệ

## React

- React 19
- Vite

---

## Styling

- TailwindCSS
- SCSS Modules

Quy tắc:

Tailwind dùng cho:

- Layout
- Flex
- Grid
- Responsive
- Padding
- Margin
- Width
- Height

SCSS dùng cho:

- Animation
- Keyframes
- Hover Effect
- Complex Style
- Font-face

---

## Animation

Thay thế animation của LadiPage bằng:

- Framer Motion
- CSS Animation

Ví dụ:

- fadeIn
- zoomIn
- flipInX
- slideUp
- slideLeft
- slideRight

---

## Icon

Sử dụng:

react-icons

---

## Slider

Sử dụng:

SwiperJS

---

## Countdown

Sử dụng:

react-countdown

---

## Form

Sử dụng:

react-hook-form

---

# 4. Cấu trúc thư mục

```
src/

assets/
    images/
    icons/
    fonts/

components/

    Hero/
    Couple/
    Story/
    Gallery/
    Countdown/
    Event/
    RSVP/
    Wishes/
    Footer/
    Popup/

pages/

    Home/

hooks/

utils/

styles/

    globals.scss
    variables.scss
    animation.scss

App.jsx

main.jsx
```

---

# 5. Phân chia Component

## Hero

Bao gồm:

- Background
- Overlay
- Bride name
- Groom name
- Wedding title
- Scroll indicator

---

## Couple

Bao gồm:

- Ảnh cô dâu
- Ảnh chú rể
- Giới thiệu

---

## Love Story

Timeline tình yêu.

Mỗi item:

- Date
- Image
- Description

---

## Gallery

Hiển thị ảnh.

Yêu cầu:

- Responsive
- Click mở ảnh
- Swipe mobile

Sử dụng:

Swiper + Lightbox

---

## Countdown

Hiển thị:

- Days
- Hours
- Minutes
- Seconds

Tự động cập nhật mỗi giây.

---

## Event

Hiển thị:

- Ngày cưới
- Địa điểm
- Google Map
- Nút chỉ đường

---

## RSVP

Form xác nhận tham dự.

Bao gồm:

- Họ tên
- Điện thoại
- Số lượng
- Lời nhắn

Validation:

- Required
- Phone
- Max length

---

## Wishes

Danh sách lời chúc.

Có thể:

- Fake data
- API
- Firebase

---

## Footer

Thông tin cuối trang.

---

## Popup

Popup cảm ơn hoặc popup xác nhận.

---

# 6. Responsive

Thiết kế cho:

## Mobile

375px

390px

414px

---

## Tablet

768px

---

## Desktop

1280px+

---

# 7. Font

Chuyển toàn bộ font custom của LadiPage sang:

```
src/assets/fonts
```

Tạo:

fonts.scss

```
@font-face {
    font-family: "Wedding";
    src: url("../assets/fonts/....ttf");
}
```

---

# 8. Hình ảnh

Không dùng link online.

Download toàn bộ:

- jpg
- png
- webp

Đưa vào:

```
assets/images/
```

Import bằng React.

Ví dụ:

```
import hero from "@/assets/images/hero.jpg";
```

---

# 9. Tailwind

Sử dụng Tailwind cho:

Container

```
max-w-screen-xl
mx-auto
```

Spacing

```
px-4
py-12
```

Typography

```
text-center
tracking-wide
leading-relaxed
```

Grid

```
grid
grid-cols-1
md:grid-cols-2
```

Flex

```
flex
justify-center
items-center
```

---

# 10. SCSS

Tạo:

```
styles/

variables.scss

animation.scss

mixins.scss

globals.scss
```

---

# 11. Animation

Tạo animation:

```
fadeIn

fadeUp

fadeLeft

fadeRight

zoom

flip

rotate

floating

pulse
```

Sử dụng:

IntersectionObserver hoặc Framer Motion.

---

# 12. Assets

Di chuyển toàn bộ:

- icon
- background
- gallery
- logo
- font

về project local.

Không sử dụng CDN.

---

# 13. Tối ưu

## Lazy Loading

Ảnh lớn:

React Lazy

Intersection Observer

---

## Code Splitting

Các component lớn:

```
const Gallery = lazy(...)
```

---

## Memo

Sử dụng:

```
React.memo
```

nếu cần.

---

# 14. SEO

Sử dụng:

React Helmet

Bao gồm:

- title
- description
- og:image
- og:title

---

# 15. Performance

Yêu cầu:

Lighthouse

Performance > 90

Accessibility > 90

SEO > 90

Best Practices > 90

---

# 16. Coding Convention

- Functional Component
- Hooks
- Không dùng Class Component
- Không inline style
- Không inline script
- Không jQuery
- Không dùng document.querySelector nếu có thể dùng React Ref
- Không copy nguyên HTML của LadiPage

---

# 17. Kết quả cuối

Dự án React có cấu trúc rõ ràng.

Mỗi section là một component độc lập.

Toàn bộ layout sử dụng Tailwind.

Các animation sử dụng Framer Motion hoặc SCSS.

Không còn dependency vào LadiPage.

Code dễ bảo trì, dễ mở rộng và tối ưu cho hiệu năng.

---

# 18. Danh sách công việc (Checklist)

## Giai đoạn 1: Chuẩn bị

- [ ] Khởi tạo project React + Vite
- [ ] Cài đặt TailwindCSS
- [ ] Cài đặt SCSS
- [ ] Cài đặt Framer Motion
- [ ] Cài đặt Swiper
- [ ] Cài đặt React Hook Form
- [ ] Cài đặt React Icons
- [ ] Cài đặt React Countdown
- [ ] Thiết lập alias (`@/`)
- [ ] Tạo cấu trúc thư mục

---

## Giai đoạn 2: Tài nguyên

- [ ] Download toàn bộ hình ảnh từ HTML
- [ ] Download font custom
- [ ] Loại bỏ CDN của LadiPage
- [ ] Đưa assets vào thư mục local

---

## Giai đoạn 3: Chuyển đổi giao diện

- [ ] Hero
- [ ] Couple
- [ ] Love Story
- [ ] Gallery
- [ ] Countdown
- [ ] Event
- [ ] RSVP Form
- [ ] Wishes
- [ ] Footer
- [ ] Popup

---

## Giai đoạn 4: Chức năng

- [ ] Countdown hoạt động
- [ ] Gallery lightbox
- [ ] Form validation
- [ ] Popup hoạt động
- [ ] Animation theo scroll
- [ ] Responsive đầy đủ

---

## Giai đoạn 5: Tối ưu

- [ ] Lazy load ảnh
- [ ] Tối ưu bundle
- [ ] Kiểm tra Lighthouse
- [ ] Kiểm tra responsive
- [ ] Kiểm tra hiệu ứng
- [ ] Kiểm tra tương thích trình duyệt

---

# 19. Tiêu chí hoàn thành (Definition of Done)

- [ ] Giao diện giống bản gốc ≥ 98%
- [ ] Không còn mã nguồn LadiPage
- [ ] Toàn bộ layout sử dụng TailwindCSS
- [ ] SCSS chỉ dùng cho animation và style phức tạp
- [ ] Component hóa toàn bộ giao diện
- [ ] Assets được lưu cục bộ
- [ ] Responsive trên Mobile, Tablet và Desktop
- [ ] Không có lỗi ESLint/Console
- [ ] Build production thành công
- [ ] Code sạch, dễ bảo trì và sẵn sàng mở rộng.