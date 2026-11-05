const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description:
            "Premium wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 249.99,
        image:
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description:
            "Feature-rich smartwatch with fitness tracking"
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 49.99,
        image:
            "https://images.unsplash.com/photo-1629317480826-910f729d1709?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description:
            "Ergonomic aluminum laptop stand that improves posture"
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 129.99,
        image:
            "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description:
            "RGB backlit mechanical keyboard with Cherry MX switches"
    },
    {
        id: 5,
        name: "USB-C Hub",
        price: 39.99,
        image:
            "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description:
            "Multi-port USB-C hub with HDMI, USB 3.0, and SD card"
    }
];

export function getProducts() {
    return products;
}