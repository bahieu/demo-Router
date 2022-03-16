# React Router

- Là một thư viện điều hướng URL tiêu chuẩn trong React.
- Cho phép định tuyến "luồng dữ liệu" (data flow) trong ứng dụng một cách rõ ràng
- Được thiết kế với API đơn giản, từ đó cho phép giải quyết các vấn đề về URL một cách nhanh chóng.

##  Các component trong react-router-dom

### Router:
 - Component bao bọc tất cả component khác của routing.
- <BrowserRouter> được dùng nhiều nhất.
- <HashRouter> là loại routing có dấu #
- <MemoryRouter> giữ lịch sử URL trong bộ nhớ. Thường sử dụng cho mục đích testing
- <StaticRouter> được sử dụng cho server-side rendering

### Route:

- Component này dùng để render component nếu đường dẫn url trùng với path props của Route component

### Switch 
- Gom nhóm các route và đảm bảo tại 1 thời điểm chỉ render duy nhất 1 component đầu tiên có url hiện tại trùng với path props của Route

### Redirect 

- Để chuyển hướng từ đường dẫn này sang đường dẫn khác

### Link 

- Tương tự như thẻ a, giúp đi tới 1 đường dẫn nào đó

### NavLink 

- Là 1 phiên bản đặc biệt của component Link. Tương tự như Link nhưng ta có thể thêm thuộc tính giao diện cho từng element khi nó khớp với đường dẫn
