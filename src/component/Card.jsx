import React from "react";




function Product() {
    const data = [

        {
            image: "https://epacflexibles.com/wp-content/uploads/2020/04/coffee_bag_mockup.png",
            name: "The Coffee Beans..",
            address: "Pandesara",
            price: 550,
        },
        {
            image: "https://www.next.od.ua/wp-content/uploads/2022/09/ec_ec_red_1kg_1.png",
            name: "Signal Coffee Shop",
            address: "Althan",
            price: 350,
        },
        {
            image: "https://savatava.ru/wp-content/uploads/2023/06/vetnamskij-kofe-v-zernah-viet-cong-vetkong-gourmet-arabika-robusta-1000-g-e1688006043464.png",
            name: "Atlanta Coffee",
            address: "Adajan",
            price: 350,
        },
        {
            image: "https://www.koffiepiraat.nl/media/catalog/product/cache/ca7643594a701a22dd7e6f5af8c43821/m/_/m_venpick_der_himmlische_koffiebonen_500g_1_.png",
            name: "Creative Coffee",
            address: "Udhna",
            price: 350,
        },

    ]

    return (
        <>
            <div className="container position-absolute top-50 start-50 translate-middle">
                <div class="">
                <h1 class="text-center">COFFEE DAY</h1>
                    <div className="row ">
                        {
                            data && data.map((element) => {
                                return (
                                    
                                    <div className="col-3  ">
                                        <div class=" card-d p-3" >
                                        <img className="img-fluid" width='100%' src={element.image} alt="" />
                                        <h2 class="fs-3 mt-3 ps-2">{element.name}</h2>
                                        <h3 class="fs-5 ps-2">Address: {element.address}</h3>
                                        <h4 class="fs-5 ps-2">Rs: {element.price}</h4>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;