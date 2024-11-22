


const Header = () => {
    return(
        <div className="flex justify-center items-center gap-8 mb-8">
            <a href="/prices">Цены</a>
            <a href="/" className="overflow-hidden w-[100px]">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Dota_logo.svg" 
                alt="Dota Logo" 
                style={{ width: 'auto', height: 'auto' }} // Опционально: стили
                className="!w-[200px]"
                />
            </a>
            <a href="/about">О нас</a>
        </div>
    );
}

export default Header;