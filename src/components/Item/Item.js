import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return(
        <article clasName="CardItem">
            <header clasName="Header">
                <h2 clasName="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p clasName="Info">
                    Precio: ${price}
                </p>
                <p clasName="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button clasName='Option'>Ver detalle</button>
            </footer>
        </article>
    )
}