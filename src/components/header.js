import { Link } from "react-router-dom";
import CustomLink from "./customLink";

function Header() {
  return (
    <header className=" mt-10 flex flex-col px-auto mx-auto p-auto items-start ">
      <div className="mx-auto">
        <div className=" flex flex-row mx-auto mb-5 items-center justify-center">
          <div className=" flex flex-row items-center justify-start">
            <p className=" text-6xl ">🍧</p>
            {/* <img
          className=" w-24 h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1TWj0siK4N4MqN0lqYiTd4BB8HBiX9zGI7xggtqOXq8OsF5t6fr38ZOV-I5gZsZZe4Y&usqp=CAU"
          alt="foto"
        /> */}
            <div className=" flex flex-row items-center justify-start  rounded-md border border-gray-700 ml-16 mr-20">
              <input
                type="text"
                placeholder="    Я ищу..."
                className="  bg-none  w-80 h-10 rounded-l-md"
              />
              <span className=" flex flex-row items-center justify-start rounded-md bg-blue-800 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Link to={"#"} className=" font-medium text-white">
                  НАЙТИ
                </Link>
              </span>
            </div>
          </div>
          <div className=" flex flex-row items-center  justify-start ">
            <Link
              to={"#"}
              className=" flex flex-row items-center justify-start mr-4 font-semibold text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-1  text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Вход
            </Link>
            <Link
              to={"#"}
              className=" flex flex-row items-center font-semibold justify-start text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2  text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div className="items-center justify-start">
                Моя корзинка <span className="text-black">▾</span>
                <br />
                <span className="text-blue-500 font-bold">0 cyм</span>
              </div>
            </Link>
          </div>
        </div>
        <nav className=" flex flex-row lg:-ml-20 items-center justify-center space-x-10">
          <CustomLink to={"/"} className=" font-bold  ">
            Главная
          </CustomLink>
          <Link to={"#"} className=" font-bold  ">
            О нас▾
          </Link>
          <CustomLink to={"/magazin"} className=" font-bold  ">
            Магазин
          </CustomLink>
          <CustomLink to={"/novosti"} className=" font-bold  ">
            Новости
          </CustomLink>
          <CustomLink to={"/kantakt"} className=" font-bold  ">
            Контакты
          </CustomLink>
          <Link to={"#"} className=" font-bold  ">
            Ru▾
          </Link>
          <Link to={"#"} className=" font-bold  ">
            +998 97 777 77 77
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
