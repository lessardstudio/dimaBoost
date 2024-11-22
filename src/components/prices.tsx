
import legenda from '@/assets/legenda.png';
import vlastelin from '@/assets/vlastelin.png';
import bogestvo from '@/assets/bogestvo.png';
import titan from '@/assets/titan.png';
import tg from '@/assets/tg.svg';

import Card from './card';


const Prices = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-8">
                <div className="text-3xl">
                    Цены
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Card img={legenda} price={10} />
                    <Card img={vlastelin} price={25} />
                    <Card img={bogestvo} price={50} />
                    <Card img={titan} price={100} />
                </div>
                <div className="flex gap-4 text-3xl justify-center items-center">Для заказа
                    <a href="https://t.me/fuckingtrash322" className='flex gap-2 justify-center items-center text-3xl'>
                        <img src={tg} alt="Card thumbnail" className="w-[50px]" />
                        @fuckingtrash322
                    </a>
                </div>
        </div>
    );
}

export default Prices;