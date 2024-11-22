import React from 'react';

interface CardProps {
  img: string; // Ссылка на изображение
  text?: string; // Текст (опционально)
  price: number; // Цена
}

const Card: React.FC<CardProps> = ({ img, text, price }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-[300px] border bg-gray-700  p-4 rounded-md shadow-md">
      {/* Изображение */}
      <img src={img} alt="Card thumbnail" className="w-full h-auto rounded-md" />

      {/* Текст */}
      <div className="text text-center">
        {text
          ? text
          : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, temporibus dolores.'}
      </div>

      {/* Цена */}
      <div className="text-3xl text-green-600 font-bold">{price}$</div>
    </div>
  );
};

export default Card;