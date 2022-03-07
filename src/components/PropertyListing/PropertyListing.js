import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

import useProperties from './useProperties';

const PropertyListing = ({ params }) => {
  const { properties, loading, error } = useProperties(params);
  return (
    <div className="PropertyListing">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {properties &&
        properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
    </div>
  );
};

export default PropertyListing;
