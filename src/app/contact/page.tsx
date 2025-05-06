export default function Contact() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Liên Hệ Với Chúng Tôi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Thông Tin Liên Hệ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Địa Chỉ</h3>
                <p className="text-gray-600">
                  Ngã tư cầu gãy
                  <br />
                  Sông Mỹ, Ninh Sơn
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Điện Thoại</h3>
                <p className="text-gray-600">(086) 773-7446</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@dienlanhgiadung.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Giờ Làm Việc</h3>
                <p className="text-gray-600">
                  Thứ 2 - Thứ 6: 8:00 - 18:00
                  <br />
                  Thứ 7: 9:00 - 16:00
                  <br />
                  Chủ nhật: Nghỉ
                  <br />
                  <span className="font-semibold">Dịch vụ khẩn cấp 24/7</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dịch Vụ Cần Sửa
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="refrigerator">Sửa Tủ Lạnh</option>
                  <option value="washing-machine">Sửa Máy Giặt</option>
                  <option value="air-conditioner">Sửa Điều Hòa</option>
                  <option value="other">Dịch vụ khác</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nội Dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
