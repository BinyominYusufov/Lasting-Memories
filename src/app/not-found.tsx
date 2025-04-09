import Link from "next/link"

export default function NotFound() {
    return (
        <div
            className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 bg-green-500">
            <div className="flex flex-col items-center justify-center z-10">
                <h1 className="text-[10rem] font-light text-[#f5f0e0] leading-none">404</h1>
                <h2 className="text-4xl font-light text-[#f5f0e0] mb-4">Страница не найдена</h2>
                <p className="text-xl text-[#f5f0e0] mb-10">Извините, мы не можем найти эту страницу</p>
                <Link
                    href="/"
                    className="bg-[#3a7a7a] bg-opacity-70 hover:bg-opacity-90 text-[#f5f0e0] px-8 py-4 rounded-md text-xl transition-colors duration-300"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}
