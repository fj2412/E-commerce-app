import { Helmet } from "react-helmet-async"

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'E-Commerce App',
    description: 'This is a great E-Commerce Shop',
    keywords: 'electronics, cheap electronics, eCommerce, shop'
};

export default Meta