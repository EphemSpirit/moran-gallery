// const DUMMY_ITEMS = [
//     {
//         type: "Jewelry",
//         title: "Test Title",
//         description: "This is a description",
//         price: "24.99"
//     }
// ]

// const ProductType = ({ title, price, description,  }) => {};

// export default ProductType;

// export const getStaticProps = ({ req }) => {
//     const matchingTypes = DUMMY_ITEMS.filter(item => item.type.toLowerCase() === req.query.productType)

//     return {
//         props: {
//             title: 
//         }
//     }
// };

// export const getStaticPaths = () => {
//     const routes = ['jewelry', 'portraiture', 'embroidery']

//     const paths = routes.map(route => ({
//         paths: [
//             { params: { productType: route }}
//         ],
//         falback: true
//     }))
// };