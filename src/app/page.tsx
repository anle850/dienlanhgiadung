import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Thiết kế mới với video background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        </div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-down">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Giải Pháp Sửa Chữa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Điện Lạnh Gia Dụng
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                Đội ngũ kỹ thuật viên chuyên nghiệp với hơn 10 năm kinh nghiệm,
                phục vụ 24/7 tại TP.HCM
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg flex items-center group"
              >
                <span>Đặt Lịch Ngay</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:0123456789"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all flex items-center group"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="border-b border-dashed border-white/50 group-hover:border-white">
                  (0123) 456-7890
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="flex justify-center">
            <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Thiết kế mới với card hiện đại */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Dịch Vụ Của Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Giải Pháp Toàn Diện Cho Thiết Bị Gia Đình
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              Chúng tôi cung cấp đầy đủ các dịch vụ sửa chữa và bảo trì với cam
              kết chất lượng cao nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative p-8 transition-all duration-300 group-hover:text-white">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-4xl group-hover:bg-white/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-white"
                  >
                    Chi tiết
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Thiết kế mới với hiệu ứng */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Tại Sao Chọn Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Cam Kết Chất Lượng Dịch Vụ
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              Với đội ngũ kỹ thuật viên giàu kinh nghiệm, chúng tôi cam kết mang
              đến dịch vụ tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-3xl text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Thiết kế mới */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Đánh Giá Từ Khách Hàng
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Thiết kế mới */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Bạn Cần Hỗ Trợ Sửa Chữa?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Liên hệ ngay với chúng tôi để được tư vấn và báo giá miễn phí. Đội
              ngũ kỹ thuật viên sẵn sàng phục vụ 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center group"
              >
                <span>Liên Hệ Tư Vấn</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:0123456789"
                className="bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500/30 transition-all inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (0123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: "🛠️",
    title: "Sửa Chữa Tủ Lạnh",
    description:
      "Dịch vụ sửa chữa chuyên nghiệp cho mọi loại tủ lạnh với bảo hành dài hạn",
  },
  {
    icon: "⚡",
    title: "Sửa Chữa Máy Giặt",
    description:
      "Khắc phục mọi sự cố máy giặt với đội ngũ kỹ thuật viên giàu kinh nghiệm",
  },
  {
    icon: "❄️",
    title: "Sửa Chữa Điều Hòa",
    description:
      "Bảo trì, vệ sinh và sửa chữa điều hòa chuyên nghiệp, tiết kiệm điện",
  },
];

const features = [
  {
    icon: "👨‍🔧",
    title: "Chuyên Gia Lành Nghề",
    description:
      "Đội ngũ kỹ thuật viên được đào tạo chuyên sâu với hơn 10 năm kinh nghiệm",
  },
  {
    icon: "⚡",
    title: "Phục Vụ 24/7",
    description: "Hỗ trợ khẩn cấp 24/7, có mặt trong vòng 30 phút tại TP.HCM",
  },

  {
    icon: "💰",
    title: "Giá Cả Minh Bạch",
    description:
      "Báo giá chi tiết trước khi thực hiện, không phát sinh chi phí",
  },
  {
    icon: "✅",
    title: "Bảo Hành Tận Tâm",
    description: "Chế độ bảo hành lên đến 12 tháng cho mọi dịch vụ sửa chữa",
  },
];

const testimonials = [
  {
    initial: "N",
    name: "Nguyễn Văn A",
    location: "Quận 1, TP.HCM",
    text: "Dịch vụ rất chuyên nghiệp, kỹ thuật viên đến đúng giờ và sửa chữa nhanh chóng. Tôi rất hài lòng với chất lượng dịch vụ.",
  },
  {
    initial: "T",
    name: "Trần Thị B",
    location: "Quận 7, TP.HCM",
    text: "Đội ngũ kỹ thuật viên rất nhiệt tình và chuyên nghiệp. Tủ lạnh nhà tôi được sửa chữa nhanh chóng và hoạt động tốt như mới.",
  },
  {
    initial: "L",
    name: "Lê Văn C",
    location: "Quận Bình Thạnh, TP.HCM",
    text: "Giá cả hợp lý, dịch vụ chuyên nghiệp. Đặc biệt ấn tượng với thái độ phục vụ tận tâm của nhân viên kỹ thuật.",
  },
];
