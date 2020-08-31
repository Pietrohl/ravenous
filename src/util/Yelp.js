const apiKey = 'Tq2Pr723W6Ad4Cc4Ey3viX6rQexhBThKEA36u9_e73IyacMUzFxqfDn1T7BMIp9ZxLm5IdTuRlzhl50aLdNTqT1dXwin7ZJJV45OMP0dbFcQ49CZA4ZLBgw_6EdNX3Yx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};


export default Yelp;