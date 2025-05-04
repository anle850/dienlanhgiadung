import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-red-600 py-16">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-20"
            src="/images/about-hero.jpg"
            alt="About Hero"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Về Chúng Tôi
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Đội ngũ chuyên gia với hơn 10 năm kinh nghiệm trong lĩnh vực sửa
              chữa điện lạnh gia dụng
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sứ Mệnh & Tầm Nhìn
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Chúng tôi cam kết mang đến dịch vụ sửa chữa điện lạnh chất lượng
            cao, với đội ngũ kỹ thuật viên chuyên nghiệp và trang thiết bị hiện
            đại.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Sứ Mệnh
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Mang đến giải pháp sửa chữa điện lạnh hiệu quả, tiết kiệm chi
                  phí và thời gian cho khách hàng.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Tầm Nhìn
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Trở thành đơn vị dẫn đầu trong lĩnh vực sửa chữa điện lạnh gia
                  dụng tại Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Đội Ngũ Của Chúng Tôi
              </h2>
              <p className="text-xl text-gray-500">
                Đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào tạo chuyên
                nghiệp và thường xuyên cập nhật kiến thức mới.
              </p>
            </div>
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              <li>
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="/images/team-1.jpg"
                    alt="Team member"
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Nguyễn Văn A</h3>
                      <p className="text-red-600">Kỹ Thuật Viên Trưởng</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="/images/team-2.jpg"
                    alt="Team member"
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Trần Thị B</h3>
                      <p className="text-red-600">Chuyên Viên Kỹ Thuật</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="/images/team-3.jpg"
                    alt="Team member"
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Lê Văn C</h3>
                      <p className="text-red-600">Kỹ Thuật Viên Cao Cấp</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Thống Kê Ấn Tượng
            </h2>
            <p className="mt-3 text-xl text-red-100 sm:mt-4">
              Những con số nói lên sự tin tưởng của khách hàng dành cho chúng
              tôi
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-100">
                Khách Hàng Hài Lòng
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                10,000+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-100">
                Thiết Bị Đã Sửa
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                15,000+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-100">
                Năm Kinh Nghiệm
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                10+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
