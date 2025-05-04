import Image from "next/image";
export default function Services() {
  const services = [
    {
      title: "Sửa Tủ Lạnh",
      description:
        "Sửa chữa tất cả các loại tủ lạnh với đội ngũ kỹ thuật viên chuyên nghiệp",
      features: [
        "Sửa chữa gas, block, quạt gió",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/fridge-repair.jpg",
    },
    {
      title: "Sửa Máy Giặt",
      description: "Dịch vụ sửa chữa máy giặt nhanh chóng, chuyên nghiệp",
      features: [
        "Sửa chữa mô tơ, bơm nước",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/washer-repair.jpg",
    },
    {
      title: "Sửa Điều Hòa",
      description: "Sửa chữa điều hòa với công nghệ hiện đại",
      features: [
        "Sửa chữa gas, block, quạt gió",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/ac-repair.jpg",
    },
    {
      title: "Sửa Tivi",
      description:
        "Sửa chữa tất cả các loại tivi với đội ngũ kỹ thuật viên chuyên nghiệp",
      features: [
        "Sửa chữa bo mạch, màn hình",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/tv-repair.jpg",
    },
    {
      title: "Sửa Lò Vi Sóng",
      description: "Dịch vụ sửa chữa lò vi sóng nhanh chóng, chuyên nghiệp",
      features: [
        "Sửa chữa mạch điện, lò vi sóng",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/microwave-repair.jpg",
    },
    {
      title: "Sửa Bếp Điện Từ",
      description: "Sửa chữa bếp điện từ với công nghệ hiện đại",
      features: [
        "Sửa chữa mạch điện, bếp từ",
        "Thay thế linh kiện chính hãng",
        "Vệ sinh, bảo trì định kỳ",
        "Bảo hành dài hạn",
      ],
      image: "/images/stove-repair.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-red-600 py-16">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-20"
            src="/images/services-hero.jpg"
            alt="Services Hero"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dịch Vụ Của Chúng Tôi
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Chúng tôi cung cấp dịch vụ sửa chữa điện lạnh gia dụng chuyên
              nghiệp, nhanh chóng và uy tín
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  className="w-full h-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Liên Hệ Ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bạn cần sửa chữa thiết bị?</span>
            <span className="block text-red-200">
              Liên hệ ngay để được tư vấn miễn phí.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
              >
                Liên Hệ Ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
