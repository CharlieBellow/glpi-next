import { Page } from "../../../../components/Page";
import { services } from '../serviceletter/ServicesList';

import ServiceByCategory from "../../../../components/ServicesComponent/ServiceByCategory";

const ServicesByCategory = () => {
  return (
    <Page
      pagetitle={ "Subcategorias" }
      contentpage={
        <ServiceByCategory listservices={ services } subcategory={ "GTI" } />
      }
    />
  );
};

export default ServicesByCategory;