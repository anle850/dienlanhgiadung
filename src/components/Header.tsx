import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image width={40} height={40} src="/logo-st.png" alt="Logo" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Tận Tâm</span>
              <span className="text-sm text-gray-600">Điện Lạnh Gia Dụng</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="md:flex items-center space-x-8">
            {/* <div className="flex space-x-6">
                <span className="text-gray-700 font-medium transition-colors relative group py-2">
                  Thứ 2 - Chủ nhật 9:00 - 16:00
                </span>
              </div> */}
            <div className="block md:flex items-center space-x-4">
              <a
                href="tel:0123456789"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
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
                <span>(0123) 456-7890</span>
              </a>
              <Link
                href="/contact"
                className="hidden md:display bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-all"
              >
                Đặt Lịch
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div
          className={`md:hidden bg-white border-t transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dịch Vụ
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Giới Thiệu
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Liên Hệ
            </Link>
            <div className="pt-4 border-t space-y-4">
              <a
                href="tel:0123456789"
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-center font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                Gọi Ngay: (0123) 456-7890
              </a>
              <Link
                href="/contact"
                className="block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-center font-medium hover:bg-blue-200 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Đặt Lịch Ngay
              </Link>
            </div>
          </div>
        </div> */}
    </nav>
  );
}
